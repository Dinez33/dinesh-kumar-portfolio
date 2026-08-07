export default function Footer() {
  return (
    <footer className="py-8 text-center" style={{ backgroundColor: "var(--surface)", color: "var(--muted)" }}>
      <p>© {new Date().getFullYear()} Dinesh Kumar.</p>
      <p className="mt-2">Built with React</p>
    </footer>
  );
}