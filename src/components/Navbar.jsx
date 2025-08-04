import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header>
      <div className="mt-6 px-4 max-w-3xl mx-auto">
        <nav className="flex items-center justify-between w-full">
          <ul className="flex gap-10 sm:gap-8">
            {navLinks.map((nav, id) => (
              <li key={id} className="link text-text hover:text-accent transition">
                <a href={nav.href}>{nav.name}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 sm:gap-4">
            {/*<ThemeToggle />*/}
          </div>
        </nav>
      </div>
    </header>
  );
}