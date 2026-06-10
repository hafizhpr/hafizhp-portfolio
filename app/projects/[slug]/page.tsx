import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { projects, getProject } from "@/lib/projects";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return { title: `${project.title} — Hafiz Hardiansyah Pratama` };
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-mono"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Status */}
        <div className="mb-6">
          {project.status === "development" ? (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-amber-400 border border-amber-400/30 bg-amber-400/5 px-3 py-1">
              <Clock size={12} />
              On Development
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400 border border-emerald-400/30 bg-emerald-400/5 px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </span>
          )}
        </div>

        <p className="font-mono text-amber-400 text-sm mb-2">{project.client}</p>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-100 mb-8">
          {project.title}
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            {project.fullDesc}
          </p>
        </div>

        {/* Tags */}
        <div className="border-t border-slate-800 pt-8">
          <p className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-sm bg-card border border-slate-700 text-slate-300 px-3 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row gap-4">
          <Link
            href="/#inquiry"
            className="flex items-center justify-center gap-2 bg-cyan-400 text-background px-6 py-3 font-semibold hover:bg-cyan-300 transition-colors"
          >
            Start a Similar Project
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 border border-slate-700 text-slate-400 px-6 py-3 font-semibold hover:border-cyan-400/40 hover:text-slate-200 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
