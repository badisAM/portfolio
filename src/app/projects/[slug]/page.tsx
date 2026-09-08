import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import BarCompare from "@/components/BarCompare";
import Flow from "@/components/Flow";
import MetricBars from "@/components/MetricBars";
import ImageDeck from "@/components/ImageDeck";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex flex-wrap items-center gap-4 font-mono text-sm">
        <Link href="/" className="text-text-sec transition-colors hover:text-accent">
          ← accueil
        </Link>
        <span className="text-line">|</span>
        <Link href="/#projects" className="text-text-sec transition-colors hover:text-accent">
          $ cd ../projects
        </Link>
      </div>

      <div className="mt-6 mb-2 font-mono text-sm text-accent">{project.client}</div>
      <h1 className="font-display text-3xl font-bold md:text-4xl">{project.title}</h1>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full border border-line px-2.5 py-1 text-xs text-text-sec">
            {t}
          </span>
        ))}
      </div>

      {(project.liveUrl || (!project.confidential && project.repoUrl)) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-accent px-5 py-2.5 font-mono text-[13px] font-semibold text-[#062012] transition-opacity hover:opacity-90"
            >
              ↗ voir la démo live
            </a>
          )}
          {!project.confidential && project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line px-5 py-2.5 font-mono text-[13px] transition-colors hover:border-accent hover:text-accent"
            >
              $ git clone
            </a>
          )}
        </div>
      )}

      {project.images && project.images.length > 0 ? (
        <div className="mt-10">
          <ImageDeck images={project.images} />
        </div>
      ) : (
        <div className="mt-10 flex aspect-[16/9] items-center justify-center rounded-2xl border border-dashed border-line px-6 text-center text-sm text-text-sec">
          Capture d&apos;écran à ajouter
        </div>
      )}

      <div className="mt-10 space-y-4 text-[15px] leading-relaxed text-text-sec">
        {project.description.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {project.slug === "ml-pipeline-mlops" && (
        <>
          <h2 className="mt-12 mb-5 font-display text-lg font-semibold">Performance du modèle</h2>
          <MetricBars
            metrics={[
              { label: "Accuracy", value: 97.5 },
              { label: "Precision", value: 97.6 },
              { label: "Recall", value: 97.5 },
              { label: "F1-score", value: 97.4 },
            ]}
          />
        </>
      )}

      {project.slug === "kids-quiz-ia" && (
        <>
          <h2 className="mt-12 mb-5 font-display text-lg font-semibold">Performance du modèle</h2>
          <MetricBars
            metrics={[
              { label: "Accuracy", value: 88.7 },
              { label: "Epoch 1", value: 86.0 },
              { label: "Epoch 2", value: 87.6 },
              { label: "Epoch 3", value: 88.7 },
            ]}
          />
          <p className="mt-4 text-sm text-text-sec">
            Caltech-101 · 102 classes · 7 316 images d&apos;entraînement, 1 828 de validation ·
            130K paramètres entraînés sur 3,5M.
          </p>
        </>
      )}

      {project.slug === "retrack" && (
        <>
          <h2 className="mt-12 mb-5 font-display text-lg font-semibold">Gain de temps</h2>
          <BarCompare />

          <h2 className="mt-12 mb-5 font-display text-lg font-semibold">Architecture du pipeline</h2>
          <Flow />
        </>
      )}

      {project.confidential && (
        <div className="mt-12 border-t border-line pt-6">
          <span className="text-sm text-text-sec">
            Projet {project.client === "Collaboration recherche" ? "de recherche" : "d'entreprise"} — code source privé.
          </span>
        </div>
      )}
    </article>
  );
}