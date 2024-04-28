import { Post } from "@/app/types/Post";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function PostPage({
  params,
}: {
  params: { postId: string };
}) {
  const post: Post | null = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  ).then((res) => {
    if (!res.ok) return null;
    // if (!res.ok) throw new Error("Post not found");
    return res.json();
  });
  if (!post) return notFound();
  return (
    <div className="flex flex-col items-center overflow-hidden">      
      <div className="flex justify-center h-screen w-screen">        
        <div className="flex flex-col gap-6 justify-center">
        <Link href="/"><span className="flex items-center justify-center rounded h-10 bg-green-400 text-white cursor-pointer transition duration-300 ease-in-out hover:bg-green-500 hover:translate-y-1">Вернуться на главную</span></Link>
            <Card key={post.id} className="flex flex-col w-[600px]">
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{post.body}</CardDescription>
            </CardContent>
            </Card>
        </div>
</div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());

  return posts.map((post) => ({
    postId: String(post.id),
  }));
}
