import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

export function slugifyCategory(cat: string): string {
  return cat
    .toLowerCase()
    .replace(/[àáâãäå]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôõö]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const postsDir = path.join(process.cwd(), "content/posts");
const pagesDir = path.join(process.cwd(), "content/pages");

export interface PostMeta {
  title: string;
  date: string;
  slug: string;
  excerpt?: string;
  categories?: string[];
  image?: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();
  return slugs
    .map((slug) => {
      const fullPath = path.join(postsDir, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        title: data.title ?? slug,
        date: data.date ?? "",
        slug: data.slug || slug,
        excerpt: data.excerpt ?? "",
        categories: data.categories ?? [],
        image: data.image ?? null,
      } as PostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAdjacentPosts(slug: string): { prev: PostMeta | null; next: PostMeta | null } {
  const posts = getAllPosts(); // sorted newest first
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: posts[index + 1] ?? null, // older
    next: posts[index - 1] ?? null, // newer
  };
}

export function getAllCategories(): { label: string; slug: string }[] {
  const posts = getAllPosts();
  const map = new Map<string, string>(); // slug → label
  posts.forEach((p) =>
    p.categories?.forEach((c) => {
      const slug = slugifyCategory(c);
      if (!map.has(slug)) map.set(slug, c);
    })
  );
  return Array.from(map.entries())
    .map(([slug, label]) => ({ slug, label }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export function getPostsByCategory(categorySlug: string): PostMeta[] {
  return getAllPosts()
    .filter((p) => p.categories?.some((c) => slugifyCategory(c) === categorySlug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getCategoryLabel(categorySlug: string): string {
  const found = getAllCategories().find((c) => c.slug === categorySlug);
  return found?.label ?? categorySlug;
}

export async function getPost(slug: string): Promise<Post | null> {
  // First try filename match, then fall back to scanning frontmatter slugs
  const directPath = path.join(postsDir, `${slug}.md`);
  let filePath = fs.existsSync(directPath) ? directPath : null;

  if (!filePath) {
    outer: for (const dir of [postsDir].filter(fs.existsSync)) {
      const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
      for (const file of files) {
        const fp = path.join(dir, file);
        const { data } = matter(fs.readFileSync(fp, "utf8"));
        if ((data.slug || file.replace(/\.md$/, "")) === slug) {
          filePath = fp;
          break outer;
        }
      }
    }
  }

  if (!filePath) return null;
  const fileContents = fs.readFileSync(filePath, "utf8");
  const filename = path.basename(filePath, ".md");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(remarkGfm).use(html).process(content);
  return {
    title: data.title ?? slug,
    date: data.date ?? "",
    slug: data.slug || filename,
    excerpt: data.excerpt ?? "",
    categories: data.categories ?? [],
    image: data.image ?? null,
    contentHtml: processed.toString(),
  };
}

export async function getPage(slug: string): Promise<Post | null> {
  const fullPath = path.join(pagesDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(remarkGfm).use(html).process(content);
  return {
    title: data.title ?? slug,
    date: data.date ?? "",
    slug: data.slug || slug,
    excerpt: data.excerpt ?? "",
    categories: data.categories ?? [],
    image: data.image ?? null,
    contentHtml: processed.toString(),
  };
}
