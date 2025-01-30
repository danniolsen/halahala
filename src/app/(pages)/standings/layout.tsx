import PageTitle from "@/src/components/PageTitle";

type LayoutProps = {
  children: React.ReactNode;
};

const StandingsLayout = async ({ children }: LayoutProps) => {
  return (
    <div>
      <PageTitle title="La Liga standings" />
      {children}
    </div>
  );
};

export default StandingsLayout;
