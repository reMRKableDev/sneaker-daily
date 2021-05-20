import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SiteHeader />
      <main className="page-content">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default Layout;
