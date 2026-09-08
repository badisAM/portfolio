export type Project = {
  slug: string;
  title: string;
  client: string;
  category: "ai" | "data" | "web";
  summary: string;
  description: string[];
  tags: string[];
  confidential: boolean;
  repoUrl?: string;
  liveUrl?: string;
  thumb?: string;
  images?: { src: string; caption: string }[];
  hasImpact?: boolean; // only true for projects with real, verifiable metrics
};

export const projects: Project[] = [
  {
    slug: "retrack",
    title: "RETRACK — Automatisation & couverture LLM/RAG",
    client: "Sagemcom Software & Technologies",
    category: "ai",
    summary:
      "Pipeline LLM/RAG à 8 agents auditant la couverture exigences/tests, et automatisation complète des rapports JIRA/Xray.",
    description: [
      "Automatisation de bout en bout du flux JIRA/Xray vers rapport final (Flask + Angular) : extraction des données, calcul des indicateurs, génération de graphiques et de templates, puis envoi automatique par Outlook.",
      "Conception d'un pipeline LLM/RAG à 8 agents (pré-filtrage BM25, embeddings, preuves citées) pour auditer la couverture exigences → tests sur plus de 1000 cas Xray, et signaler les écarts de traçabilité.",
    ],
    tags: ["Flask", "Angular", "Multi-Agent RAG", "BM25", "Embeddings", "JIRA/Xray API"],
    confidential: true,
    hasImpact: true,
  },
  {
    slug: "ml-pipeline-mlops",
    title: "End-to-End MLOps Pipeline — Drug Classification",
    client: "Projet personnel — déployé en production",
    category: "data",
    summary:
      "Pipeline MLOps complet pour la classification multi-classes de médicaments, déployé en production avec CI/CD.",
    description: [
      "Pipeline automatisé de bout en bout : préprocessing, entraînement et suivi d'expériences via MLflow (paramètres, métriques, matrice de confusion, registre de modèles).",
      "97,5% d'accuracy avec une régression logistique optimisée — 97,6% de précision, 97,5% de recall, F1-score de 97,4%.",
      "Conteneurisé avec Docker et exposé via une API REST FastAPI (interface web + endpoint), déployé en production avec CI/CD déclenché depuis GitHub.",
    ],
    tags: ["scikit-learn", "MLflow", "FastAPI", "Docker", "Render", "CI/CD"],
    confidential: false,
    repoUrl: "https://github.com/badisAM/drug-classification-mlops",
    liveUrl: "https://drug-classification-api.onrender.com",
    thumb: "/images/projects/mlops/mlops.png",
    images: [
      { src: "/images/projects/mlops/architecture.png", caption: "Architecture du pipeline" },
      { src: "/images/projects/mlops/ui-1.png", caption: "Interface de prédiction" },
      { src: "/images/projects/mlops/ui-2.png", caption: "Résultat du modèle" },
    ],
  },
  {
    slug: "eduvision",
    title: "EduVision — Image Captioning",
    client: "Projet personnel",
    category: "ai",
    summary:
      "Génération automatique de légendes d'images combinant vision par ordinateur et génération de texte.",
    description: [
      "Encodeur CNN (ResNet-50) couplé à un décodeur Transformer.",
      "Décodage par beam search pour améliorer la qualité des légendes générées (score BLEU).",
    ],
    tags: ["PyTorch", "ResNet-50", "Transformer", "Flask", "React"],
    confidential: false,
  },
  {
    slug: "vital-lab-agentic-ai",
    title: "Agentic AI — VITAL Lab",
    client: "Collaboration recherche",
    category: "ai",
    summary:
      "Système multi-agent automatisant des workflows de recherche via embeddings vectoriels et Q&A pilotée par LLM.",
    description: [
      "Orchestration multi-agent pour automatiser la recherche documentaire et la génération de synthèses.",
      "Recherche vectorielle avec Pinecone et question-réponse pilotée par LLM.",
    ],
    tags: ["LangChain", "RAG", "Pinecone", "LLM"],
    confidential: true,
  },
  {
    slug: "bi-platform",
    title: "BI Platform",
    client: "Projet académique",
    category: "data",
    summary:
      "Pipelines ETL de bout en bout et dashboards Power BI pour l'analytique ERP et le suivi de KPI.",
    description: [
      "Extraction et transformation de données ERP (Odoo) via Talend, chargement dans SQL Server (SSMS).",
      "Modélisation en étoile et dashboards Power BI interactifs avec drill-through.",
    ],
    tags: ["Power BI", "Talend", "SSMS", "Odoo", "Python"],
    confidential: false,
  },
  {
    slug: "digital-certificate-platform",
    title: "Digital Certificate Platform",
    client: "Projet académique",
    category: "web",
    summary:
      "Application full-stack avec authentification, workflows d'approbation et génération automatisée de certificats.",
    description: [
      "Architecture MVC avec Symfony et Doctrine, authentification JWT.",
      "Frontend Angular avec workflows d'approbation multi-étapes.",
    ],
    tags: ["Angular", "Symfony", "PHP", "Doctrine", "JWT"],
    confidential: false,
  },
  {
    slug: "gym-management-system",
    title: "Gym Management System",
    client: "Projet académique",
    category: "web",
    summary: "Système desktop et web avec API REST, planification et interface responsive.",
    description: [
      "Application desktop JavaFX connectée à une API REST Spring Boot.",
      "Planification des séances et gestion des membres, base de données MySQL.",
    ],
    tags: ["JavaFX", "Spring Boot", "MySQL"],
    confidential: false,
  },
  {
    slug: "time-series-forecasting",
    title: "Time Series Forecasting",
    client: "Projet académique",
    category: "data",
    summary: "Modèles de prévision avec analyse ACF/PACF et dashboards de validation.",
    description: [
      "Modélisation ARIMA/SARIMA/STL sur séries temporelles.",
      "Analyse ACF/PACF pour la sélection des paramètres, dashboards de validation des prévisions.",
    ],
    tags: ["R", "ARIMA", "SARIMA", "STL"],
    confidential: false,
  },
];

export const timeline = [
  {
    year: "2021 — 2024",
    title: "Classes Préparatoires (MP) — Maths & Physique",
    desc: "IPEI El Manar, Tunis",
  },
  {
    year: "2024 — Présent",
    title: "Ingénierie Informatique — Data Science & AI",
    desc: "ESPRIT, Tunis",
  },
  {
    year: "Été 2025",
    title: "Stage Réseaux & Télécom — Tunisie Telecom",
    desc: "Fibre optique, infrastructure, documentation technique",
  },
  {
    year: "Été 2026",
    title: "Stage AI & Software Engineering — Sagemcom",
    desc: "Pipeline LLM/RAG à 8 agents, automatisation de rapports",
  },
  {
    year: "2027",
    title: "Prochaine étape — PFE",
    desc: "Ingénierie IA, plateforme data, ou full-stack",
  },
];

export const companies: {
  name: string;
  role: string;
  logo?: string;
  plate?: boolean; // true = fond blanc derrière le logo (logo sombre peu lisible)
}[] = [
  { name: "Sagemcom Software & Technologies", role: "AI & Software Engineering Intern", logo: "/images/companies/sagemcom.png" },
  { name: "Tunisie Telecom", role: "Networks & Telecom Intern", logo: "/images/companies/tunisie-telecom.png" },
  { name: "VITAL Lab", role: "Recherche — Agentic AI", logo: "/images/companies/vital.png", plate: true },
  { name: "ESPRIT", role: "École d'ingénieurs" },
];
