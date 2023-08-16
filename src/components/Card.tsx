import { Post } from "@/service/contents";
import Link from "next/link";
import Image from "next/image";
import { AiTwotoneCalendar } from "react-icons/ai";

type Props = { content: Post };
export default function Card({
  content: { title, role, date, stacks, path, description },
}: Props) {
  return (
    <article className="shadow-lg bg-pink-100 rounded-2xl m-2 pt-7">
      <Link href={`/contents/${path}`}>
        <Image
          className="h-80 rounded-2xl items-center m-auto p-1.5"
          src={`/images/contents/${path}.png`}
          alt={title}
          width={450}
          height={600}
        />
        <div className="flex flex-col  p-4">
          <div className="flex justify-between lg:flex-col text-center items-center ">
            <span className="text-sm rounded-lg bg-pink-200 p-2 font-semibold lg:mb-2">
              {role}
            </span>
            <div className="flex items-center  text-gray-700 mb-1 ml-1 ">
              <AiTwotoneCalendar />
              <time className="mx-1">{date.toString()}</time>
            </div>
          </div>
          <h3 className="text-2xl font-bold my-3 items-center mx-auto ">
            {title}
          </h3>
          <span className=" break-keep text-center mb-2">{description}</span>
          <section className=" break-keep items-center justify-center ">
            {stacks &&
              stacks.map((el, index) => (
                <span
                  key={index}
                  className="text-xs m-1 bg-gray-300 rounded-md  text-red-600 p-0.5 break-all"
                >
                  {`${el}`}
                </span>
              ))}
          </section>
        </div>
      </Link>
    </article>
  );
}
