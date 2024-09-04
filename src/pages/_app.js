import "@/styles/reset.css";
import "@/styles/global.css";
import "@/styles/Header.css";

import "@/styles/home.css";
import "@/styles/about.css";
import "@/styles/projects.css";
import "@/styles/music.css";
import "@/styles/find-a-server.css";

import "@/styles/splash-arrows.css";
import "@/styles/splash-tile.css";

import Transition from "@/Transition";

import { Poppins, Syne, Slang } from "next/font/google";
import Header from "./Header";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main id="app">
      <Header poppins={poppins} syne={syne} />
      <Component {...pageProps} poppins={poppins} syne={syne} />
    </main>
  );
}
