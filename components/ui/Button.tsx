import Link from "next/link";
import { ChevronRight } from 'lucide-react';

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'unstyled';
  type?: 'button' | 'submit' | 'reset';
};

const baseClassName =
  "inline-flex items-center gap-2 bg-gold text-black px-8 py-4 text-sm font-medium hover:bg-opacity-90 transition-all duration-300 group";

export default function Button({
  href,
  children,
  onClick,
  className,
  variant = 'primary',
  type = 'button',
}: ButtonProps) {
  const resolvedClassName =
    variant === 'unstyled' ? className : `${baseClassName} ${className ?? ''}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        className={resolvedClassName}
        onClick={onClick}
      >
        {children}
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={resolvedClassName}
      onClick={onClick}
    >
      {children}
      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}
