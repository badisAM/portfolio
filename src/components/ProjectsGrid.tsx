"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const filters = [
  { key: "all", label: "Tous" },
  { key: "ai", label: "IA Agentique / ML" },
  { key: "data", label: "Data & MLOps" },
  { key: "web", label: "Full-Stack" },
] as const;

export default function ProjectsGrid() {
  const [active, setActive] = useState<(typeof filters)[number]["key"]>("all");
  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-9 flex flex-wrap gap-2.5">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === f.key
                ? "border-accent bg-accent text-[#062012]"
                : "border-line text-text-sec hover:text-text"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
