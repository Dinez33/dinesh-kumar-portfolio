export default function Button({
  children,
  href,
  variant = "primary",
}) {
  const base =
    "px-6 py-3 rounded-xl font-semibold transition duration-300";

  const primary =
    "bg-blue-600 text-white hover:bg-blue-700 shadow-lg";

  const secondary =
    "border border-gray-300 hover:bg-gray-100 dark:border-slate-600 dark:hover:bg-slate-800";

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${
          variant === "primary"
            ? primary
            : secondary
        }`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${base} ${
        variant === "primary"
          ? primary
          : secondary
      }`}
    >
      {children}
    </button>
  );
}