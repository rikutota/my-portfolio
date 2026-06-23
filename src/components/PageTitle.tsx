type PageTitleProps = {
  title: string;
  description: string;
};

export function PageTitle({ title, description }: PageTitleProps) {
  return (
    <div className="py-16">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-200/70">
        Portfolio
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-100 sm:text-5xl">
        {title}
      </h1>

      <p className="mt-5 max-w-2xl leading-8 text-stone-300/80">
        {description}
      </p>
    </div>
  );
}