import type { CSSProperties } from "react";

type FallingLineProps = {
  text: string;
  className?: string;
  startDelay?: number;
};

/** Staggers each character so the heading falls in one letter at a time. */
export function FallingLine({
  text,
  className,
  startDelay = 0,
}: FallingLineProps) {
  return (
    <span className={className} aria-label={text}>
      {Array.from(text).map((character, index) => (
        <span
          aria-hidden="true"
          className={character === " " ? "falling-letter falling-space" : "falling-letter"}
          key={`${character}-${index}`}
          style={{ "--letter-delay": `${startDelay + index * 42}ms` } as CSSProperties}
        >
          {character === " " ? "\u00A0" : character}
        </span>
      ))}
    </span>
  );
}
