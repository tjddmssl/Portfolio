## 🚀 [배포링크](http://dongne-pharm.com/) | [GitHub](https://github.com/tjddmssl/dongnepharm) | [기술,에러 블로그](https://velog.io/@tjddmssl?tag=%EB%A9%94%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8) | [회고](https://velog.io/@tjddmssl?tag=%EB%A9%94%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0) | [서비스 메뉴얼](https://drive.google.com/file/d/1jXP7nkEKO6yRLCHbXtDHafa1HLr5xhGU/view)

---

![](https://velog.velcdn.com/images/tjddmssl/post/ffee10fa-6687-4901-ad41-4bda12a14d5d/image.png)

### 코드스테이츠 메인 프로젝트 (3FE, 3BE), 프론트엔드 팀원으로 참여

### 기술 스택 : Typescript, Redux Toolkit, Axios, React-Router, Styled-component, React Vite, GitHub, AWS (S3), Figma

### 내가 구현한 것

> 배포에 성공하여, 코드보다는 화면으로 구현한 것을 설명하였습니다.

- **Figma**를 사용하여 와이어 프레임, 프로토타입 구성
- 디렉터리, 컴포넌트 구조화, 초기 설정 **(React Vite)**
- GitHub Issues와 Projects, Notion을 활용 한 **[📎 프로젝트 일정](https://brick-city-d81.notion.site/c59287766e344847aadad7a2ef2585fe), [📎 이슈 관리](https://docs.google.com/spreadsheets/d/1dx6r2EBafmBCHlO6Ty3ogBZelc0Uz9PsQ_l0KLaMRT8/edit#gid=395038256)**
- **Styled-components**를 사용하여 약국 리스트, 유저 회원가입, 약사 회원가입, 로그인 페이지 화면 구현(**+반응형**)
- 에러사항 발생시, `react-toastify`로 에러를 띄움
- **유저의 회원가입, 약사 회원가입 기능 구현,** 회원가입 완료시 로그인페이지로 이동

  a. **유효성 검사** 기능

  - 유효성검사 코드와 input에 사용되는 코드, input아래 에러코드의 중복을 피하기 위해, 각각 **재사용 가능한 컴포넌트 구현**
  - 이메일 : 5글자 이상, 이메일 형식이 맞는지 유효성검사
  - 비밀번호 : 문자, 숫자, 특수문자 조합으로 8자 이상으로 조합했는지 유효성 검사
  - 닉네임 : 공백이 들어갈수 없도록 유효성 검사
  - 주소 입력, 체크박스들의 체크 유무, 회원가입시 모든 사항을 기입해야 회원가입 되도록 유효성 검사
    ![](https://velog.velcdn.com/images/tjddmssl/post/e67afd00-b97f-4a6f-8ed4-fe47de8bddba/image.gif)

  b. 회원 가입시 **주소찾기 기능과 이미지(파일)업로드 기능**

  - Daum-post code 사용해 주소 찾기 기능
  - FormData, Blob를 사용해 이미지(파일) 업로드 기능
    - 약사의 회원가입시 사업자 등록증 사진과 약사면허증 사진을 관리자페이지에서 관리자가 확인한 후 가입이 가능
      ![](https://velog.velcdn.com/images/tjddmssl/post/a0634623-0d1b-4656-b551-6041f6d4845d/image.gif)
      ![](https://velog.velcdn.com/images/tjddmssl/post/bbd0938f-b724-4428-9da3-12d234d480cb/image.gif)

- **로그인, 로그아웃, 회원 탈퇴** 기능 구현
  - **유효성 검사 기능**
  - 로그인 요청 시 받은 **JWT를 localStorage에 저장**
    - 반복되는 localStorage 메서드를 하나의 컴포넌트로 만들어 **코드 재사용**
  - 로그인 시 받은 유저정보와 약사 유저정보를 **Redux Toolkit를 통해 전역으로 상태 관리, 사용**
  - 새로고침시 로그인 상태 유지를 위해 **Redux-persist 사용하여 reducer state를 localStorage에 저장**
  - **로그아웃, 회원탈퇴시 JWT, 리덕스에 저장된 값 삭제**
- **Axios**를 사용하여 **비동기적으로 서버와 통신**
  - 로그인때 받은 JWT를 유저인증이 필요한 axios통신에 전역으로 설정
  - **유저의 댓글, 약사의 대댓글, 마이페이지의 유저정보 CRUD** 구현
  - 약국 리스트 화면 구현
    ![](https://velog.velcdn.com/images/tjddmssl/post/62f900e2-0fb5-4ed5-8a90-845564989a52/image.gif)
  - 일반회원 **약국 찜하기, 찜 취소하기**
  - 일반회원이 쓴 댓글과 찜한 약국 리스트들 **마이페이지에서 조회가능, 마이페이지에서도 댓글CRUD와 찜하기, 찜취소가 가능**
    ![](https://velog.velcdn.com/images/tjddmssl/post/182e4f6a-9cde-47ce-ab49-38fe33e54823/image.gif)
  - 일반회원 마이페이지에서 **프로필 사진수정, 주소와 닉네임과 유저의 비밀번호 수정**
  - 약사회원 마이페이지에서 **약국 사진 수정**
    ![](https://velog.velcdn.com/images/tjddmssl/post/7b35840e-7950-4c43-874c-e64a60f30f2e/image.gif)
- Typescript **type** 지정
  - 반복되는 type들을 따로 컴포넌트로 만들어서 관리
