## 🚀 [GitHub](https://github.com/tjddmssl/WELCOME-TO-STACKOVERFLOW) | [회고](https://velog.io/@tjddmssl/%ED%94%84%EB%A6%AC%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8) | [유저플로우](https://www.figma.com/file/Gv5OG5iGtt0npsVdKgnYxG/seb42-pre04-UserFlow?node-id=0-1&t=Fz3z87FAbN2oXWrK-0)

---

### 코드스테이츠 프리 프로젝트 (3FE, 3BE), 프론트엔드 팀원으로 참여

### 기술 스택 : Javascript, Redux Toolkit, Axios, React-Router, Styled-component, GitHub, Figma

### 내가 구현한 것

> 프론트쪽은 https로 배포를 성공했지만, 백엔드쪽은 http로 배포하여 배포환경에서 CORS에러를 해결하지 못해, 결국 배포는 포기한 채로 프로젝트가 끝났습니다.
> 제가 구현한 것을 배포 환경이 없어, 로컬환경에서 따로 `npm start`한 화면과 코드 위주로 설명하였습니다.

- 서버로부터 받은 질문 내용, 답변 내용 등을 **Redux Toolkit**를 통해 전역으로 상태 관리, 사용
- **Axios**를 사용하여 비동기적으로 서버와 통신
  - 질문 작성 페이지의 **CRUD**구현
  - 답변 작성 페이지 **CRUD**구현
- **Styled-components**를 사용하여 화면 구현 **(+반응형)**

  - Header 구현
  - 로그인, 회원가입 페이지 구현
    ![](https://velog.velcdn.com/images/tjddmssl/post/4a8334c0-1bac-4eaa-bbe0-ce69f6462870/image.png)
    ![](https://velog.velcdn.com/images/tjddmssl/post/f1736b99-2b50-4e3a-a9cd-8489258491fd/image.png)
  - Tags 페이지 구현

    - grid 사용
    - 반응형으로 구현
      ![](https://velog.velcdn.com/images/tjddmssl/post/800936cf-c79a-4134-9eb4-537ef3cc9e03/image.png)

    ```jsx
    //나머지 코드 생략
    const TagGridContainer = styled.ul`
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      grid-gap: 20px;
      width: 100%;
      @media screen and (max-width: 1345px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      @media screen and (max-width: 1028px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      @media screen and (max-width: 711px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
    `;
    //나머지 코드 생략
    ```

  - 질문 작성 페이지 구현

    - **Toast UI Editor** 사용

    ![](https://velog.velcdn.com/images/tjddmssl/post/96678745-c291-4856-8ac4-f49117308a22/image.gif)

    ```jsx
    //나머지 코드 생략

    // Toast 에디터
    import { Editor } from "@toast-ui/react-editor";
    import "@toast-ui/editor/dist/toastui-editor.css";

    import { useRef, useState } from "react";

    function Ask() {
      const [problemBody, setProblemBody] = useState("");

      //Dom선택
      const problemRef = useRef();

      // 에디터에 입력된 내용을 MarkDown 형태로 취득
      const onChangeProblem = () => {
        const problemdata = problemRef.current.getInstance().getMarkdown();
        setProblemBody(problemdata);
      };

      return (
        <>
          <Editor
            ref={problemRef} // DOM 선택용 useRef
            placeholder={"please write here"}
            initialValue={" "}
            previewStyle="tap" // 미리보기 스타일 지정
            height="300px" // 에디터 창 높이
            initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
            toolbarItems={[
              // 툴바 옵션 설정
              ["heading", "bold", "italic", "strike"],
              ["hr", "quote"],
              ["ul", "ol", "task", "indent", "outdent"],
              ["table", "image", "link"],
              ["code", "codeblock"],
            ]}
            autofocus={false}
            hideModeSwitch={true}
            onChange={onChangeProblem}
          ></Editor>
        </>
      );
    }
    export default Ask;
    ```

  - 질문 작성 페이지에 태그 더하는 부분 구현

    - 키보드 이벤트와 `event.keyCode`를 사용
      - `onKeyUp`이벤트를 사용하여 `enter`키와 `,`키를 사용하여 태그가 추가 되도록 구현
      - `onKeyDown`이벤트를 사용하여 `Backspace`키를 누루면 태그가 삭제 되도록 구현

    ```jsx
    //따로 컴포넌트로 만듬
    //나머지 코드 생략
    import { useState } from "react";

    export default function TagAdd({ tags, setTags }) {
      const [input, setInput] = useState("");
      const [isKeyReleased, setIsKeyReleased] = useState(false);

      const onChange = (e) => {
        setInput(e.target.value);
      };

      const onKeyDown = (e) => {
        const trimmedInput = input.trim();

        if ((e.keyCode === 13 || e.keyCode === 188) && trimmedInput.length) {
          e.preventDefault();
          setTags((prevState) => [...prevState, trimmedInput]);
          setInput("");
        }
        if (e.keyCode === 8 && !input.length && tags.length && isKeyReleased) {
          const tagsCopy = [...tags];
          const poppedTag = tagsCopy.pop();
          e.preventDefault();
          setTags(tagsCopy);
          setInput(poppedTag);
        }
        setIsKeyReleased(false);
      };

      const onKeyUp = () => {
        setIsKeyReleased(true);
      };

      const deleteTag = (index) => {
        setTags((prevState) => prevState.filter((tag, i) => i !== index));
      };
      return (
        <Container>
          {tags &&
            tags.map((tag, index) => (
              <Tags key={`${index.toString()}-${tag}`}>
                {tag}
                <Button onClick={() => deleteTag(index)}>x</Button>
              </Tags>
            ))}
          <Input
            value={input}
            placeholder="e.g.(vba css json)"
            onKeyUp={onKeyUp}
            onKeyDown={onKeyDown}
            onChange={onChange}
          />
        </Container>
      );
    }
    ```
