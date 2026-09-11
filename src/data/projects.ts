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
  thumbPlate?: boolean; // true = plaque claire derrière la vignette (logo sombre)
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
    title: "EduVision — Deep Learning Image Captioning",
    client: "Projet personnel",
    category: "ai",
    summary:
      "Modèle encodeur-décodeur qui génère automatiquement une légende décrivant le contenu d'une image.",
    description: [
      "Architecture encodeur-décodeur : un CNN ResNet-50 pré-entraîné extrait les caractéristiques visuelles de l'image, un décodeur Transformer génère ensuite la légende mot à mot.",
      "Décodage par beam search plutôt que glouton : le modèle explore plusieurs séquences candidates en parallèle et retient la plus probable, ce qui améliore nettement la qualité des légendes et le score BLEU.",
      "Servi par une API Flask et consommé par une interface React permettant d'uploader une image et d'obtenir sa description générée.",
    ],
    tags: ["PyTorch", "ResNet-50", "Transformer", "Beam Search", "Flask", "React"],
    confidential: false,
    repoUrl: "https://github.com/badisAM/bedis-kids-quizz",
    liveUrl: "https://bedis-kids-quizz.onrender.com",
    thumb: "/images/projects/EduVision/dl_logo.png",
    thumbPlate: true,
    images: [
      { src: "/images/projects/EduVision/demo.png", caption: "Interface de génération de légende" },
      { src: "/images/projects/EduVision/detail1.png", caption: "Architecture du modèle" },
      { src: "/images/projects/EduVision/detail2.png", caption: "Entraînement et métriques" },
      { src: "/images/projects/EduVision/detail3.png", caption: "Exemples de résultats" },
    ],
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
  "Architecture MVC avec Symfony et Doctrine (ORM), authentification sécurisée par JWT et gestion fine des rôles (demandeur, valideur, administrateur).",
  "Workflow d'approbation multi-étapes côté Angular (soumission → validation → génération), avec traçabilité complète de chaque décision.",
  "Génération automatisée des certificats au format numérique, supprimant la saisie manuelle et fiabilisant le processus de délivrance.",
],
    tags: ["Angular", "Symfony", "PHP", "Doctrine", "JWT"],
    confidential: false,
    repoUrl: "COLLE_TON_LIEN_REPO_ICI",
    liveUrl: "https://certifpro.wuaze.com/",
    thumb: "/images/projects/digital-certificate-platform/cetrificate_logo.png",
    thumbPlate: true,
    images: [
      { src: "/images/projects/digital-certificate-platform/img1.png", caption: "Interface de la plateforme" },
    ],
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