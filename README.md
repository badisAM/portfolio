# Portfolio — Ammar Bedis

Projet Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvre http://localhost:3000

## Structure

- `src/data/projects.ts` — **toutes les données de contenu** (projets, parcours, entreprises). Modifie ce fichier pour tout changer sans toucher au design.
- `src/app/page.tsx` — page d'accueil (hero, about, grille de projets, parcours, contact)
- `src/app/projects/[slug]/page.tsx` — page de détail (case study) générée automatiquement pour chaque projet de `projects.ts`
- `src/components/` — composants réutilisables (Nav, ProjectCard, Timeline, etc.)

## À faire avant de déployer

1. Remplace les blocs "Capture d'écran à ajouter" par tes vraies images (`next/image` recommandé)
2. Remplace le bloc "Ta photo ici" dans le hero par ta photo
3. Ajoute tes vrais liens GitHub dans `repoUrl` (fichier `src/data/projects.ts`) pour les projets non confidentiels
4. Déploiement conseillé : [vercel.com](https://vercel.com) — connecte ton repo GitHub, zéro configuration nécessaire pour un projet Next.js.
