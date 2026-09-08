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
    <article className="relative flex items-start gap-4 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors px-2 -mx-2 rounded">
      <Link href={`/comunicati-stampa/${post.slug}`} className="absolute inset-0 z-0" aria-label={post.title} />

      <div className="shrink-0 w-10 h-10 rounded-full bg-[#385D80]/10 flex items-center justify-center text-[#385D80]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
          <path d="M9 9h1" />
        </svg>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          {dateStr && (
            <time className="text-xs text-gray-400 shrink-0" dateTime={post.date}>
              {dateStr}
              {post.time && ` · ${post.time}`}
            </time>
          )}
          <h2 className="text-base font-semibold text-gray-900 leading-snug">
            {post.title}
          </h2>
        </div>
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
      </div>
    </article>
  );
}
