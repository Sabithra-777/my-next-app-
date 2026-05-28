import Link from "next/link";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>My Portfolio</h1>

      <nav>
        <ul>
          <li>
            <Link href="/portfolio">
              Home
            </Link>
          </li>

          <li>
            <Link href="/portfolio/about">
              About
            </Link>
          </li>

          <li>
            <Link href="/portfolio/skills">
              Skills
            </Link>
          </li>

          <li>
            <Link href="/portfolio/projects">
              Projects
            </Link>
          </li>

          <li>
            <Link href="/portfolio/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <hr />

      {children}
    </div>
  );
}