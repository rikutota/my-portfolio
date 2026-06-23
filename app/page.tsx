import Link from "next/link";

const navigationItems = [
  { label: "Profile", href: "/profile" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <div className="relative aspect-[4/3] h-auto max-h-screen w-full max-w-[calc(100vh*4/3)]">
        <img
          src="/images/bohemian_room_bg.gif"
          alt=""
          className="home-background-focus h-full w-full object-contain"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />

        <nav className="home-navigation-fade-in absolute bottom-4 left-4 z-10 sm:bottom-6 sm:left-6">
          <div className="inline-flex rounded-2xl border border-stone-100/10 bg-stone-950/25 p-3 shadow-2xl backdrop-blur-[2px]">
            <ul className="flex flex-wrap gap-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-xl border border-stone-100/15 bg-stone-950/20 px-4 py-2 text-xs font-medium text-stone-100/75 transition hover:border-amber-100/35 hover:bg-amber-100/10 hover:text-amber-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </main>
  );
}
