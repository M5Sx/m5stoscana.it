import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import type { PostMeta, Post } from "@/lib/posts";
import { slugifyCategory } from "@/lib/posts";

function toArray(v: unknown): string[] {
  if (Array.isArray(v)) return v;
  if (typeof v === "string" && v.trim()) return [v.trim()];
  return [];
}

const pressDir = path.join(process.cwd(), "content/pressrelease");

export function getAllPressReleaseSlugs(): string[] {
  if (!fs.existsSync(pressDir)) return [];
  return fs
    .readdirSync(pressDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPressReleases(): PostMeta[] {
  const slugs = getAllPressReleaseSlugs();
  return slugs
    .map((slug) => {
      const fullPath = path.join(pressDir, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        title: data.title ?? slug,
        date: data.date ?? "",
        slug: data.slug || slug,
        excerpt: data.excerpt ?? "",
        categories: toArray(data.categories),
        image: data.image ?? null,
        number: data.number ?? undefined,
        senderEmail: data.senderEmail ?? undefined,
        tags: toArray(data.tags),
        time: data.time ?? undefined,
        draft: data.draft ?? false,
      } as PostMeta;
    })
    .filter((post) => !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAdjacentPressReleases(slug: string): { prev: PostMeta | null; next: PostMeta | null } {
  const posts = getAllPressReleases(); // sorted newest first
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: posts[index + 1] ?? null, // older
    next: posts[index - 1] ?? null, // newer
  };
}

export async function getPressRelease(slug: string): Promise<Post | null> {
  const directPath = path.join(pressDir, `${slug}.md`);
  let filePath = fs.existsSync(directPath) ? directPath : null;

  if (!filePath && fs.existsSync(pressDir)) {
    const files = fs.readdirSync(pressDir).filter((f) => f.endsWith(".md"));
    for (const file of files) {
      const fp = path.join(pressDir, file);
      const { data } = matter(fs.readFileSync(fp, "utf8"));
      if ((data.slug || file.replace(/\.md$/, "")) === slug) {
        filePath = fp;
        break;
      }
    }
  }

  if (!filePath) return null;
  const fileContents = fs.readFileSync(filePath, "utf8");
  const filename = path.basename(filePath, ".md");
  const { data, content } = matter(fileContents);
  if (data.draft) return null;
  const processed = await remark().use(remarkGfm).use(html).process(content);
  return {
    title: data.title ?? slug,
    date: data.date ?? "",
    slug: data.slug || filename,
    excerpt: data.excerpt ?? "",
    categories: toArray(data.categories),
    image: data.image ?? null,
    number: data.number ?? undefined,
    senderEmail: data.senderEmail ?? undefined,
    tags: toArray(data.tags),
    time: data.time ?? undefined,
    draft: false,
    contentHtml: processed.toString(),
  };
}

export function getAllPressReleaseTags(): { label: string; slug: string }[] {
  const posts = getAllPressReleases();
  const map = new Map<string, string>(); // slug → label
  posts.forEach((p) =>
    p.tags?.forEach((t) => {
      const slug = slugifyCategory(t);
      if (!map.has(slug)) map.set(slug, t);
    })
  );
  return Array.from(map.entries())
    .map(([slug, label]) => ({ slug, label }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export function getPressReleasesByTag(tagSlug: string): PostMeta[] {
  return getAllPressReleases().filter((p) => p.tags?.some((t) => slugifyCategory(t) === tagSlug));
}

export function getPressReleaseTagLabel(tagSlug: string): string {
  const found = getAllPressReleaseTags().find((t) => t.slug === tagSlug);
  return found?.label ?? tagSlug;
}
