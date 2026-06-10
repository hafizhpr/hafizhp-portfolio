const groups = [
  {
    label: "Control Systems",
    items: [
      "DCS (Emerson DeltaV)",
      "SIS / ESD / F&G",
      "PLC (IEC 61131-3)",
      "SCADA (AVEVA)",
      "SCADA (Indusoft)",
      "HP-HMI (ANSI/ISA-101)",
    ],
  },
  {
    label: "Digitalization & IIoT",
    items: [
      "MING Stack",
      "Mosquitto MQTT",
      "InfluxDB",
      "Node-RED",
      "Grafana",
      "SQL Server",
      "HTML / PHP / JS",
    ],
  },
  {
    label: "Networking & Security",
    items: [
      "MikroTik (MTCNA)",
      "Secure Routing",
      "Modbus TCP/Serial",
      "CANbus",
      "Ethernet/IP",
      "OT Cybersecurity",
    ],
  },
  {
    label: "Engineering",
    items: [
      "P&ID Interpretation",
      "FDS / HDS Authoring",
      "Loop Drawings",
      "Greenfield Projects",
      "Brownfield Projects",
      "System Modernization",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase mb-2">
          04. Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12">
          Core Competencies
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {groups.map((g) => (
            <div key={g.label}>
              <h3 className="font-mono text-cyan-400 text-xs tracking-[0.2em] uppercase mb-4 pb-2 border-b border-slate-800">
                {g.label}
              </h3>
              <ul className="space-y-2.5">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
