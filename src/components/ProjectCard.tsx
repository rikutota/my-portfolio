type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-lg font-semibold text-gray-950">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-4 text-sm font-medium">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-gray-950 hover:underline"
          >
            GitHub
          </a>
        )}

        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-gray-950 hover:underline"
          >
            Demo
          </a>
        )}
      </div>
    </article>
  );
}