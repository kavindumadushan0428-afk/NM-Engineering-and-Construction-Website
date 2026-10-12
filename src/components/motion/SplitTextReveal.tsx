export interface TextLine {
  text: string;
  className?: string;
}
export default function SplitTextReveal({
  lines,
  wrapperClassName = "",
}: {
  lines: TextLine[];
  wrapperClassName?: string;
  delayStart?: number;
  stagger?: number;
}) {
  return (
    <h1 className={"headline-reveal " + wrapperClassName}>
      {lines.map((line, i) => (
        <span className={"block " + (line.className || "")} key={i}>
          {line.text}
        </span>
      ))}
    </h1>
  );
}
