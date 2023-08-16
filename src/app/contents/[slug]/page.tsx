import MarkdownViewer from "@/components/MarkdownViewer";
import { getPostData } from "@/service/contents";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ContentsPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  return (
    <>
      <div>{post.title}</div>
      <MarkdownViewer content={post.content} />
    </>
  );
}
