import Head from "next/head";
import SplashArrows from "@/components/splash-arrows";
import { FaInstagram, FaTiktok, FaYoutube, FaDiscord } from "react-icons/fa";

export default function Home({ poppins, syne }) {
  return (
    <div id="home-page-container" className={poppins.className}>
      <Head>
        <title>BigChadGuys | Home</title>
      </Head>
      <h1 className="credit-text">made by joe</h1>
      <div className="social-text">
        <FaInstagram aria-label="Instagram" />
        <FaTiktok aria-label="TikTok" />
        <FaYoutube aria-label="YouTube" />
        <FaDiscord aria-label="Discord" />
      </div>
      <div className="splash-text-container">
        <h1 className="splash-text thin">Welcome to</h1>
        <h1 className={`splash-text white ${syne.className}`}>BIGCHADGUYS</h1>
      </div>
      <SplashArrows poppins={poppins} />
    </div>
  );
}
