import Head from "next/head";
import SplashArrows from "@/splash-arrows";

import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Home({ poppins, syne }) {
  return (
    <div id="home-page-container" className={poppins.className}>
      <Head>
        <title>BigChadGuys | Home</title>
      </Head>
      <h1 className="credit-text">created by joe</h1>
      <div className="social-text">
        <FaInstagram />
        <FaTiktok />
        <FaYoutube />
      </div>
      <div className="splash-text-container">
        <h1 className="splash-text thin">Welcome to</h1>
        <h1 className={`splash-text blue + ${syne.className}`}>BIGCHADGUYS</h1>
      </div>
      <SplashArrows poppins={poppins} />
    </div>
  );
}
