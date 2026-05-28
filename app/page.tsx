import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello Sabithra 🚀</h1>

      <ul>
        <li>
          <Link href="/todo">Todo App</Link>
        </li>
      <br></br>
        <li>
          <Link href="/portfolio">
            Portfolio Site
          </Link>
        </li>
      <br></br>
        <li>
          <Link href="/blog">Blog App</Link>
        </li>
      </ul>
    </div>
  );
}