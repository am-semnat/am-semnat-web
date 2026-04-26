type Props = {
  size?: number;
  color?: string;
  inset?: number;
  strokeWidth?: number;
  className?: string;
};

export function CornerBrackets({
  size = 14,
  color = "currentColor",
  inset = 0,
  strokeWidth = 1.25,
  className = "",
}: Props) {
  const half = size;
  const arm = size * 0.55;
  const offset = -inset;
  const corners: { style: React.CSSProperties; d: string }[] = [
    {
      style: { top: offset, left: offset },
      d: `M 0 ${arm} L 0 0 L ${arm} 0`,
    },
    {
      style: { top: offset, right: offset },
      d: `M ${half - arm} 0 L ${half} 0 L ${half} ${arm}`,
    },
    {
      style: { bottom: offset, left: offset },
      d: `M 0 ${half - arm} L 0 ${half} L ${arm} ${half}`,
    },
    {
      style: { bottom: offset, right: offset },
      d: `M ${half - arm} ${half} L ${half} ${half} L ${half} ${half - arm}`,
    },
  ];

  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
    >
      {corners.map((c, i) => (
        <svg
          key={i}
          width={half}
          height={half}
          viewBox={`0 0 ${half} ${half}`}
          style={{ position: "absolute", ...c.style }}
        >
          <path
            d={c.d}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="square"
          />
        </svg>
      ))}
    </span>
  );
}
