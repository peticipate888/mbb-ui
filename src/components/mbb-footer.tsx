import Link from "next/link";
import { cn } from "../utils/cn";

interface MbbFooterProps {
  className?: string;
}

function MbbFooter({ className }: MbbFooterProps) {
  return (
    <footer className={className}>
      {/* Upper */}
      <div className="bg-white py-10">
        <div className="mx-auto max-w-[1200px] px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/">
            <img src="/images/img-brand-logo.png" alt="毛幫幫" className="h-[53px]" />
          </Link>
          <nav className="flex flex-wrap items-center gap-6 text-sm text-[var(--text-content)]">
            <Link href="/about" className="hover:text-[var(--orange-400)] transition-colors">認識毛幫幫</Link>
            <Link href="/pricing" className="hover:text-[var(--orange-400)] transition-colors">方案介紹</Link>
            <Link href="/catpedia" className="hover:text-[var(--orange-400)] transition-colors">毛孩百科</Link>
            <Link href="/blog" className="hover:text-[var(--orange-400)] transition-colors">毛孩專欄</Link>
            <a href="https://shop.mbb.pet" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--orange-400)] transition-colors">毛孩商城</a>
          </nav>
        </div>
        <div className="dashed-line mx-auto max-w-[1200px] mt-6" />
      </div>

      {/* Lower */}
      <div className="bg-[#6fa0ed] py-6">
        <div className="mx-auto max-w-[1200px] px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/80 text-center md:text-left">
            <p>統一編號：97168356 | 客服信箱：service@mbb.pet</p>
            <p className="mt-1">Copyright &copy; {new Date().getFullYear()} 毛幫幫. All Rights Reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="/images/assets/icon-social-media-facebook.svg" alt="" className="h-8 w-8" />
            </a>
            <a href="https://line.me" target="_blank" rel="noopener noreferrer" aria-label="LINE">
              <img src="/images/assets/icon-social-media-line.svg" alt="" className="h-8 w-8" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/images/assets/icon-social-media-instagram.svg" alt="" className="h-8 w-8" />
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <Link href="/terms" className="hover:text-white transition-colors">服務條款</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">隱私政策</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { MbbFooter };
