import Link from "next/link";
import { projects } from "@/lib/projects";

const fieldProjects = projects.filter((p) => p.type === "field");

export default function FieldWork() {
  return (
    <section id="field-work" className="section-pad bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase mb-2">
          06. Field Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
          Industrial Projects
        </h2>
        <p className="text-slate-500 text-sm mb-12">
          On-site engineering engagements — these run on plant floor infrastructure, not on the web.
        </p>

        <div className="space-y-4">
          {fieldProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="flex items-start justify-between gap-6 bg-card border border-slate-800 px-6 py-5 hover:border-slate-700 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-slate-200 font-semibold group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>
                </div>
                <p className="font-mono text-amber-400 text-xs mb-2">{p.client}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{p.shortDesc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-end shrink-0 max-w-[200px] hidden md:flex">
                {p.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs bg-background border border-slate-800 text-slate-600 px-2 py-0.5 whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
