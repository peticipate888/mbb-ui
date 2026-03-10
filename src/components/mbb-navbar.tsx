"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "../utils/cn";
import {
  imgBrandLogo,
  imgPetAvatar,
  iconBell,
  iconNavbarToggler,
  iconNavbarTogglerClose,
  iconArrowRight,
} from "../assets/index";

interface NavItem {
  label: string;
  href: string;
}

interface MbbNavbarProps {
  items?: NavItem[];
  currentPath?: string;
  isLoggedIn?: boolean;
  avatarUrl?: string;
  onLogin?: () => void;
  onLogout?: () => void;
}

const defaultItems: NavItem[] = [
  { label: "認識毛幫幫", href: "/about" },
  { label: "方案介紹", href: "/pricing" },
  { label: "毛孩百科", href: "/catpedia" },
  { label: "毛孩專欄", href: "/blog" },
  { label: "毛孩商城", href: "https://shop.mbb.pet" },
];

function MbbNavbar({ items = defaultItems, currentPath = "/", isLoggedIn, avatarUrl, onLogin, onLogout }: MbbNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isExternal = (href: string) => href.startsWith("http");

  return (
    <header className="fixed top-0 left-0 right-0 z-[1020]">
      {/* Desktop */}
      <nav className="hidden xl:block py-3">
        <div className="mx-auto max-w-[1200px] flex items-center bg-white rounded-pill shadow-card px-6 h-[56px]">
          <Link href="/" className="shrink-0">
            <img src={imgBrandLogo} alt="毛幫幫" className="h-10" style={{ maxWidth: 240 }} />
          </Link>
          <div className="flex items-center gap-9 mx-auto">
            {items.map((item) => {
              const active = currentPath.startsWith(item.href) && item.href !== "/";
              const LinkOrA = isExternal(item.href) ? "a" : Link;
              const extraProps = isExternal(item.href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <LinkOrA
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 relative pb-1 cursor-pointer",
                    active ? "text-[var(--orange-400)]" : "text-[var(--text-content)] hover:text-[var(--orange-400)]",
                    active && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[var(--orange-400)]"
                  )}
                  {...extraProps}
                >
                  {item.label}
                </LinkOrA>
              );
            })}
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {isLoggedIn ? (
              <>
                <button className="p-2 cursor-pointer" aria-label="通知">
                  <img src={iconBell} alt="" className="h-5 w-5" />
                </button>
                <Link href="/account" className="block">
                  <img src={avatarUrl || imgPetAvatar} alt="個人頭像" className="h-9 w-9 rounded-full object-cover border border-[var(--neutral-300)]" />
                </Link>
              </>
            ) : (
              <>
                <button onClick={onLogin} className="rounded-pill border-2 border-[var(--orange-300)] bg-white px-5 py-1.5 text-[var(--orange-400)] text-sm font-bold cursor-pointer transition hover:bg-[var(--orange-25)]">
                  登入
                </button>
                <button onClick={onLogin} className="rounded-pill bg-[var(--orange-300)] px-5 py-1.5 text-white text-sm font-bold cursor-pointer transition hover:bg-[var(--orange-400)]">
                  註冊
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile */}
      <nav className="xl:hidden flex items-center justify-between bg-white px-6 h-[68px] shadow-sm">
        <Link href="/">
          <img src={imgBrandLogo} alt="毛幫幫" className="h-8" style={{ maxWidth: 160 }} />
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 cursor-pointer" aria-label={mobileOpen ? "關閉選單" : "開啟選單"}>
          <img src={mobileOpen ? iconNavbarTogglerClose : iconNavbarToggler} alt="" className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div ref={overlayRef} className="xl:hidden fixed inset-0 top-[68px] z-[1020] bg-white overflow-y-auto">
          <div className="flex flex-col">
            {items.map((item) => {
              const LinkOrA = isExternal(item.href) ? "a" : Link;
              const extraProps = isExternal(item.href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <LinkOrA
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between px-6 py-4 text-[var(--text-content)] font-medium border-b border-dashed border-[var(--neutral-300)] cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                  {...extraProps}
                >
                  <span>{item.label}</span>
                  <img src={iconArrowRight} alt="" className="h-4 w-4" />
                </LinkOrA>
              );
            })}
          </div>
          <div className="p-6 space-y-3">
            {isLoggedIn ? (
              <button onClick={() => { onLogout?.(); setMobileOpen(false); }} className="btn-outline-primary w-full">登出</button>
            ) : (
              <button onClick={() => { onLogin?.(); setMobileOpen(false); }} className="btn-gradient-primary w-full">註冊 / 登入</button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export { MbbNavbar };
