import Main from "@/components/Main";
import { Post } from "./types/Post";

export default async function AllPostsPage({
  searchParams,
}: {
  searchParams: { page: string | undefined }
}) {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  return (
    <div>
      <Main posts={posts.slice(10 * (currentPage - 1), 10 * currentPage)} total={posts.length} />
    </div>
  );
}
