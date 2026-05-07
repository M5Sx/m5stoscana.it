import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { slugifyCategory } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  const dateStr = post.date
    ? new Date(post.date).toLocaleDateString("it-IT", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <article className="relative bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
      <Link href={`/news/${post.slug}`} className="absolute inset-0 z-0" aria-label={post.title} />
      {post.image && (
        <div className="h-48 overflow-hidden bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
        </div>
      )}
      <div className="p-5">
        {post.categories && post.categories.length > 0 && (
          <div className="relative z-10 flex gap-2 mb-2 flex-wrap">
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
        <h2 className="text-lg font-bold text-gray-900 mb-1 leading-snug">
          {post.title}
        </h2>
        {dateStr && (
          <p className="text-xs text-gray-400 mb-2">{dateStr}</p>
        )}
        {post.excerpt && (
          <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
        )}
      </div>
    </article>
  );
}
