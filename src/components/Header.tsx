"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { label: "Profile", href: "/profile" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-stone-100/10 bg-stone-950/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-6">
        <Link
          href="/"
          className="text-xs font-medium uppercase tracking-[0.25em] text-stone-100/70 transition hover:text-amber-100"
        >
          Portfolio
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-2 text-xs font-medium sm:gap-3">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "rounded-full border px-3 py-1.5 transition sm:px-4 sm:py-2",
                      isActive
                        ? "border-amber-100/30 bg-amber-100/10 text-amber-50"
                        : "border-stone-100/10 bg-stone-950/20 text-stone-200/65 hover:border-amber-100/25 hover:bg-amber-100/10 hover:text-amber-50",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}