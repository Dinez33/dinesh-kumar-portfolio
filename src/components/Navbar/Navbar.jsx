import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../Common/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        background: "rgba(255,255,255,0.85)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold"
          style={{ color: "var(--primary)" }}
        >
          DK
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menu.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="font-medium transition hover:text-blue-600"
                style={{ color: "var(--text)" }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ color: "var(--text)" }}
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{
            background: "var(--background)",
            borderColor: "var(--border)",
          }}
        >
          {menu.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-6 py-4 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
              style={{ color: "var(--text)" }}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}

          <div className="flex justify-end px-6 py-4">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}