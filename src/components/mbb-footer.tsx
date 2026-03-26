import Link from "next/link";
import { cn } from "../utils/cn";
import {
  imgBrandLogo,
  iconSocialMediaFacebook,
  iconSocialMediaLine,
  iconSocialMediaInstagram,
} from "../assets/index";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

interface MbbFooterProps {
  className?: string;
  /** Navigation links shown in the upper white section */
  navLinks?: FooterLink[];
  /** Social media links — defaults to FB / LINE / IG */
  socialLinks?: SocialLink[];
  /** Legal links shown next to social icons */
  legalLinks?: FooterLink[];
  /** Company registration number */
  registrationNumber?: string;
  /** Copyright holder name */
  copyrightHolder?: string;
}

const defaultNavLinks: FooterLink[] = [
  { label: "搭搭手會員", href: "/membership" },
  { label: "關於毛幫幫", href: "/about" },
  { label: "毛幫幫購物", href: "https://shop.mbb.pet", external: true },
  { label: "搭搭手響應", href: "/fund" },
];

const defaultSocialLinks: SocialLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/mbb.pet/", icon: "" },
  { label: "LINE", href: "https://lin.ee/vYZqpoy", icon: "" },
  { label: "Instagram", href: "https://www.instagram.com/mbb.pet/", icon: "" },
];

const defaultLegalLinks: FooterLink[] = [
  { label: "條款與細則", href: "/terms" },
];

// Map social link labels to bundled icons
const getSocialIcon = (label: string) => {
  const lower = label.toLowerCase();
  if (lower.includes("facebook") || lower.includes("fb")) return iconSocialMediaFacebook;
  if (lower.includes("line")) return iconSocialMediaLine;
  if (lower.includes("instagram") || lower.includes("ig")) return iconSocialMediaInstagram;
  return null;
};

function MbbFooter({
  className,
  navLinks = defaultNavLinks,
  socialLinks = defaultSocialLinks,
  legalLinks = defaultLegalLinks,
  registrationNumber = "00215174",
  copyrightHolder = "毛幫幫科技股份有限公司版權所有轉載必究",
}: MbbFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("", className)}>
      {/* Upper section — white background with logo + nav links */}
      <div className="bg-white">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 py-7 md:py-0 md:h-[160px]" style={{ maxWidth: 704 }}>
          <Link href="/" className="shrink-0">
            <img src={imgBrandLogo} alt="毛幫幫" className="h-[50px] md:h-[53px]" loading="lazy" />
          </Link>

          {/* Vertical divider — desktop only */}
          <div className="hidden md:block w-px bg-[var(--neutral-300)] self-stretch my-4 mx-8" />
          {/* Horizontal divider — mobile only */}
          <hr className="md:hidden w-full border-[var(--neutral-300)] m-0" />

          <nav className="flex flex-wrap items-center gap-5" aria-label="頁尾導覽">
            {navLinks.map((link) => {
              const LinkOrA = link.external ? "a" : Link;
              const extraProps = link.external ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};
              return (
                <LinkOrA
                  key={link.label}
                  href={link.href}
                  className="text-sm md:text-base font-medium text-[var(--text-content)] hover:text-[var(--orange-400)] transition-colors px-2.5"
                  {...extraProps}
                >
                  {link.label}
                </LinkOrA>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Lower section — blue background with company info + social icons */}
      <div className="bg-[#6fa0ed] pt-6 pb-5 md:py-4">
        <div className="mx-auto max-w-[1200px] px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Company info */}
          <div className="flex flex-col xl:flex-row items-center gap-1 xl:gap-4 text-sm text-white order-2 md:order-1">
            <p>統一編號：{registrationNumber}</p>
            <div className="hidden xl:block w-px h-4 bg-white" />
            <p>&copy; {currentYear} {copyrightHolder}</p>
          </div>

          {/* Legal links + Social icons */}
          <div className="flex flex-col xl:flex-row items-center gap-5 order-1 md:order-2">
            {/* Legal links */}
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white hover:text-white/80 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 xl:gap-2">
              {socialLinks.map((social) => {
                const icon = getSocialIcon(social.label);
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="transition-opacity hover:opacity-80"
                  >
                    {icon ? (
                      <img src={icon} alt="" className="w-12 h-12 md:w-8 md:h-8" loading="lazy" />
                    ) : (
                      <span className="text-sm text-white">{social.label}</span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { MbbFooter };
export type { MbbFooterProps, FooterLinkGroup, FooterLink, SocialLink };
