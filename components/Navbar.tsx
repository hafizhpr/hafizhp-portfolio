"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const homeLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Start a Project", href: "#inquiry" },
  { label: "Full Profile", href: "/profile" },
];

const profileLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const links = isHome ? homeLinks : profileLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/30"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-mono text-cyan-400 font-semibold tracking-widest text-lg">
          HHP
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              {l.href.startsWith("/") ? (
                <Link
                  href={l.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
          <li>
            <a
              href="/2026-Hafiz-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 px-4 py-1.5 text-sm font-medium hover:bg-cyan-400/10 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface border-b border-slate-800 px-6 pb-5">
          <ul className="flex flex-col gap-4 pt-3">
            {links.map((l) => (
              <li key={l.href}>
                {l.href.startsWith("/") ? (
                  <Link
                    href={l.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
            <li>
              <a
                href="/2026-Hafiz-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-400 text-cyan-400 px-4 py-1.5 text-sm hover:bg-cyan-400/10 transition-colors inline-block"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
