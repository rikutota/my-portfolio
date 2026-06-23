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
  const hasLinks = githubUrl || demoUrl;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-stone-100/10 bg-stone-900/45 p-6 shadow-2xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-amber-100/25 hover:bg-stone-900/60">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-stone-100 transition group-hover:text-amber-50">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-stone-300/80">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-amber-100/15 bg-amber-100/10 px-3 py-1 text-xs font-medium text-amber-100/75"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {hasLinks && (
        <div className="mt-6 flex gap-4 border-t border-stone-100/10 pt-5 text-sm font-medium">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-stone-200/75 transition hover:text-amber-100 hover:underline"
            >
              GitHub
            </a>
          )}

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-stone-200/75 transition hover:text-amber-100 hover:underline"
            >
              Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}