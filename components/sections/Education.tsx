import { GraduationCap, Award } from "lucide-react";

const certs = [
  {
    name: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik",
    year: "2025",
  },
  {
    name: "Certified Industrial Automation System Specialist (PLC & SCADA)",
    issuer: "BNSP Indonesia",
    year: "2019",
  },
  {
    name: "Certified Domestic Electrical Installation Specialist",
    issuer: "BNSP Indonesia",
    year: "2019",
  },
  {
    name: "1st Runner Up — National PLC Competition",
    issuer: "State University of Jakarta",
    year: "2017",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-pad bg-surface">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase mb-2">
          05. Education
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12">
          Background &amp; Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-slate-700 p-8 hover:border-cyan-400/40 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-400/10 border border-cyan-400/20 flex-shrink-0">
                <GraduationCap size={22} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-slate-100 font-semibold mb-1">
                  S.Tr.T — Industrial Electrical Automation Engineering
                </h3>
                <p className="text-amber-400 font-mono text-xs mb-4">
                  Politeknik Negeri Jakarta
                </p>
                <div className="space-y-2 text-slate-400 text-sm">
                  <p>
                    <span className="text-slate-200 font-medium">GPA:</span> 3.65 / 4.00
                  </p>
                  <p>
                    <span className="text-slate-200 font-medium">Thesis:</span> Water
                    Supply System Based on Industrial Internet of Things (IIoT)
                  </p>
                  <p>
                    <span className="text-slate-200 font-medium">
                      Industry Partner:
                    </span>{" "}
                    PT. PAM Lyonnaise Jaya (PALYJA) — real-time water distribution
                    monitoring & data acquisition.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {certs.map((c) => (
              <div
                key={c.name}
                className="flex items-start gap-4 bg-card border border-slate-700 p-4 hover:border-cyan-400/40 transition-colors"
              >
                <Award size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 text-sm font-medium">{c.name}</p>
                  <p className="text-slate-500 font-mono text-xs mt-0.5">
                    {c.issuer} · {c.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
