import "@/styles/reset.css";
import "@/styles/global.css";
import "@/styles/Header.css";
import "@/styles/projects.css";

import { Poppins } from "next/font/google";
import Header from "./Header";

const poppins = Poppins({ weight: "400", style: "normal", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main id="app" className={poppins.className}>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
