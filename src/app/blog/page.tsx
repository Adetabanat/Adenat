import { posts } from "../../data/posts";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-wide text-teal-300">
            Insights & Blog
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold">
            Ideas, Insights, and Practical Business Technology Guides
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Read practical insights on software development, business
            automation, digital transformation, project management, and
            enterprise systems.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-teal-600">
                  {post.category}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-slate-900">
                  {post.title}
                </h2>

                <p className="mt-4 text-slate-600">{post.description}</p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-slate-500">{post.date}</span>

                  <button className="font-semibold text-teal-600 hover:text-teal-700">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}