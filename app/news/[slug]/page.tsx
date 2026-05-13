import { getAllPosts, getPost, getAdjacentPosts, slugifyCategory } from "@/lib/posts";
import FilterBar from "@/components/FilterBar";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post?.title ?? "Articolo" };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const { prev, next } = getAdjacentPosts(slug);

  const dateStr = post.date
    ? new Date(post.date).toLocaleDateString("it-IT", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <FilterBar />
      {post.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}
      <header className="mb-8">
        {post.categories && post.categories.length > 0 && (
          <div className="flex gap-2 mb-3">
            {post.categories.map((cat) => (
              <Link
                key={cat}
                href={`/tags/${slugifyCategory(cat)}`}
                className="text-xs bg-[#385D80]/10 text-[#2d4e6e] px-2 py-0.5 rounded-full hover:bg-[#385D80]/20"
              >
                {cat}
              </Link>
            ))}
          </div>
        )}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
          {post.title}
        </h1>
        {dateStr && (
          <p className="text-sm text-gray-400">{dateStr}</p>
        )}
      </header>
      <div
        className="prose prose-lg prose-blue max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <nav className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-2 gap-4">
        <div>
          {prev && (
            <Link href={`/news/${prev.slug}`} className="group flex flex-col gap-1 text-sm text-gray-500 hover:text-[#385D80]">
              <span className="text-xs uppercase tracking-wide">← Precedente</span>
              <span className="font-medium text-gray-800 group-hover:text-[#385D80] line-clamp-2">{prev.title}</span>
            </Link>
          )}
        </div>
        <div className="text-right">
          {next && (
            <Link href={`/news/${next.slug}`} className="group flex flex-col gap-1 text-sm text-gray-500 hover:text-[#385D80]">
              <span className="text-xs uppercase tracking-wide">Successivo →</span>
              <span className="font-medium text-gray-800 group-hover:text-[#385D80] line-clamp-2">{next.title}</span>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
