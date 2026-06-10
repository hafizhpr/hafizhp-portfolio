const projects = [
  {
    emoji: "📊",
    title: "SCADA & Data Intelligence",
    client: "PT. Bio Inti Agrindo — Merauke",
    description:
      "Migrated CMC Sterilizer control to SCADA; configured Windows Server & SQL to automate TPH and OER (Oil Extraction Rate) reporting. Developed data verification logic comparing Weighbridge data against Radar Sensors and Coriolis Flowmeters for 100% production output accuracy.",
    tags: ["SCADA", "SQL Server", "Windows Server", "TPH/OER Analytics"],
  },
  {
    emoji: "⚡",
    title: "IIoT & Energy Optimization",
    client: "Dharma Satya Nusantara — PKS 12",
    description:
      "Established Modbus communication to acquire kWh data from Deepsea controllers and fuel consumption from flowmeters to automate daily SFC reporting. Implemented DB-to-DB synchronization bridging floor production with management analytics.",
    tags: ["IIoT", "Modbus TCP", "InfluxDB", "Node-RED", "Grafana"],
  },
  {
    emoji: "🛡️",
    title: "Gas Compressor SIS Engineering",
    client: "Pertamina EP — SKG Betung",
    description:
      "Engineered and commissioned Emerson DeltaV Safety Instrumented System (SIS) for low-pressure gas compressor units. Ensured 100% adherence to functional safety, ESD, and F&G logic for production optimization.",
    tags: ["Emerson DeltaV", "SIS / ESD", "F&G", "Functional Safety"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-surface">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase mb-2">
          03. Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12">
          Selected Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-card border border-slate-700 p-6 flex flex-col hover:border-cyan-400/40 hover:-translate-y-1 transition-all group"
            >
              <div className="text-3xl mb-4">{p.emoji}</div>
              <h3 className="text-slate-100 font-semibold text-lg mb-1 group-hover:text-cyan-400 transition-colors">
                {p.title}
              </h3>
              <p className="font-mono text-amber-400 text-xs mb-4">{p.client}</p>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs bg-background border border-slate-700 text-slate-500 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
