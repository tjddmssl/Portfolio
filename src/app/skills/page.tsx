import Hello from "@/components/Hello";
import React from "react";

const LI_CLASS = "text-lg text-pink-500";
const HEADER_CLASS = "text-xl font-bold";
export default function AboutPage() {
  return (
    <>
      <Hello />
      <section className="bg-gray-100 shadow-lg p-8 m-8 ">
        <h1 className="text-3xl font-bold text-gray-800 my-3 text-center">
          Skills
        </h1>
        <h2 className={HEADER_CLASS}>[ 프로그래밍 언어 ]</h2>
        <ul className="p-1 text-gray-800">
          <li>
            <strong className={LI_CLASS}>JavaScript</strong> : 최신 ES6 문법
            활용에 익숙합니다.
          </li>
          <li>
            <strong className={LI_CLASS}>TypeScript</strong> : 런타임 에러를
            줄여 생산성을 높일 수 있는 TS의 장점을 알고, Javascript보다 안전한
            코드를 적성할 수 있어 여러개의 프로젝트 진행하였습니다.
          </li>
          <li>
            <strong className={LI_CLASS}>HTML</strong> : 때에 맞는 시맨틱 태그를
            사용하는 것에 능숙합니다.
          </li>
          <li>
            <strong className={LI_CLASS}>CSS</strong> : 반응형 웹을 만들고,
            사용자 친화적 UI를 구현하기 위해 노력하고 있습니다.
          </li>
        </ul>
        <h2 className={HEADER_CLASS}>[ 프레임워크 & 라이브러리 ]</h2>
        <ul className="p-1 text-gray-800">
          <li>
            <strong className={LI_CLASS}>react</strong> : react를 사용하는 것에
            대한 장단점을 이해하고, 컴포넌트 재사용과 React의 성능 최적화에
            관심이 많습니다.
          </li>
          <li>
            <strong className={LI_CLASS}>react-vite</strong> : 더 빠른 렌더링을
            위해 메인 프로젝트에서 활용하였습니다. //이유 더 명확히 고치기
          </li>
          <li>
            <strong className={LI_CLASS}>Next.js</strong> : 13버전을 사용하고,
            강력한 SEO와 웹의 각각의 페이지에 적합한 방식을 채택해 하이브리드
            앱(CSR,SSG,ISR,SSR)를 만든다는 것에 매력을 느껴, 현재 계속 공부 중에
            있고, 활용하여 개인 포트폴리오를 만들었습니다.
          </li>
          <li>
            <strong className={LI_CLASS}>Node.js</strong> : 로그인 서버를 만들어
            클라이언트에 쿠키 값으로 토큰을 보내주는 것을 구현한 경험이
            있습니다. 현재 관심이 생겨 계속 공부 중에 있습니다.
          </li>
          <li>
            <strong className={LI_CLASS}>Flutter</strong> : 웹개발에 관심이 생겨
            현재 공부중에 있고, Flutter를 이루는 위젯에 대해 이해하고 있습니다.
          </li>
          <li>
            <strong className={LI_CLASS}>Redux Toolkit</strong> : 웹개발에
            관심이 생겨 현재 공부중에 있고, Flutter를 이루는 위젯에 대해
            이해하고 있습니다.
          </li>
          <li>
            <strong className={LI_CLASS}>React-Query</strong> : 클라이언트
            데이터와 서버 데이터들을 분리하여 쉽게 관리할수 있고, react hook과
            사용하는 방법이 비슷하여 매력을 느꼈고, 현재도 계속 공부하고
            있습니다. 프로젝트에서 서버의 값을 클라이언트에 가져오거나, 캐싱, 값
            업데이트 등 비동기 통신과 비동기적 상태 관리을 구현하였습니다.
          </li>
          <li>
            <strong className={LI_CLASS}>Styled-component</strong> : 순수 CSS만
            알아도 사용이 가능하다는 점과 네이밍에 대한 고민을 덜 수 있어,
            TodoList 솔로 프로젝트를 리팩토링하는데 사용하였습니다.
          </li>
          <li>
            <strong className={LI_CLASS}>PostCSS</strong> : 웹개발에 관심이 생겨
            현재 공부중에 있고, Flutter를 이루는 위젯에 대해 이해하고 있습니다.
          </li>
          <li>
            <strong className={LI_CLASS}>Tailwind Css</strong> : 사용법을 따로
            익혀야 한다는 점에 아직도 학습 중에 있고, 솔로 프로젝트에서 많이
            사용하였습니다.
          </li>
        </ul>
      </section>
    </>
  );
}
