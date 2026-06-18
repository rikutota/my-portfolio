import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="py-20">
      <p className="mb-4 text-sm font-medium text-blue-600">
        Portfolio
      </p>

      <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-6xl">
        {profile.name}
      </h1>

      <p className="mt-4 text-xl font-medium text-gray-700">
        {profile.role}
      </p>

      <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600">
        {profile.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
        >
          GitHub
        </a>

        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
        >
          Contact
        </a>
      </div>
    </section>
  );
}