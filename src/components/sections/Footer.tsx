import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      name: "GitHub",
      url: "https://github.com/Ankitnandanwar",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ankit-nandanwar/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full border-t border-white/5 bg-cosmic-dark/80 backdrop-blur-md py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
          <Image
            src="/logo.png"
            alt="signature_logo"
            width={100}
            height={100}
            priority
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
          />
          <div className="text-center sm:text-left">
            <p className="font-space font-bold text-lg text-white tracking-wide">
              ANKIT NANDANWAR
            </p>
            <p className="text-xs text-gray-500 mt-1 font-mono">
              &copy; {currentYear} &bull; Built with precision using Next.js &
              Tailwind
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:bg-white/10 hover:text-cosmic-cyan hover:scale-105 transition-all duration-200"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
