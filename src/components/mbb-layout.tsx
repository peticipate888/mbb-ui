"use client";

import { cn } from "../utils/cn";
import { MbbNavbar } from "./mbb-navbar";
import { MbbFooter } from "./mbb-footer";
import { MbbFloatingButtons } from "./mbb-floating-buttons";
import { MbbAosWrapper } from "./mbb-aos-wrapper";

interface MbbLayoutProps {
  children: React.ReactNode;
  /** When true, content is full-width (no max-w container) */
  fluid?: boolean;
  /** Hide navbar */
  hideNavbar?: boolean;
  /** Hide footer */
  hideFooter?: boolean;
  /** Hide floating buttons */
  hideFloatingButtons?: boolean;
  /** Current path for active nav item */
  currentPath?: string;
  /** Auth state */
  isLoggedIn?: boolean;
  avatarUrl?: string;
  onLogin?: () => void;
  onLogout?: () => void;
  className?: string;
}

function MbbLayout({
  children,
  fluid,
  hideNavbar,
  hideFooter,
  hideFloatingButtons,
  currentPath,
  isLoggedIn,
  avatarUrl,
  onLogin,
  onLogout,
  className,
}: MbbLayoutProps) {
  return (
    <MbbAosWrapper>
      <div className="bg-[var(--bg-orange)] min-h-dvh flex flex-col">
        {!hideNavbar && (
          <MbbNavbar
            currentPath={currentPath}
            isLoggedIn={isLoggedIn}
            avatarUrl={avatarUrl}
            onLogin={onLogin}
            onLogout={onLogout}
          />
        )}

        <main
          className={cn(
            "flex-1",
            !hideNavbar && "pt-[60px]",
            "pb-[120px]",
            !fluid && "mx-auto max-w-[1200px] px-6",
            className
          )}
        >
          {children}
        </main>

        {!hideFloatingButtons && <MbbFloatingButtons />}
        {!hideFooter && <MbbFooter />}
      </div>
    </MbbAosWrapper>
  );
}

export { MbbLayout };
