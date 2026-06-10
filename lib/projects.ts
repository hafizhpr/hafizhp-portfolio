export type ProjectStatus = "live" | "development";
export type ProjectType = "app" | "field";

export interface Project {
  slug: string;
  type: ProjectType;
  title: string;
  client: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  status: ProjectStatus;
  url?: string;
}

export const projects: Project[] = [
  // ── Apps & Tools (type: "app") ─────────────────────────────────────────────
  // Shown on overview page as clickable, live-accessible projects
  {
    slug: "apphub-pipeline",
    type: "app",
    title: "Danfoss AppHub Pipeline",
    client: "PT. Danfoss Indonesia — Internal",
    shortDesc:
      "Industrial data pipeline for Danfoss AppHub (Azure PaaS): PLC → MQTT → QuestDB → Grafana for real-time plant monitoring.",
    fullDesc:
      "End-to-end industrial data pipeline built for the Danfoss AppHub platform on Azure. Python scripts collect Modbus TCP data from PLCs and publish to an MQTT broker. A subscriber ingests the stream into QuestDB (time-series database via InfluxDB line protocol), which feeds live Grafana dashboards. The full stack — broker, QuestDB, and Grafana — is containerised with Docker Compose, enabling consistent local development and easy deployment.",
    tags: ["Python", "MQTT", "QuestDB", "Grafana", "Modbus TCP", "Docker", "Azure"],
    status: "live",
    url: undefined, // set to live URL once available
  },
  {
    slug: "cloud-scada-gateway",
    type: "app",
    title: "Cloud-Connected SCADA Gateway",
    client: "R&D — Internal",
    shortDesc:
      "OT-to-cloud bridge connecting legacy PLCs and SCADA systems to modern cloud analytics and remote monitoring.",
    fullDesc:
      "Research and development project exploring secure OT-to-cloud connectivity. The gateway bridges legacy PLC and SCADA systems with cloud-based analytics platforms using encrypted tunnelling and protocol translation (Modbus → MQTT → cloud). Designed to enable remote KPI monitoring without exposing OT networks directly to the internet.",
    tags: ["SCADA", "Cloud", "MQTT", "Legacy Migration", "OT Security"],
    status: "development",
  },

  // ── Field Work (type: "field") ──────────────────────────────────────────────
  // Industrial/engineering projects from CV — shown on Profile page
  {
    slug: "scada-data-intelligence",
    type: "field",
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
    type: "field",
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
    type: "field",
    title: "Gas Compressor SIS Engineering",
    client: "Pertamina EP — SKG Betung",
    shortDesc:
      "Emerson DeltaV SIS commissioning for low-pressure gas compressors with full ESD and F&G functional safety compliance.",
    fullDesc:
      "Engineered and commissioned Emerson DeltaV Safety Instrumented System (SIS) for low-pressure gas compressor units. Ensured 100% adherence to functional safety standards, Emergency Shutdown (ESD), and Fire & Gas (F&G) logic for production optimization at the SKG Betung gas processing facility.",
    tags: ["Emerson DeltaV", "SIS / ESD", "F&G", "Functional Safety", "Oil & Gas"],
    status: "live",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
