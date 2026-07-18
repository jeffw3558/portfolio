interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="mb-12 sm:mb-14">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-100 sm:text-4xl">
        {title}
      </h1>
      <div className="mt-5 h-px w-12 bg-accent" />
    </header>
  );
}
