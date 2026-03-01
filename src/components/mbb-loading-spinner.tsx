"use client";
import { cn } from "../utils/cn";

interface MbbLoadingSpinnerProps {
  fullScreen?: boolean;
  size?: number;
  className?: string;
}

function MbbLoadingSpinner({ fullScreen, size = 75, className }: MbbLoadingSpinnerProps) {
  const spinner = (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} role="status" aria-label="載入中">
      <circle cx="50" cy="50" r="38.5" fill="none" strokeWidth="5" stroke="var(--orange-300)" opacity="0.05" />
      <circle
        cx="50" cy="50" r="38.5" fill="none" strokeWidth="5" strokeLinecap="round"
        style={{ animation: "spinnerAnim 1.6s linear infinite" }}
      />
    </svg>
  );

  if (fullScreen) {
    return <div className="loading-overlay">{spinner}</div>;
  }

  return spinner;
}

export { MbbLoadingSpinner };
