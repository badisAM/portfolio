export default function TerminalWindow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-[#0d1219] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-line bg-[#11161f] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-text-sec">{title}</span>
      </div>
      <div className="p-5 md:p-7">{children}</div>
    </div>
  );
}
