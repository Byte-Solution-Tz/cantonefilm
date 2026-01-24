import Link from "next/link";

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
      className="inline-block bg-gold text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition"
    >
      {children}
    </Link>
  );
}
