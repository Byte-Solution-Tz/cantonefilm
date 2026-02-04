import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  type?: 'button' | 'submit' | 'reset';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
};

const baseClassName =
  "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-50 disabled:pointer-events-none";

const variantClassNames = {
  primary: "bg-gold text-navy hover:bg-gold/90 shadow-sm hover:shadow-md",
  secondary: "bg-navy text-cream hover:bg-navy/90 shadow-sm hover:shadow-md",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-cream",
  "outline-light": "border-2 border-cream text-cream hover:bg-cream hover:text-navy",
  ghost: "text-navy hover:bg-navy/10",
};

const sizeClassNames = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  icon: "h-12 w-12 p-0",
};

export default function Button({
  href,
  children,
  onClick,
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  leftIcon,
  rightIcon,
  fullWidth,
  ariaLabel,
  disabled,
  target,
  rel,
}: ButtonProps) {
  const resolvedClassName = [
    baseClassName,
    variantClassNames[variant],
    sizeClassNames[size],
    fullWidth ? "w-full" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  if (href) {
    return (
      <Link
        href={href}
        className={resolvedClassName}
        onClick={onClick}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={resolvedClassName}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
