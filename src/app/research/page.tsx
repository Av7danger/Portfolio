import { getPostsByType } from "@/lib/markdown";
import { ResearchExplorer } from "./ResearchExplorer";

// Forces compilation to run static loading
export const dynamic = "error";

export default async function ResearchPage() {
  const posts = getPostsByType("research");

  return <ResearchExplorer initialPosts={posts} />;
}
