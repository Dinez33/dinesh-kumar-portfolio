import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {

  const { resolvedTheme, setTheme } = useTheme();

  const dark = resolvedTheme === "dark";

  return (

    <button

      onClick={() =>
        setTheme(dark ? "light" : "dark")
      }

      className="
      w-11
      h-11
      rounded-full
      border
      transition
      hover:scale-110
      "

      style={{
        borderColor:"var(--border)",
        background:"var(--card)"
      }}

    >

      {dark ? <FaSun color="#facc15"/> : <FaMoon color="#2563eb"/>}

    </button>

  );

}