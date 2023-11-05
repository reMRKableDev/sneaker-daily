import Link from "next/link";
import Emoji from "./Emoji";

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <p>
        Made with <Emoji symbol="❤️" label="love" /> by{" "}
        <Link
          href="https://remrkabledev.com"
          aria-label="Visit website of developer who made Sneaker Daily"
        >
          reMRKable Dev
        </Link>
      </p>
    </footer>
  );
};

export default SiteFooter;
