import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const dark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
        color: "var(--primary)",
        boxShadow: "var(--shadow)",
      }}
    >
      {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
}