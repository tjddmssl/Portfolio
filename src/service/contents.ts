import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  path: string;
  featured: boolean;
  role: string;
  stacks: string[];
};

export type PostData = Post & {
  content: string;
};

export async function getAllContents(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "contents.json");
  return readFile(filePath, "utf-8").then<Post[]>(JSON.parse);
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(
    process.cwd(),
    "data",
    "contents",
    `${fileName}.md`
  );
  const posts = await getAllContents();
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw new Error(`${fileName}에 해당하는 내용을 찾을 수 없습니다.`);

  const content = await readFile(filePath, "utf-8");

  return { ...post, content };
}
