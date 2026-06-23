import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

export default function ProfilePage() {
  return (
    <>
      <Header />

      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <PageTitle
            title="Profile"
            description="自己紹介、学習中の技術、興味のある分野についてまとめています。"
          />
        </Reveal>

        <section className="space-y-10 pb-16">
          <Reveal delay={120}>
            <div className="rounded-2xl border border-stone-100/10 bg-stone-900/45 p-6 shadow-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-stone-100">
                About me
              </h2>

              <p className="mt-4 leading-8 text-stone-300/85">
                {profile.description}
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="rounded-2xl border border-stone-100/10 bg-stone-900/45 p-6 shadow-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-stone-100">Skills</h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-amber-100/15 bg-amber-100/10 px-4 py-2 text-sm font-medium text-amber-100/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}