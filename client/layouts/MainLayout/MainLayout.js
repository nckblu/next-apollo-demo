import Header from "../../components/Header";

export const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <Header />
      <main className="MainLayout__main">{children}</main>
    </div>
  );
};

export default MainLayout;
