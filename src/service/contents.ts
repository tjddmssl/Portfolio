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

export async function getAllContents(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "contents.json");
  return readFile(filePath, "utf-8").then<Post[]>(JSON.parse);
}
