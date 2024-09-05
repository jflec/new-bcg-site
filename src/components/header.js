import Link from "next/link";

export default function Header({ poppins, syne }) {
  return (
    <header className={poppins.className}>
      <nav>
        <ul>
          <li>
            <Link href="/" aria-label="home">
              home
            </Link>
          </li>
          <li>
            <Link href="/about" aria-label="about">
              about
            </Link>
          </li>
          <li>
            <Link href="/projects" aria-label="projects">
              projects
            </Link>
          </li>
          <li>
            <Link href="/music" aria-label="music">
              music
            </Link>
          </li>
          <li>
            <Link href="/community" aria-label="community">
              community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
