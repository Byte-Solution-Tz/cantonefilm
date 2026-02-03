'use client';

import Button from "./Button";

type ContactButtonProps = {
  label?: string;
  className?: string;
  onClick?: () => void;
};

export default function ContactButton({
  label = "Let's Talk",
  className,
  onClick,
}: ContactButtonProps) {
  return (
    <Button
      variant="unstyled"
      className={className}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
