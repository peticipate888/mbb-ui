import { ClassValue } from 'clsx';
import * as react from 'react';
import { RefObject } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';
export { asset404, asset500, breadcrumbDivider, favicon, formChecklistDefault, formChecklistError, iconAdBannerClose, iconAdd, iconAddSecondary, iconApprove, iconApproveGray, iconArrowDown, iconArrowLeft, iconArrowLeftSolid, iconArrowRight, iconArrowStraightRight, iconArrowWhiteLeft, iconAttention, iconAttentionLine, iconBell, iconBellGray, iconBreed, iconCalender, iconCheck, iconCheckbox, iconCircleLeft, iconCircleRight, iconClose, iconComplete, iconCreatGray, iconCreate, iconCreatePrimary, iconCredit, iconDocument, iconDrag, iconDropdownArrowDown, iconEdit, iconEditGray, iconEditOn, iconExport, iconExportOrange, iconFeedbackSuscess, iconFilter, iconFilterDown, iconFilterGray, iconGoogle, iconGoto, iconGrouping, iconGroupingGray, iconInfo, iconInfoSolidWarning, iconInvisible, iconLine, iconLinkFail, iconLinkSuccess, iconListStyleBigDisc, iconListStyleBigDiscDisabled, iconMail, iconMinus, iconModalClose, iconMore, iconNavbarToggler, iconNavbarTogglerClose, iconPaginationArrow, iconPaginationNext, iconPaginationPrevious, iconPetBullet, iconPetCardArrow, iconPetHand, iconPetHandPrimary, iconPhoto, iconPhotoClose, iconPhotoGray, iconPlanFeaturesPaginationLeft, iconPlanFeaturesPaginationRight, iconPoint, iconQaArrow, iconQaSwitchMinus, iconQaSwitchPlus, iconReject, iconRejectGray, iconRejectWhite, iconRequest, iconRequestGray, iconSearch, iconSearchGray, iconShipping, iconSidebarFrontend, iconSidebarHelpCircle, iconSidebarMember, iconSidebarMemberSolid, iconSidebarMembers, iconSidebarOrders, iconSidebarPayment, iconSidebarPaymentSolid, iconSidebarPet, iconSidebarPetSolid, iconSidebarReferral, iconSidebarSystem, iconSocialMediaFacebook, iconSocialMediaInstagram, iconSocialMediaLine, iconSolidAttention, iconSolidAttentionBlue, iconSolidCheckPrimary, iconSolidClose, iconSolidInfo, iconSorterAsc, iconSorterDesc, iconSorterReady, iconStarCheck, iconTabControlNext, iconTabControlPrevious, iconTagCheckOutline, iconTagDisabled, iconTagDisabledOutline, iconTagReviewOutline, iconTagSuscess, iconTicket, iconTime, iconTrash, iconTrashRed, iconUnsubscribe, iconUpload, iconVisible, iconWith, imgAboutHeroMobile, imgAboutHeroPc, imgAidArcUpBackgroundPad, imgAidArcUpBackgroundPc, imgAidArcUpBackgroundPhone, imgAidCurveDash, imgAidHeroMobile, imgAidHeroPc, imgAidNotchBackgroundPad, imgAidNotchBackgroundPc, imgAnswer1, imgAnswer2, imgAnswer3, imgArticalDialog, imgAvatar1, imgAvatar10, imgAvatar11, imgAvatar12, imgAvatar13, imgAvatar2, imgAvatar3, imgAvatar4, imgAvatar5, imgAvatar6, imgAvatar7, imgAvatar8, imgAvatar9, imgBackgroundPad, imgBackgroundPc, imgBackgroundPhone, imgBgLogo, imgBrand1, imgBrand2, imgBrand3, imgBrand4, imgBrand5, imgBrandLogo, imgCancerHeroMobile, imgCancerHeroPc, imgCardAnswer, imgCardIcon18year, imgCardIconPetsLove, imgCardQuestion, imgCatGrayBro, imgCatGrayBroPhone, imgCenter, imgControlBtnLeft, imgControlBtnRight, imgCorner, imgDataChecked, imgDataEmpty, imgDataNoMatch, imgDogPurring, imgDogPurringPhone, imgEmptyResult, imgFailError, imgFaqHeroMobile, imgFaqHeroPc, imgFeatureLinkAid, imgFeatureLinkShipping, imgFloatingBtnJoin, imgFloatingBtnLine, imgHeroBgPad, imgHeroBgPc, imgHeroBgPhone, imgHill, imgIllusDogFetch, imgIllustration, imgKv2Image, imgKv2ImageMobile, imgLeft, imgLogoSimple, imgMainImage, imgNavChildRadius, imgPassStar, imgPawsRecruitMobile, imgPawsRecruitPc, imgPdfDownload, imgPet1, imgPet2, imgPet3, imgPetAvatar, imgPetCardBg, imgPetCardBgMobile, imgPetLeft, imgPetPhoto1, imgPetPhoto10, imgPetPhoto11, imgPetPhoto12, imgPetPhoto2, imgPetPhoto2x, imgPetPhoto3, imgPetPhoto4, imgPetPhoto5, imgPetPhoto6, imgPetPhoto7, imgPetPhoto8, imgPetPhoto9, imgPetRight, imgPetStar, imgPets, imgPetsMobile, imgQuestion1, imgQuestion2, imgQuestion3, imgRight, imgStory, imgSubtitleLeft, imgSubtitleRight, imgSubtract, imgSubtractMb, imgSuccessCheck, imgTermsHeroMobile, imgTermsHeroPc, imgWaveMobile, imgWavePc, kvArrowLeft, kvArrowLeftSolid, kvArrowRight, kvCardAnswer, kvCardQuestion, kvControlBtnLeft, kvControlBtnRight, kvCorner, kvIllustration, kvPetStar, kvSubtract, kvSubtractMb, kvWith, sysError, sysSuccess, sysWarning } from './assets/index.js';

