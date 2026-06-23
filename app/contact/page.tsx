import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <>
      <Header />

      <div className="mx-auto max-w-5xl px-6">
        <PageTitle
          title="Contact"
          description="お問い合わせやご連絡は、メールまたはSNSからお願いします。"
        />

        <section className="pb-16">
          <div className="rounded-2xl border border-stone-100/10 bg-stone-900/45 p-6 shadow-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-stone-100">Links</h2>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-amber-100/20 bg-amber-100/10 px-5 py-3 text-sm font-semibold text-amber-100/85 transition hover:bg-amber-100/20 hover:text-amber-50"
              >
                Email
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-stone-100/15 bg-stone-950/20 px-5 py-3 text-sm font-semibold text-stone-100/75 transition hover:bg-stone-100/10 hover:text-stone-50"
              >
                GitHub
              </a>

              <a
                href={profile.x}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-stone-100/15 bg-stone-950/20 px-5 py-3 text-sm font-semibold text-stone-100/75 transition hover:bg-stone-100/10 hover:text-stone-50"
              >
                X
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}