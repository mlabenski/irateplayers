import '@styles/globals.css'
import Navbar from '../components/Navbar';
import '../styles.css';
function Application({ Component, pageProps }) {
  return (
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
  );
}

export default Application
