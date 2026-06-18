import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="border-t border-gray-200 py-16">
      <h2 className="text-2xl font-bold text-gray-950">Projects</h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-gray-200 p-6 transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-950">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-5 flex gap-4 text-sm font-medium">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-950 hover:underline"
                >
                  GitHub
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-950 hover:underline"
                >
                  Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}