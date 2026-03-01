import { cn } from "../utils/cn";

interface MbbSectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "section" | "div";
  fluid?: boolean;
}

function MbbSectionWrapper({ as: Tag = "section", fluid, className, children, ...props }: MbbSectionWrapperProps) {
  return (
    <Tag className={cn(!fluid && "mx-auto max-w-[1200px] px-6", className)} {...props}>
      {children}
    </Tag>
  );
}

export { MbbSectionWrapper };
