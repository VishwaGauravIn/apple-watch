import "../styles/globals.css";
import "../components/header/header.css";
import "../components/clock/clock.css"
import "../components/strap/strap.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
