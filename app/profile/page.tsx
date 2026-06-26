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
            description="自己紹介、経歴、学習中の技術、チーム開発経験についてまとめています。"
          />
        </Reveal>

        <section className="space-y-10 pb-16">
          <Reveal delay={120}>
            <div className="rounded-2xl border border-stone-100/10 bg-stone-900/45 p-6 shadow-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-stone-100">
                About me
              </h2>

              <div className="mt-4 space-y-3 leading-8 text-stone-300/85">
                <p>{profile.description}</p>
                <p>
                  {profile.birthplace}。{profile.birthday}。
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="rounded-2xl border border-stone-100/10 bg-stone-900/45 p-6 shadow-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-stone-100">
                Education
              </h2>

              <div className="mt-6 space-y-5">
                {profile.education.map((item) => (
                  <div
                    key={item.text}
                    className="border-l border-amber-100/20 pl-4"
                  >
                    <p className="text-sm font-medium text-amber-100/70">
                      {item.year}
                    </p>
                    <p className="mt-1 text-stone-300/85">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="rounded-2xl border border-stone-100/10 bg-stone-900/45 p-6 shadow-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-stone-100">
                Hobbies
              </h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {profile.hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="rounded-full border border-amber-100/15 bg-amber-100/10 px-4 py-2 text-sm font-medium text-amber-100/80"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="rounded-2xl border border-stone-100/10 bg-stone-900/45 p-6 shadow-2xl backdrop-blur-sm">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-100/50">
                Team Development
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-stone-100">
                {profile.teamExperience.teamName}
              </h2>

              <p className="mt-4 leading-8 text-stone-300/85">
                {profile.teamExperience.description}
              </p>

              {profile.teamExperience.websiteUrl && (
                <a
                  href={profile.teamExperience.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-full border border-amber-100/20 bg-amber-100/10 px-5 py-3 text-sm font-semibold text-amber-100/85 transition hover:bg-amber-100/20 hover:text-amber-50"
                >
                  Team Website
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={360}>
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