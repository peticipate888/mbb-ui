import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const cardVariants = cva("bg-white", {
  variants: {
    variant: {
      default: "rounded-card shadow-card",
      strong: "rounded-card shadow-card-strong",
      solid: "rounded-card shadow-solid-orange-sm",
      article: "rounded-article shadow-card",
      flat: "rounded-card border border-[var(--neutral-300)]",
    },
    padding: {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-10",
    },
    hover: {
      rise: "rise-effect cursor-pointer",
      zoom: "img-hover-zoom cursor-pointer",
      none: "",
    },
  },
  defaultVariants: { variant: "default", padding: "md", hover: "none" },
});

interface MbbCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

function MbbCard({ className, variant, padding, hover, children, ...props }: MbbCardProps) {
  return (
    <div className={cn(cardVariants({ variant, padding, hover }), className)} {...props}>
      {children}
    </div>
  );
}

export { MbbCard, cardVariants };
