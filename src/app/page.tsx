import FeaturedPosts from "@/components/FeaturedPosts";
import Hello from "@/components/Hello";

export default function Home() {
  return (
    <>
      <Hello />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
    </>
  );
}
