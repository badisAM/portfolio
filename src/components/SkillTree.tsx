const tree: { dir: string; items: string[] }[] = [
  { dir: "languages/", items: ["Python", "TypeScript", "Java", "R", "C", "SQL"] },
  {
    dir: "ai_ml/",
    items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "LangChain", "RAG", "Pinecone"],
  },
  { dir: "web_stack/", items: ["Angular", "Symfony", "Spring Boot", "JavaFX", "Flask"] },
  { dir: "data_cloud/", items: ["MLflow", "Docker", "Power BI", "Talend", "SSMS", "Odoo", "MySQL"] },
];

export default function SkillTree() {
  return (
    <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed text-text-sec">
      <span className="text-[#4fa8a0]">ammar@esprit</span>
      <span className="text-text-sec">:~/skills$ tree .</span>
      {"\n"}
      {tree.map((group, gi) => (
        <span key={group.dir}>
          {gi < tree.length - 1 ? "├── " : "└── "}
          <span className="text-accent">{group.dir}</span>
          {"\n"}
          {group.items.map((item, ii) => (
            <span key={item}>
              {gi < tree.length - 1 ? "│   " : "    "}
              {ii < group.items.length - 1 ? "├── " : "└── "}
              {item}
              {"\n"}
            </span>
          ))}
        </span>
      ))}
    </pre>
  );
}
