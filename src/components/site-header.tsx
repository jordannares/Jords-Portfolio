import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
];

export function SiteHeader() {
  return (
    <header className="site-header-wrap">
      <div className="site-header">
        <Link aria-label="Jords Portfolio home" className="brand-mark" href="#home">
          jords<span>.</span>
        </Link>

        <nav aria-label="Main navigation" className="main-nav">
          {navigation.map((item) => (
            <Link className="nav-link" href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-contact" href="#contact">
          Let&apos;s talk <ArrowUpRight aria-hidden="true" size={15} strokeWidth={2.2} />
        </a>
      </div>
    </header>
  );
}
