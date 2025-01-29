type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default PageTitle;
