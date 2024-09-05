import Head from "next/head";

export default function About({ poppins, syne }) {
  return (
    <div className={`about-page-container ${poppins.className}`}>
      <Head>
        <title>BigChadGuys | About</title>
        <meta
          name="description"
          content="Learn about Joe, a fullstack software engineer turned Minecraft modpack developer and aspiring pixel artist. Discover his journey from Roblox to BigChadGuys Plus."
        />
      </Head>
      <h1 className={`page-title ${syne.className}`}>ABOUT</h1>
      <section className="about-content">
        <p className="about-text">
          Hey there! I’m Joe, a 23-year-old fullstack software engineer who’s
          transitioned into Minecraft modpack development. My coding journey
          began at around 12 when I discovered Roblox. I was instantly
          captivated by the idea of creating something and sharing it with
          others.
        </p>
        <p className="about-text">
          Growing up watching YouTube, I always aspired to be like the creators
          I admired. This led me to explore video creation and live streaming
          during my teenage years. With a foundation in Java development and
          skills from my YouTube days, I started making TikTok videos to promote
          BigChadGuys Plus.
        </p>
        <p className="about-text">
          What began as a project for my partner and friends quickly evolved
          into a full-time passion. Initially, I had no idea that modpacks were
          even a thing, so I was overly confident about the product I was
          promoting. Immersing myself in a community I was unfamiliar with, I
          soon realized my project wasn’t quite up to par.
        </p>
        <p className="about-text">
          After a brief hiatus, I returned with a revamped version I could truly
          be proud of. Following extensive custom content creation, countless
          hours of testing, answering questions, and bug fixing, I published the
          new BigChadGuys Plus. And that is probably what I’m focused on right
          now.
        </p>
      </section>
    </div>
  );
}
