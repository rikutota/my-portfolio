import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-bold text-gray-950">
          Takagi Rikuto
        </Link>

        <nav>
          <ul className="flex gap-4 text-sm font-medium text-gray-600 sm:gap-6">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gray-950">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}