import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent"
    >
      <div className="flex aspect-[16/10] items-center justify-center border-b border-line bg-gradient-to-br from-[#16233a] to-[#101a2b] px-4 text-center text-xs text-text-sec">
        Capture d&apos;écran à ajouter
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-base font-semibold group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-text-sec">{project.summary}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full border border-line px-2.5 py-1 text-[11px] text-text-sec">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
