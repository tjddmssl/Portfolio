import React from "react";
import { Post } from "@/service/contents";
import Link from "next/link";
import Image from "next/image";

type Props = { content: Post };
export default function Card({
  content: { title, role, date, stacks, path, description },
}: Props) {
  return <Link href={`/contents/${path}`}></Link>;
}
