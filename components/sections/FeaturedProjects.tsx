import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { projects } from "@/lib/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section-pad bg-surface">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase mb-2">
          02. Projects
        </p>
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Selected Work
          </h2>
          <Link
            href="/profile"
            className="text-cyan-400 text-sm font-mono hover:underline hidden sm:block"
          >
            Full profile →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="bg-card border border-slate-700 p-6 flex flex-col hover:border-cyan-400/50 hover:-translate-y-1 transition-all group"
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-4">
                {p.status === "development" ? (
                  <span className="flex items-center gap-1.5 font-mono text-xs text-amber-400 border border-amber-400/30 bg-amber-400/5 px-2 py-0.5">
                    <Clock size={11} />
                    On Development
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400 border border-emerald-400/30 bg-emerald-400/5 px-2 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                )}
                <ArrowUpRight
                  size={16}
                  className="text-slate-600 group-hover:text-cyan-400 transition-colors"
                />
              </div>

              <h3 className="text-slate-100 font-semibold text-base mb-1 group-hover:text-cyan-400 transition-colors">
                {p.title}
              </h3>
              <p className="font-mono text-amber-400 text-xs mb-3">{p.client}</p>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                {p.shortDesc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs bg-background border border-slate-800 text-slate-500 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
                {p.tags.length > 3 && (
                  <span className="font-mono text-xs text-slate-600 px-1 py-0.5">
                    +{p.tags.length - 3}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
