export default function Arrow({
  diagonal = false,
  className = "",
  size = 16,
}: {
  diagonal?: boolean;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      width={size}
      height={size}
      data-diagonal={diagonal ? "true" : undefined}
      className={`arrow ${className}`.trim()}
    >
      <path
        d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-6-6 6 6-6 6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
