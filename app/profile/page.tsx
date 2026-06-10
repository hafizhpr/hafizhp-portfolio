import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Profile — Hafiz Hardiansyah Pratama",
};

export default function Profile() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </div>
      <footer className="border-t border-slate-800 py-6 px-6 text-center">
        <p className="text-slate-700 text-xs font-mono">
          © 2026 Hafiz Hardiansyah Pratama · Built with Next.js &amp; Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
