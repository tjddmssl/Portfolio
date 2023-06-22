import { Post } from "@/service/contents";
import React from "react";
import Card from "./Card";

type Props = { contents: Post[] };
//구조분해할당
export default function PostsGrid({ contents }: Props) {
  return (
    <ul>
      {contents.map((content) => (
        <li key={content.path}>
          <Card content={content} />
        </li>
      ))}
    </ul>
  );
}
