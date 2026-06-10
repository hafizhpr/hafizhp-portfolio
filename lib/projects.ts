export type ProjectStatus = "live" | "development";

export interface Project {
  slug: string;
  title: string;
  client: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  status: ProjectStatus;
  url?: string;
}

export const projects: Project[] = [
  {
    slug: "apphub-pipeline",
    title: "AppHub Pipeline",
    client: "Internal Platform",
    shortDesc:
      "Web-based automation pipeline and data hub built to streamline project management and monitoring workflows.",
    fullDesc:
      "AppHub Pipeline is a full-stack internal platform designed to centralise project data flows, automate repetitive reporting tasks, and provide a unified dashboard for monitoring automation project statuses. Built collaboratively as an operational productivity tool.",
    tags: ["Next.js", "Dashboard", "Data Pipeline", "Internal Tool"],
    status: "live",
    url: undefined,
  },
  {
    slug: "scada-data-intelligence",
    title: "SCADA & Data Intelligence",
    client: "PT. Bio Inti Agrindo — Merauke",
    shortDesc:
      "Migrated CMC Sterilizer control to SCADA with SQL-automated TPH/OER reporting and multi-source data verification.",
    fullDesc:
      "Full SCADA migration for palm oil processing plant. Configured Windows Server & SQL to automate TPH and Oil Extraction Rate (OER) reporting. Developed data verification logic comparing Weighbridge data against Radar Sensors and Coriolis Flowmeters, achieving 100% accuracy in production output reporting.",
    tags: ["SCADA", "SQL Server", "Windows Server", "TPH/OER Analytics"],
    status: "live",
  },
  {
    slug: "iiot-energy-optimization",
    title: "IIoT & Energy Optimization",
    client: "Dharma Satya Nusantara — PKS 12",
    shortDesc:
      "MING Stack IIoT deployment automating daily SFC reporting from Deepsea controllers and Weighbridge DB-to-DB sync.",
    fullDesc:
      "Established Modbus TCP communication to acquire kWh data from Deepsea controllers and fuel consumption (Liters) from flowmeters. Built Node-RED flows to calculate Specific Fuel Consumption (SFC) automatically. Implemented DB-to-DB synchronization to bridge floor production data with management analytics dashboards.",
    tags: ["IIoT", "MING Stack", "Modbus TCP", "InfluxDB", "Node-RED", "Grafana"],
    status: "live",
  },
  {
    slug: "gas-compressor-sis",
    title: "Gas Compressor SIS Engineering",
    client: "Pertamina EP — SKG Betung",
    shortDesc:
      "Emerson DeltaV SIS commissioning for low-pressure gas compressors with full ESD and F&G functional safety compliance.",
    fullDesc:
      "Engineered and commissioned Emerson DeltaV Safety Instrumented System (SIS) for low-pressure gas compressor units. Ensured 100% adherence to functional safety standards, Emergency Shutdown (ESD), and Fire & Gas (F&G) logic for production optimization at the SKG Betung gas processing facility.",
    tags: ["Emerson DeltaV", "SIS / ESD", "F&G", "Functional Safety", "Oil & Gas"],
    status: "live",
  },
  {
    slug: "cloud-scada-gateway",
    title: "Cloud-Connected SCADA Gateway",
    client: "R&D — Internal",
    shortDesc:
      "OT-to-cloud bridge connecting legacy PLCs and SCADA systems to modern cloud analytics and remote monitoring.",
    fullDesc:
      "Research and development project exploring secure OT-to-cloud connectivity. The gateway bridges legacy PLC and SCADA systems with cloud-based analytics platforms using encrypted tunnelling and protocol translation (Modbus → MQTT → cloud). Designed to enable remote KPI monitoring without exposing OT networks directly to the internet.",
    tags: ["SCADA", "Cloud", "MQTT", "Legacy Migration", "OT Security"],
    status: "development",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
