type PageTitleProps = {
  title: string;
  description: string;
};

export function PageTitle({ title, description }: PageTitleProps) {
  return (
    <div className="py-16">
      <p className="text-sm font-medium text-blue-600">Portfolio</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl leading-8 text-gray-600">{description}</p>
    </div>
  );
}