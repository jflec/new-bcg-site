import "@/styles/reset.css";
import "@/styles/global.css";

import "@/styles/index.css";
import "@/styles/about.css";
import "@/styles/projects.css";
import "@/styles/music.css";
import "@/styles/community.css";

import "@/styles/header.css";

import { Poppins, Syne } from "next/font/google";

import Header from "../components/header";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const syne = Syne({
  weight: ["400", "500", "700"],
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
