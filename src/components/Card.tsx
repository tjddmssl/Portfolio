import { Post } from "@/service/contents";
import Link from "next/link";
import Image from "next/image";

type Props = { content: Post };
export default function Card({
  content: { title, role, date, stacks, path, description },
}: Props) {
  return (
    <article className="shadow-lg bg-pink-100 rounded-2xl m-2 pt-7">
      <Link href={`/contents/${path}`}>
        <Image
          className=" h-80 rounded-lg items-center m-auto "
          src={`/images/contents/${path}.png`}
          alt={title}
          width={450}
          height={600}
        />
        <div>
          <span>{role}</span>
          <time>{date.toString()}</time>
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
      </Link>
    </article>
  );
}
