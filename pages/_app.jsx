import "../styles/globals.scss";
import Layout from "../components/Layout";
import "swiper/scss";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
