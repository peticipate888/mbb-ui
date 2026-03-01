import { cn } from "../utils/cn";

interface MbbHeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  bgPc: string;
  bgPad?: string;
  bgPhone?: string;
  height?: string;
  overlay?: boolean;
}

function MbbHeroSection({ bgPc, bgPad, bgPhone, height = "h-[400px] md:h-[500px]", overlay, className, children, ...props }: MbbHeroSectionProps) {
  return (
    <div
      className={cn("relative w-full bg-cover bg-center bg-no-repeat", height, className)}
      {...props}
    >
      {/* PC background */}
      <img src={bgPc} alt="" className="absolute inset-0 w-full h-full object-cover only-pc" aria-hidden="true" />
      {/* Pad background */}
      {bgPad && <img src={bgPad} alt="" className="absolute inset-0 w-full h-full object-cover only-pad" aria-hidden="true" />}
      {/* Phone background */}
      {bgPhone && <img src={bgPhone} alt="" className="absolute inset-0 w-full h-full object-cover only-phone" aria-hidden="true" />}
      {/* Fallback for pad/phone when not provided */}
      {!bgPad && <img src={bgPc} alt="" className="absolute inset-0 w-full h-full object-cover only-pad" aria-hidden="true" />}
      {!bgPhone && <img src={bgPad || bgPc} alt="" className="absolute inset-0 w-full h-full object-cover only-phone" aria-hidden="true" />}
      {overlay && <div className="absolute inset-0 bg-black/30" />}
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export { MbbHeroSection };
