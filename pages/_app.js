import "../styles/globals.css";
import "../components/header/header.css";
import "../components/clock/clock.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
