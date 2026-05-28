import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Next.js Basics",
    description:
      "Introduction to Next.js App Router",
  },

  {
    id: 2,
    title: "Dynamic Routing",
    description:
      "Learn how dynamic routes work",
  },

  {
    id: 3,
    title: "Layouts in Next.js",
    description:
      "Understanding shared layouts",
  },
];

export default function BlogHome() {
  return (
    <div>
      <h1>Blog App</h1>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>

          <p>{blog.description}</p>

          <Link href={`/blog/${blog.id}`}>
            Read More
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
}