import { cn } from "../utils/cn";

interface MbbFloatingButtonsProps {
  lineUrl?: string;
  joinUrl?: string;
  className?: string;
}

function MbbFloatingButtons({
  lineUrl = "https://lin.ee/example",
  joinUrl = "/pricing",
  className,
}: MbbFloatingButtonsProps) {
  return (
    <div className={cn("fixed bottom-6 right-6 z-50 flex flex-col gap-3", className)}>
      <a href={joinUrl} className="block rise-effect" aria-label="加入毛幫幫">
        <img src="/images/img-floating-btn-join.png" alt="加入毛幫幫" className="h-16 w-16" />
      </a>
      <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="block rise-effect" aria-label="LINE 客服">
        <img src="/images/img-floating-btn-line.png" alt="LINE" className="h-16 w-16" />
      </a>
    </div>
  );
}

export { MbbFloatingButtons };
