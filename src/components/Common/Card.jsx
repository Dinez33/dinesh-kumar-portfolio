export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-3xl
        border
        backdrop-blur-xl
        shadow-xl
        transition
        hover:-translate-y-1
        ${className}
      `}
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      {children}
    </div>
  );
}