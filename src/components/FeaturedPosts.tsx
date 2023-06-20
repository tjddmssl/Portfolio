import React from "react";
import PostsGrid from "./PostsGrid";

export default function FeaturedPosts() {
  //1. 모든 포스트 데이터들을 읽어와야함
  //2. 모든 포스트 데이터들을 보여줌
  return (
    <section>
      <h2>My projects</h2>
      <PostsGrid />
    </section>
  );
}
