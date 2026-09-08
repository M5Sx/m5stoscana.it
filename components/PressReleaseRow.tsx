import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { slugifyCategory } from "@/lib/posts";

function DocumentIcon() {
  return (
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
  );
}

function EventIcon() {
  return (
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
      <rect x="3" y="4.5" width="18" height="16" rx="2" />
      <path d="M3 9.5h18" />
      <path d="M8 2.5v4" />
      <path d="M16 2.5v4" />
      <circle cx="9" cy="14" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="13" cy="14" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="17" cy="14" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function PressReleaseRow({
  post,
  basePath = "/comunicati",
  kindLabel,
}: {
  post: PostMeta;
  basePath?: string;
  kindLabel?: string;
}) {
  const dateStr = post.date
    ? new Date(post.date).toLocaleDateString("it-IT", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  const isEvent = post.tags?.some((t) => t.toLowerCase().startsWith("event")) ?? false;

  return (
    <article className="relative flex items-start gap-4 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors px-2 -mx-2 rounded">
      <Link href={`${basePath}/${post.slug}`} className="absolute inset-0 z-0" aria-label={post.title} />

      <div className="shrink-0 w-10 h-10 rounded-full bg-[#385D80]/10 flex items-center justify-center text-[#385D80]">
        {isEvent ? <EventIcon /> : <DocumentIcon />}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          {dateStr && (
            <time className="block text-sm text-gray-400" dateTime={post.date}>
              {dateStr}
            </time>
          )}
          {kindLabel && (
            <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
              {kindLabel}
            </span>
          )}
        </div>
        <h2 className="text-base font-semibold text-gray-900 leading-snug mt-1">
          {post.title}
        </h2>
        {post.tags && post.tags.length > 0 && (
          <div className="relative z-10 flex gap-2 mt-2 flex-wrap">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tag/${slugifyCategory(tag)}`}
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
