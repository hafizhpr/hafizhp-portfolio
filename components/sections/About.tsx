import { Cpu, Network, BarChart3, Shield } from "lucide-react";

const highlights = [
  { icon: Cpu, title: "Control Systems", desc: "DCS, SIS & PLC engineering" },
  { icon: Network, title: "OT/IT Integration", desc: "MING Stack & IIoT" },
  { icon: BarChart3, title: "Data & Analytics", desc: "SQL, dashboards, reporting" },
  { icon: Shield, title: "Cybersecurity", desc: "Secure SCADA networking" },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-surface">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase mb-2">
          01. About
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-10">
          Who I Am
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Solution Architect with over{" "}
              <span className="text-slate-100 font-medium">6 years of experience</span>{" "}
              in Industrial Automation, specializing in SCADA, PLC, and OT/IT
              integration. I design digital architectures for plant data
              transformation and legacy system modernization.
            </p>
            <p>
              My work spans from engineering{" "}
              <span className="text-slate-100 font-medium">Emerson DeltaV DCS/SIS</span>{" "}
              systems for Oil &amp; Gas clients to deploying full{" "}
              <span className="text-slate-100 font-medium">MING Stack IIoT</span>{" "}
              infrastructures and custom web-based monitoring platforms.
            </p>
            <p>
              Strong foundation in functional safety standards (ESD &amp; F&amp;G),
              secure networking architectures, and translating P&amp;ID requirements
              into complete end-to-end automation solutions for Greenfield and
              Brownfield projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-card border border-slate-700 p-5 hover:border-cyan-400/40 transition-colors group"
              >
                <Icon
                  size={22}
                  className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-slate-100 font-semibold text-sm mb-1">{title}</h3>
                <p className="text-slate-500 text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
