import Link from "next/link";

const SiteHeader = () => {
  return (
    <header className="site-header">
      <Link href="/" legacyBehavior>
        <span className="site-header-title-container">
          <h1 className="site-header-title">
            <span>Sneaker</span>
            <span>Daily</span>
          </h1>
          <p className="site-header-subtitle">Freshness for your Sole</p>
        </span>
      </Link>
    </header>
  );
};

export default SiteHeader;
