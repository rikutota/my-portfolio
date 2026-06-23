import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { myProjects, participatedProjects } from "@/data/works";

export default function WorksPage() {
  return (
    <>
      <Header />

      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <PageTitle
            title="Works"
            description="自分で作成したプロジェクトと、参加したプロジェクトを掲載しています。"
          />
        </Reveal>

        <section className="space-y-16 pb-20">
          <Reveal delay={120}>
            <div>
              <div className="mb-6 border-b border-stone-100/10 pb-4">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-100/50">
                  Personal
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-stone-100">
                  My Projects
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {myProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div>
              <div className="mb-6 border-b border-stone-100/10 pb-4">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-100/50">
                  Team
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-stone-100">
                  Projects Participated
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {participatedProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}