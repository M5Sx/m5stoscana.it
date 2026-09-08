import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { slugifyCategory } from "@/lib/posts";

export default function PressReleaseRow({ post }: { post: PostMeta }) {
  const dateStr = post.date
    ? new Date(post.date).toLocaleDateString("it-IT", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <article className="relative py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors px-2 -mx-2 rounded">
      <Link href={`/comunicati-stampa/${post.slug}`} className="absolute inset-0 z-0" aria-label={post.title} />

      {dateStr && (
        <time className="block text-sm font-semibold text-gray-700" dateTime={post.date}>
          {dateStr}
        </time>
      )}
      <h2 className="text-base font-semibold text-gray-900 leading-snug mt-1">
        {post.title}
      </h2>
      {post.tags && post.tags.length > 0 && (
        <div className="relative z-10 flex gap-2 mt-2 flex-wrap">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/comunicati-stampa/tag/${slugifyCategory(tag)}`}
              className="text-xs bg-[#385D80]/10 text-[#2d4e6e] px-2 py-0.5 rounded-full hover:bg-[#385D80]/20"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
