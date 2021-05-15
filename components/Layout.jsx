import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Sneaker</span>
              <span>Daily</span>
            </h1>
            <h2>Some freshness for your Sole</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2021 Sneaker Daily!</p>
      </footer>
    </div>
  );
};

export default Layout;
