const experiences = [
  {
    company: "PT. Danfoss Indonesia",
    role: "Automation Solution Architect (OT/IT)",
    period: "2022 — Present",
    bullets: [
      "Leading end-to-end Electrical & Automation architectural designs for Greenfield and Brownfield projects, translating P&ID requirements into technical frameworks for tenders and implementation.",
      "Developed and implemented MING Stack (Mosquitto, InfluxDB, Node-RED, Grafana) infrastructure for real-time IIoT data visualization from edge devices to advanced dashboards.",
      "Architecting custom web-based monitoring platforms using HTML, PHP, and MySQL for flexible, tailored data visualization solutions.",
      "Engineering secure Network Routing architectures to bridge local SCADA systems with corporate HQ, maintaining OT cybersecurity integrity.",
      "Developed complex SQL integrations (DB-to-DB) to automate critical daily reports including Specific Fuel Consumption (SFC) and TPH/OER.",
      "Technical consultant for sales teams on emerging technologies; mentoring junior PLC/SCADA engineers.",
    ],
  },
  {
    company: "PT. Control Systems Arena Para Nusa",
    role: "DCS/SIS System Engineer",
    period: "2019 — 2022",
    bullets: [
      "Configured and commissioned Emerson DeltaV DCS/SIS for Oil & Gas and Chemical industries with 100% compliance to ESD & F&G functional safety standards.",
      "Led migration of legacy control systems to modern DCS platforms, managing over 1,800 I/Os for major clients including Pertamina EP and Pupuk Kaltim.",
      "Implemented High-Performance HMI (ANSI/ISA-101.01) graphics to significantly enhance operator situational awareness and alarm management.",
      "Integrated third-party subsystems via Modbus protocols; authored comprehensive FDS, HDS, and Loop Drawing specifications.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase mb-2">
          02. Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12">
          Where I&apos;ve Worked
        </h2>

        <div className="relative">
          <div className="absolute left-0 sm:left-[200px] top-0 bottom-0 w-px bg-slate-800 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="sm:grid sm:grid-cols-[200px_1fr] gap-8"
              >
                <div className="sm:text-right sm:pr-8 mb-4 sm:mb-0">
                  <p className="font-mono text-cyan-400 text-xs tracking-wider uppercase">
                    {exp.period}
                  </p>
                  <h3 className="text-slate-100 font-semibold mt-1 text-sm leading-snug">
                    {exp.company}
                  </h3>
                </div>

                <div className="sm:pl-8 relative">
                  <div className="hidden sm:block absolute -left-[5px] top-1 w-[10px] h-[10px] rounded-full bg-cyan-400 border-2 border-background" />
                  <p className="text-amber-400 font-mono text-sm mb-4">{exp.role}</p>
                  <ul className="space-y-3">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="text-cyan-400 mt-0.5 flex-shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