declare function cn(...inputs: ClassValue[]): string;

declare const buttonVariants: (props?: ({
    variant?: "gradient-primary" | "outline-primary" | "secondary" | "outline-secondary" | "pill" | null | undefined;
    size?: "sm" | "md" | "lg" | "full" | null | undefined;
    riseEffect?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface MbbButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    loading?: boolean;
}
declare const MbbButton: react.ForwardRefExoticComponent<MbbButtonProps & react.RefAttributes<HTMLButtonElement>>;

declare const cardVariants: (props?: ({
    variant?: "flat" | "article" | "default" | "strong" | "solid" | null | undefined;
    padding?: "sm" | "md" | "lg" | "none" | "xl" | null | undefined;
    hover?: "none" | "rise" | "zoom" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface MbbCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
}
declare function MbbCard({ className, variant, padding, hover, children, ...props }: MbbCardProps): react_jsx_runtime.JSX.Element;

declare const tagVariants: (props?: ({
    variant?: "primary" | "blue" | "gray" | "success" | "danger" | "warning" | "food" | "medical" | "transport" | "education" | "housing" | "entertainment" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface MbbTagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tagVariants> {
}
declare function MbbTag({ className, variant, children, ...props }: MbbTagProps): react_jsx_runtime.JSX.Element;

interface MbbSectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: "section" | "div";
    fluid?: boolean;
}
declare function MbbSectionWrapper({ as: Tag, fluid, className, children, ...props }: MbbSectionWrapperProps): react_jsx_runtime.JSX.Element;

interface MbbWhitePanelProps extends React.HTMLAttributes<HTMLDivElement> {
    overlay?: boolean;
    maxWidth?: string;
}
declare function MbbWhitePanel({ overlay, maxWidth, className, children, ...props }: MbbWhitePanelProps): react_jsx_runtime.JSX.Element;

interface MbbHeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    bgPc: string;
    bgPad?: string;
    bgPhone?: string;
    height?: string;
    overlay?: boolean;
}
declare function MbbHeroSection({ bgPc, bgPad, bgPhone, height, overlay, className, children, ...props }: MbbHeroSectionProps): react_jsx_runtime.JSX.Element;

interface MbbFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    remind?: string;
    validMessage?: string;
}
declare const MbbFormInput: react.ForwardRefExoticComponent<MbbFormInputProps & react.RefAttributes<HTMLInputElement>>;

interface MbbFormSelectProps {
    label: string;
    required?: boolean;
    options: {
        value: string;
        label: string;
    }[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    searchable?: boolean;
    className?: string;
}
declare function MbbFormSelect({ label, required, options, value, onChange, placeholder, error, disabled, searchable, className }: MbbFormSelectProps): react_jsx_runtime.JSX.Element;

interface MbbFormCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label: string;
    small?: boolean;
}
declare const MbbFormCheckbox: react.ForwardRefExoticComponent<MbbFormCheckboxProps & react.RefAttributes<HTMLInputElement>>;

interface MbbFormRadioOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface MbbFormRadioProps {
    name: string;
    label?: string;
    options: MbbFormRadioOption[];
    value?: string;
    onChange?: (value: string) => void;
    error?: string;
    className?: string;
}
declare function MbbFormRadio({ name, label, options, value, onChange, error, className }: MbbFormRadioProps): react_jsx_runtime.JSX.Element;

interface MbbTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    required?: boolean;
    error?: string;
    autoExpand?: boolean;
}
declare const MbbTextarea: react.ForwardRefExoticComponent<MbbTextareaProps & react.RefAttributes<HTMLTextAreaElement>>;

interface MbbTabsProps {
    variant?: "pill" | "underline";
    items: {
        key: string;
        label: string;
    }[];
    activeKey: string;
    onChange: (key: string) => void;
    scrollable?: boolean;
    className?: string;
}
declare function MbbTabs({ variant, items, activeKey, onChange, scrollable, className }: MbbTabsProps): react_jsx_runtime.JSX.Element;

interface MbbPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}
declare function MbbPagination({ currentPage, totalPages, onPageChange, className }: MbbPaginationProps): react_jsx_runtime.JSX.Element;

interface MbbModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
    size?: "md" | "lg" | "xl";
    fullScreenMobile?: boolean;
    children: React.ReactNode;
    footer?: React.ReactNode;
}
declare function MbbModal({ open, onOpenChange, title, size, fullScreenMobile, children, footer }: MbbModalProps): react_jsx_runtime.JSX.Element | null;

interface MbbBottomSheetProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
    children: React.ReactNode;
}
declare function MbbBottomSheet({ open, onOpenChange, title, children }: MbbBottomSheetProps): react_jsx_runtime.JSX.Element | null;

