export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-md text-white border-t border-white/20 text-center py-4 mt-auto">
      <div className="flex justify-center gap-6 mb-2">
        <a
          href="https://www.linkedin.com/in/gozdedoner/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
        <a
          href="https://github.com/gozdedoner"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://vercel.com/gozdes-projects-921371a3"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
        >
          <i className="fas fa-globe fa-lg"></i>
        </a>
      </div>
      <p className="text-sm text-white/70">
        © {new Date().getFullYear()} Gözde Döner. All rights reserved.
      </p>
    </footer>
  );
}
