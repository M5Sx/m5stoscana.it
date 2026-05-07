import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  const posts = getAllPosts();
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#385D80] pb-2">
        News e Comunicati
      </h1>
      {posts.length === 0 ? (
        <p className="text-gray-500">Nessun articolo disponibile.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
