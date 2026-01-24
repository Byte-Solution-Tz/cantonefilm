import { site } from "@/data/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-cream mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold mb-2">{site.name}</h3>
          <p className="text-sm opacity-80">{site.tagline}</p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">{site.email}</p>
          <p className="text-sm">{site.phone}</p>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-2">Social</h4>
          <Link
            href={site.social.instagram}
            target="_blank"
            className="text-sm hover:text-gold transition"
          >
            Instagram
          </Link>
        </div>
      </div>

      <div className="text-center text-xs opacity-60 pb-6">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
