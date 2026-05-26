import { getPostsByType } from "@/lib/markdown";
import { WritingExplorer } from "./WritingExplorer";

// Ensure standard pre-rendering
export const dynamic = "error";

export default async function WritingPage() {
  const posts = getPostsByType("writing");

  return <WritingExplorer initialPosts={posts} />;
}
