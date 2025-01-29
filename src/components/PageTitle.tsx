type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <div className="p-6 mb-4">
      <h2 className="text-4xl font-bold break-words break-all">{title}</h2>
    </div>
  );
};

export default PageTitle;
