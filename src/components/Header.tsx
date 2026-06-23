import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-100/10 bg-stone-950/45 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold text-stone-100/80">
          Takagi Rikuto
        </Link>

        <nav>
          <ul className="flex gap-4 text-sm font-medium text-stone-200/70 sm:gap-6">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-amber-100"
                >
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