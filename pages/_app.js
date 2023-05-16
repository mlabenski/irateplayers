import Navbar from '../components/Navbar.jsx';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

function Application({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default Application;