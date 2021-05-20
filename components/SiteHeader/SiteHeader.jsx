import Link from "next/link";

const SiteHeader = () => {
  return (
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
  );
};

export default SiteHeader;
