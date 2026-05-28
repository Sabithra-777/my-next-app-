const blogs = [
  {
    id: 1,
    title: "Next.js Basics",
    content:
      "Next.js is a React framework used for building modern web applications.",
  },

  {
    id: 2,
    title: "Dynamic Routing",
    content:
      "Dynamic routes allow pages to be generated based on URL parameters.",
  },

  {
    id: 3,
    title: "Layouts in Next.js",
    content:
      "Layouts help share UI between pages in Next.js.",
  },
];

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const blog = blogs.find(
    (b) => b.id === Number(id)
  );

  return (
    <div>
      <h1>{blog?.title}</h1>

      <p>{blog?.content}</p>
    </div>
  );
}