import { PageTitle } from "@/components/PageTitle";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <div>
      <PageTitle
        title="Contact"
        description="お問い合わせやご連絡は、メールまたはSNSからお願いします。"
      />

      <section className="pb-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-950">Links</h2>

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
        </div>
      </section>
    </div>
  );
}