import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

const variants = {
  primary:
    "bg-[#163D2B] text-white shadow-[0_18px_38px_rgba(22,61,43,0.18)] hover:bg-[#0F2F21]",
  secondary:
    "border border-[#163D2B]/20 bg-white text-[#163D2B] hover:border-[#163D2B]/45 hover:bg-[#F7F2EA]",
  light: "bg-[#F3DFC2] text-[#10281D] hover:bg-white"
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = ""
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
