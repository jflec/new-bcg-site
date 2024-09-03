import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/" aria-label="Home">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" aria-label="About">
              About
            </Link>
          </li>
          <li>
            <Link href="/modpacks" aria-label="Modpacks">
              Modpacks
            </Link>
          </li>
          <li>
            <Link href="/music" aria-label="Music">
              Music
            </Link>
          </li>
          <li>
            <Link href="/social" aria-label="Social">
              Social
            </Link>
          </li>
          <li>
            <Link href="/find-a-server" aria-label="Find a Server">
              Find a Server
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
