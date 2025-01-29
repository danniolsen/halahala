import Navigation from "@/src/components/Navigation";
type LayoutProps = {
  children: React.ReactNode;
};
const PagesLayout = async ({ children }: LayoutProps) => {
  return (
    <main>
      <div className="pb-24">{children}</div>

      <Navigation />
    </main>
  );
};

export default PagesLayout;
