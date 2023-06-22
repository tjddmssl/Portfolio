import React from "react";
import PostsGrid from "./PostsGrid";
import { getAllContents } from "@/service/contents";

export default async function FeaturedPosts() {
  //데이터 불러옴
  const contents = await getAllContents();
  return (
    <section>
      <h2>My projects</h2>
      {/* 데이터 보여줌 */}
      <PostsGrid contents={contents} />
    </section>
  );
}