interface NoticeItem {
    id: string;
    title: string;
    description?: string;
    time: string;
    read: boolean;
    onClick?: () => void;
}
interface MbbNoticeBlockProps {
    officialNotices?: NoticeItem[];
    personalNotices?: NoticeItem[];
    className?: string;
}
declare function MbbNoticeBlock({ officialNotices, personalNotices, className }: MbbNoticeBlockProps): react_jsx_runtime.JSX.Element;

interface NavItem {
    label: string;
    href: string;
    /** Only opens in new tab when explicitly true (e.g. shop.mbb.pet) */
    external?: boolean;
}
interface MbbNavbarProps {
    items?: NavItem[];
    currentPath?: string;
    isLoggedIn?: boolean;
    avatarUrl?: string;
    onLogin?: () => void;
    onLogout?: () => void;
}
declare function MbbNavbar({ items, currentPath, isLoggedIn, avatarUrl, onLogin, onLogout }: MbbNavbarProps): react_jsx_runtime.JSX.Element;

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
declare function MbbFooter({ className, navLinks, socialLinks, legalLinks, registrationNumber, copyrightHolder, }: MbbFooterProps): react_jsx_runtime.JSX.Element;

interface MbbFloatingButtonsProps {
    lineUrl?: string;
    joinUrl?: string;
    className?: string;
}
declare function MbbFloatingButtons({ lineUrl, joinUrl, className, }: MbbFloatingButtonsProps): react_jsx_runtime.JSX.Element;

interface MbbLoadingSpinnerProps {
    fullScreen?: boolean;
    size?: number;
    className?: string;
}
declare function MbbLoadingSpinner({ fullScreen, size, className }: MbbLoadingSpinnerProps): react_jsx_runtime.JSX.Element;

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
declare function MbbLayout({ children, fluid, hideNavbar, hideFooter, hideFloatingButtons, currentPath, isLoggedIn, avatarUrl, onLogin, onLogout, className, }: MbbLayoutProps): react_jsx_runtime.JSX.Element;

interface MbbAosWrapperProps {
    children: React.ReactNode;
}
declare function MbbAosWrapper({ children }: MbbAosWrapperProps): react_jsx_runtime.JSX.Element;

interface UseIntersectionObserverOptions {
    rootMargin?: string;
    threshold?: number;
    delay?: number;
    className?: string;
}
/**
 * Replicates useAnimate.ts from the original MBB site.
 * Observes when an element enters the viewport and adds a CSS class
 * (e.g., 'sketch-in' for SVG doodle stroke animations).
 *
 * @param options.rootMargin - Default: '-25% 0px -25% 0px'
 * @param options.threshold - Default: 0
 * @param options.delay - Delay before adding class (ms). Default: 500
 * @param options.className - CSS class to add. Default: 'sketch-in'
 */
declare function useIntersectionObserver<T extends HTMLElement = HTMLElement>(options?: UseIntersectionObserverOptions): {
    ref: RefObject<T | null>;
    isVisible: boolean;
};

/**
 * Auto-expand textarea to fit content.
 * Replicates the TextInput.vue auto-expand behavior from the original MBB site.
 * Monitors scrollHeight and dynamically adjusts element height.
 */
declare function useAutoExpand<T extends HTMLTextAreaElement = HTMLTextAreaElement>(): {
    ref: RefObject<T | null>;
    adjustHeight: () => void;
};

export { type FooterLink, type FooterLinkGroup, MbbAosWrapper, MbbBottomSheet, MbbButton, MbbCard, MbbFloatingButtons, MbbFooter, type MbbFooterProps, MbbFormCheckbox, MbbFormInput, MbbFormRadio, MbbFormSelect, MbbHeroSection, MbbLayout, MbbLoadingSpinner, MbbModal, MbbNavbar, MbbNoticeBlock, MbbPagination, MbbSectionWrapper, MbbTabs, MbbTag, MbbTextarea, MbbWhitePanel, type SocialLink, buttonVariants, cardVariants, cn, tagVariants, useAutoExpand, useIntersectionObserver };
