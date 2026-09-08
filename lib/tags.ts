import { getAllPosts } from "@/lib/posts";
import { getAllPressReleases } from "@/lib/pressreleases";
import { slugifyCategory } from "@/lib/posts";
import type { PostMeta } from "@/lib/posts";

export type TaggedItem = PostMeta & { kind: "post" | "pressrelease" };

export function getAllTaggedItems(): TaggedItem[] {
  const posts = getAllPosts().map((p) => ({ ...p, kind: "post" as const }));
  const releases = getAllPressReleases().map((p) => ({ ...p, kind: "pressrelease" as const }));
  return [...posts, ...releases].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSharedTags(): { label: string; slug: string }[] {
  const items = getAllTaggedItems();
  const map = new Map<string, string>(); // slug → label
  items.forEach((item) =>
    item.tags?.forEach((t) => {
      const slug = slugifyCategory(t);
      if (!map.has(slug)) map.set(slug, t);
    })
  );
  return Array.from(map.entries())
    .map(([slug, label]) => ({ slug, label }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export function getItemsByTag(tagSlug: string): TaggedItem[] {
  return getAllTaggedItems().filter((item) => item.tags?.some((t) => slugifyCategory(t) === tagSlug));
}

export function getSharedTagLabel(tagSlug: string): string {
  const found = getAllSharedTags().find((t) => t.slug === tagSlug);
  return found?.label ?? tagSlug;
}
