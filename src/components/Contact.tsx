import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section className="border-t border-gray-200 py-16">
      <h2 className="text-2xl font-bold text-gray-950">Contact</h2>

      <p className="mt-6 text-gray-600">
        お問い合わせやご連絡は、以下のメールアドレスまたはSNSからお願いします。
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
        >
          Email
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
        >
          GitHub
        </a>

        <a
          href={profile.x}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
        >
          X
        </a>
      </div>
    </section>
  );
}