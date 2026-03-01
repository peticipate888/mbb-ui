import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const tagVariants = cva("tag", {
  variants: {
    variant: {
      primary: "tag-primary",
      blue: "tag-blue",
      gray: "tag-gray",
      success: "tag-success",
      danger: "tag-danger",
      warning: "tag-warning",
      food: "text-white badge-food",
      medical: "text-white badge-medical",
      transport: "text-white badge-transport",
      education: "text-white badge-education",
      housing: "text-white badge-housing",
      entertainment: "text-black badge-entertainment",
    },
  },
  defaultVariants: { variant: "primary" },
});

interface MbbTagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tagVariants> {}

function MbbTag({ className, variant, children, ...props }: MbbTagProps) {
  return (
    <span className={cn(tagVariants({ variant }), className)} {...props}>
      {children}
    </span>
  );
}

export { MbbTag, tagVariants };
