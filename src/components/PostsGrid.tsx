import { Post } from "@/service/contents";
import React from "react";

type Props = { contents: Post[] };
//구조분해할당
export default function PostsGrid({ contents }: Props) {
  return (
    <ul>
      {contents.map((content) => (
        <li key={content.path}>{content.title}</li>
      ))}
    </ul>
  );
}
