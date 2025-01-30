type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="p-4 bg-background/5 backdrop-blur-lg supports-[backdrop-filter]:bg-background/5">
        <h2 className="text-3xl font-bold break-words break-all text-slate-700">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default PageTitle;
