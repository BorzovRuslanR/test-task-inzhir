import { Post } from "@/app/types/Post";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

type MainProps = {
  posts: Post[];
  total: number;
};

const Main: FC<MainProps> = function ({ posts, total }) {
  return (
    <div>
      <h1 className="text-3xl font-bold flex justify-center m-4">
        Главная страница
      </h1>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-4 gap-4">
          {posts.map((post) => (
            <Card key={post.id} className="w-[350px] flex flex-col justify-between cursor-pointer transition duration-300 ease-in-out hover:bg-slate-300 hover:translate-y-1">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <Link href={`/posts/${post.id}`}>
                    <span className="flex items-center justify-center rounded h-10 bg-cyan-500 text-white cursor-pointer transition duration-300 ease-in-out hover:bg-cyan-700 hover:translate-y-1 mt-auto">
                    Подробнее
                    </span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex justify-center p-4">
          {Array.from({ length: Math.ceil(total / 10) }, (_, i) => i + 1).map(
            (page) => (
              <Link
                href={`?page=${page}`}
                key={page}
                className="h-10 w-10 m-2 p-2 bg-slate-500 text-white rounded flex justify-center duration-300 ease-in-out transform hover:bg-slate-600 hover:scale-105"
              >
                {page}
              </Link>
            )
          )}
        </div>
    </div>
  );
};

// export async function getStaticProps() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();
//   const postData: Post[] = data.map((post: any) => ({
//     userId: post.userId,
//     id: post.id,
//     title: post.title,
//     body: post.body
//   }));

//   return {
//     props: {
//       posts: postData
//     }
//   };
// }

export default Main;
