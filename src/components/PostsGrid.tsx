import { Post } from "@/service/contents";
import React from "react";
import Card from "./Card";

type Props = { contents: Post[] };
//구조분해할당
export default function PostsGrid({ contents }: Props) {
  return (
    <ul className="grid gap-2 md:grid-cols-1 lg:grid-cols-2 grid-cols-3 ">
      {contents.map((content) => (
        <li key={content.path}>
          <Card content={content} />
        </li>
      ))}
    </ul>
  );
}
