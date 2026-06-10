import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Hafiz Hardiansyah Pratama — Automation Solution Architect",
  description:
    "Portfolio of Hafiz Hardiansyah Pratama, Automation Solution Architect (OT/IT) specializing in SCADA, PLC, IIoT, and OT/IT integration. Jakarta, Indonesia.",
  keywords: ["Automation", "SCADA", "PLC", "IIoT", "OT/IT", "Solution Architect", "Jakarta"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
