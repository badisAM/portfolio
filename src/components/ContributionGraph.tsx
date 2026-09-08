export default function ContributionGraph({ username }: { username: string }) {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://ghchart.rshah.org/e8a33d/${username}`}
        alt={`Contributions GitHub de ${username}`}
        className="w-full rounded-lg border border-line bg-card p-3"
      />
      <p className="mt-2 font-mono text-xs text-text-sec">
        contributions réelles · github.com/{username}
      </p>
    </div>
  );
}
