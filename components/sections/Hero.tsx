import { ArrowDown, Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden bg-background">
      {/* Subtle top-to-bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background pointer-events-none" />
      {/* Cyan radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.07)_0%,_transparent_65%)] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-mono text-cyan-400 text-sm tracking-[0.3em] uppercase mb-5">
          Automation Solution Architect (OT/IT)
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight">
          Hafiz{" "}
          <span className="text-cyan-400">Hardiansyah</span>
          <br />
          Pratama
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Bridging{" "}
          <span className="text-amber-400 font-medium">Industrial OT</span>{" "}
          with{" "}
          <span className="text-amber-400 font-medium">modern IT</span> — 6+ years
          designing SCADA, IIoT, and DCS/SIS solutions for Oil &amp; Gas and
          process industries.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-cyan-400 text-background px-7 py-3 font-semibold hover:bg-cyan-300 transition-colors"
          >
            <Mail size={18} />
            Get in Touch
          </a>
          <a
            href="/2026-Hafiz-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-cyan-400 text-cyan-400 px-7 py-3 font-semibold hover:bg-cyan-400/10 transition-colors"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#about" aria-label="Scroll to about">
            <ArrowDown size={22} className="text-slate-600 mx-auto" />
          </a>
        </div>
      </div>
    </section>
  );
}
