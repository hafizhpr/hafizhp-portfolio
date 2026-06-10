import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "hafizhp@icloud.com",
    href: "mailto:hafizhp@icloud.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62-822-99099497",
    href: "tel:+6282299099497",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/hafizhp",
    href: "https://linkedin.com/in/hafizhp",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jakarta, Indonesia",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase mb-2">
          06. Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">
          Available for consulting, project collaboration, and full-time
          opportunities. Let&apos;s discuss how I can bring industrial automation
          expertise to your next project.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="bg-card border border-slate-700 p-6 hover:border-cyan-400/40 transition-colors group"
            >
              <Icon
                size={22}
                className="text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform"
              />
              <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-1">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-slate-200 text-sm hover:text-cyan-400 transition-colors"
                >
                  {value}
                </a>
              ) : (
                <p className="text-slate-200 text-sm">{value}</p>
              )}
            </div>
          ))}
        </div>

        <a
          href="mailto:hafizhp@icloud.com"
          className="inline-flex items-center gap-2 bg-cyan-400 text-background px-8 py-4 font-semibold text-lg hover:bg-cyan-300 transition-colors"
        >
          <Mail size={20} />
          Send a Message
        </a>

        <p className="text-slate-700 text-xs font-mono mt-12">
          © 2026 Hafiz Hardiansyah Pratama · Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </section>
  );
}
