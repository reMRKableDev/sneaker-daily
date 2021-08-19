import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const Layout = ({ children }) => {
  return (
    <div className="site-layout">
      <SiteHeader />
      <main className="site-main">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default Layout;
