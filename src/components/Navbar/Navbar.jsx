import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../Common/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        backgroundColor: "var(--navbar-bg)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="text-2xl font-extrabold" style={{ color: "var(--primary)" }}>
          DK
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {menu.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="font-medium transition"
                style={{ color: "var(--text)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text)";
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center md:flex">
          <ThemeToggle />
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ color: "var(--text)" }}
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="border-t md:hidden"
          style={{
            backgroundColor: "var(--background)",
            borderColor: "var(--border)",
          }}
        >
          {menu.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-6 py-4 transition"
              style={{ color: "var(--text)" }}
              onClick={() => setOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--surface)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
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