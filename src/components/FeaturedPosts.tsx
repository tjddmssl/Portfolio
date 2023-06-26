import React from "react";
import PostsGrid from "./PostsGrid";
import { getAllContents } from "@/service/contents";

export default async function FeaturedPosts() {
  //데이터 불러옴
  const contents = await getAllContents();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold ml-7 my-5">My projects</h2>
      <PostsGrid contents={contents} />
    </section>
  );
}
