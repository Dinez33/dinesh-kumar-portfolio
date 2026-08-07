export default function Button({ children, href, variant = "primary" }) {
  const base = "rounded-xl px-6 py-3 font-semibold transition duration-300";

  const primary = "text-white shadow-lg";
  const secondary = "border";

  const style =
    variant === "primary"
      ? { backgroundColor: "var(--primary)", color: "#fff" }
      : {
          borderColor: "var(--border)",
          color: "var(--text)",
          backgroundColor: "var(--card)",
        };

  if (href) {
    return (
      <a href={href} className={`${base} ${variant === "primary" ? primary : secondary}`} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${variant === "primary" ? primary : secondary}`} style={style}>
      {children}
    </button>
  );
}