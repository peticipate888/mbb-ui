import { cn } from "../utils/cn";

interface MbbWhitePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  overlay?: boolean;
  maxWidth?: string;
}

function MbbWhitePanel({ overlay, maxWidth = "max-w-3xl", className, children, ...props }: MbbWhitePanelProps) {
  return (
    <div
      className={cn(
        "rounded-card bg-white shadow-card",
        "px-6 py-10 md:px-[60px] md:py-10",
        overlay && "white-panel-overlay",
        maxWidth,
        "mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { MbbWhitePanel };
