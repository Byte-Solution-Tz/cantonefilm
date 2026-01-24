import Link from "next/link";
import { ChevronRight } from 'lucide-react';


export default function Button({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 bg-gold text-black px-8 py-4 text-sm font-medium hover:bg-opacity-90 transition-all duration-300 group"
    >
      {children}
      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
