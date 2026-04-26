type Props = { className?: string };

export function PlayIcon({ className = "" }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3.609 1.814 13.79 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zM14.79 13.001 5.43 22.36l11.65-6.73-2.29-2.628zM18.295 13.748l3.018-1.745a1 1 0 0 0 0-1.732l-3.026-1.748L15.207 12l3.088 1.748zM5.43 1.64l9.36 9.36 2.29-2.628L5.43 1.64z" />
    </svg>
  );
}
