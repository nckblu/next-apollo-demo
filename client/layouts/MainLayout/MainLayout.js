import Header from "../../components/Header";

export const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <Header
        heading="super cool guys"
        strapline="all the super cool guys and gals"
      />
      <main className="MainLayout__main">{children}</main>
    </div>
  );
};

export default MainLayout;
