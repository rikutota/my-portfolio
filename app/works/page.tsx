import { PageTitle } from "@/components/PageTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { myProjects, participatedProjects } from "@/data/works";

export default function WorksPage() {
  return (
    <div>
      <PageTitle
        title="Works"
        description="自分で作成したプロジェクトと、参加したプロジェクトを掲載しています。"
      />

      <section className="space-y-14 pb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-950">My Projects</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {myProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-950">
            Projects Participated
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {participatedProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}