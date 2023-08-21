import Hello from "@/components/Hello";
import React from "react";

export default function AboutPage() {
  return (
    <>
      <Hello />
      <section className="bg-gray-100 shadow-lg p-8 m-8 ">
        <h1 className="text-3xl font-bold text-gray-800 my-3 text-center">
          Skills
        </h1>
        <h2 className="text-xl font-bold">[ 프로그래밍 언어 ]</h2>
        <ul className="p-1 text-gray-800">
          <li>
            <strong className="text-lg">JavaScript</strong> : 최신 ES6 문법
            활용에 익숙합니다.
          </li>
          <li>
            <strong className="text-lg">TypeScript</strong> : 런타임 에러를 줄여
            생산성을 높일 수 있는 TS의 장점을 알고, Javascript보다 안전한 코드를
            적성할 수 있어 여러개의 프로젝트 진행하였습니다.
          </li>
          <li>
            <strong className="text-lg">HTML</strong> : 때에 맞는 시맨틱 태그를
            사용하는 것에 능숙합니다.
          </li>
          <li>
            <strong className="text-lg">CSS</strong> : 반응형 웹을 만들고,
            사용자 친화적 UI를 구현하기 위해 노력하고 있습니다.
          </li>
        </ul>
        <h2 className="text-xl font-bold">[ 프레임워크 & 라이브러리 ]</h2>
        <ul className="p-1 text-gray-800">
          <li>
            <strong className="text-lg">react</strong> : react를 사용하는 것에
            대한 장단점을 이해하고, 컴포넌트 재사용과 React의 성능 최적화에
            관심이 많습니다.
          </li>
          <li>
            <strong className="text-lg">react-vite</strong> : 더 빠른 렌더링을
            위해 메인 프로젝트에서 활용하였습니다. //이유 더 명확히 고치기
          </li>
          <li>
            <strong className="text-lg">CSS</strong> : 반응형 웹을 만들고,
            사용자 친화적 UI를 구현하기 위해 노력하고 있습니다.
          </li>
          <li>
            <strong className="text-lg">CSS</strong> : 반응형 웹을 만들고,
            사용자 친화적 UI를 구현하기 위해 노력하고 있습니다.
          </li>
          <li>
            <strong className="text-lg">CSS</strong> : 반응형 웹을 만들고,
            사용자 친화적 UI를 구현하기 위해 노력하고 있습니다.
          </li>
        </ul>
      </section>
    </>
  );
}
