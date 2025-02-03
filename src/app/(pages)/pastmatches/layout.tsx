import PageTitle from "@/src/components/PageTitle";

type LayoutProps = {
  children: React.ReactNode;
};

const PastMatchesLayout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-gray-200">
      <PageTitle title="Past matches" />
      {children}
    </div>
  );
};

export default PastMatchesLayout;
