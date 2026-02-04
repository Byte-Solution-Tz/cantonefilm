'use client';

import Button from "./Button";

type ContactButtonProps = {
  label?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
};

export default function ContactButton({
  label = "Let's Talk",
  className,
  onClick,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  fullWidth,
  leftIcon,
  rightIcon,
  disabled,
}: ContactButtonProps) {
  return (
    <Button
      href={href}
      variant={variant}
      size={size}
      className={className}
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}
