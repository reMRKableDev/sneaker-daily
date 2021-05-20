import Link from "next/link";

import Emoji from "./Emoji";

const SiteFooter = () => {
  return (
    <footer>
      <p>
        Made with <Emoji symbol="❤️" label="love" /> by{" "}
        <Link href="https://remrkabledev.com">
          <a>reMRKable Dev </a>
        </Link>
      </p>
    </footer>
  );
};

export default SiteFooter;
