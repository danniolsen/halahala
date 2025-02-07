import PageTitle from "@/src/components/PageTitle";

type LayoutProps = {
  children: React.ReactNode;
};

const InfoLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <PageTitle title="Info" />
      {children}
    </div>
  );
};

export default InfoLayout;
