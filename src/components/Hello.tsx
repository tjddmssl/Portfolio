import Image from "next/image";
import React from "react";
import profileImg from "../../public/images/profile.png";
import { AiFillGithub } from "react-icons/ai";
import { SiVelog } from "react-icons/si";
import Link from "next/link";

export default function Hello() {
  return (
    <section className="text-center my-6">
      <Image
        className="mx-auto my-3"
        alt="My avator"
        src={profileImg}
        width={250}
        height={250}
        priority
      />
      <h2 className="text-xl font-semibold">Frontend Engineer 이성은입니다</h2>
      <p>
        사용자 편의성과 접근성에 대해 생각하고, 함께 일하는 개발 환경을 위해
        항상 노력합니다.
      </p>
      <ul className="flex gap-4 text-3xl justify-center my-1">
        <Link
          href={"https://github.com/tjddmssl"}
          className="hover:text-pink-300"
        >
          <AiFillGithub />
        </Link>
        <Link
          href={"https://velog.io/@tjddmssl"}
          className="hover:text-pink-300"
        >
          <SiVelog />
        </Link>
      </ul>
      <Link href="/contact">
        <button className="bg-pink-400 font-bold rounded-xl py-1 px-4 mt-2 hover:bg-pink-300 text-white">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
