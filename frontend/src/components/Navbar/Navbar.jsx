import { useState } from "react";

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
    <nav className="fixed top-0 w-full bg-[#050816]/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">
          DK
        </h1>

        <ul className="hidden md:flex gap-8">
          {menu.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#111827]">
          {menu.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-6 py-3 border-b border-gray-700"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}