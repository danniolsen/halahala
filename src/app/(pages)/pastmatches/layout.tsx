import PageTitle from "@/src/components/PageTitle";

type LayoutProps = {
  children: React.ReactNode;
};

const PastMatchesLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <PageTitle title="Past matches" />
      {children}
    </div>
  );
};

export default PastMatchesLayout;
