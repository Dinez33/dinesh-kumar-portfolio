export default function Footer() {
  return (
    <footer className="bg-black py-8 text-center text-muted">
      <p>
        © {new Date().getFullYear()} Dinesh Kumar.
      </p>

      <p className="mt-2">
        Built with React
      </p>
    </footer>
  );
}