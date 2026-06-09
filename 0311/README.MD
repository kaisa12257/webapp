npm vs npx
npm은 패키지 설치·관리, npx는 설치 없이 실행. npm install axios / npx create-react-app my-app
Vite vs Webpack
Vite는 ESM 기반으로 빠른 개발 서버·즉각적 HMR·간단한 설정으로 최근 선호. Webpack은 전체 번들링 방식으로 설정이 복잡하고 상대적으로 느림.
프로젝트 생성
Vite는 npm create vite@latest my-app --template react 후 npm install → npm run dev. CRA는 npx create-react-app my-app --use-npm 후 npm start.
JSX란?
JS 안에서 HTML 유사 문법을 쓰는 확장 문법. Babel이 내부적으로 React.createElement()로 변환. 필수는 아니지만 가독성·유지보수 면에서 권장.
JSX 핵심 문법 6가지
① 구조 — 반드시 하나의 부모 요소로 감싸기 (<div> 또는 빈 태그 <>)
② 표현식 — {} 안에 JS 변수·함수·연산 삽입
③ 속성 — 문자열은 " ", 객체·변수는 {}. class→className, for→htmlFor
④ 조건부 렌더링 — 삼항 연산자 ? : 또는 && 사용
⑤ 반복 — map() 사용, 각 항목에 key 속성 필수
⑥ 이벤트 — onClick, onChange 등 camelCase 핸들러 사용
실습 구조 (chapter_03)
Book.jsx는 props로 name·numOfPage를 받아 출력, Library.jsx는 Book을 여러 개 렌더링, index.js에서 <Library />를 root에 마운트 후 npm start로 실행.
마크업
정의: 문서나 데이터 구조화하고 서식을 지정하는 언어이다.
목적: 문서의 구조를 정의하고 내용의 표현 방식, 기능(링크, 이미지등을)을 지정한다.
형식: 태그나 특정한 문법을 사용하여 구성한다.
대상: 문서(텍스트, 이미지등)
예: HTML, XML, Markdown, LaTex등
사용 분야: 웹페이지, 문서 작성, 데이터 구조화

1. W3C (World Wide Web Consortium)
URL: https://www.w3.org/TR/html52/
 W3C는 웹 표준을 제정하는 기관으로, HTML의 공식 명세(specification)를 제공합니다.
HTML5 및 최신 웹 기술의 표준을 확인할 수 있습니다.
2. MDN Web Docs (Mozilla Developer Network)
 URL: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
 HTML 태그 목록과 사용법을 상세히 설명하며, 예제와 브라우저 지원 여부도 제공합니다.
 최신 HTML 표준을 가장 쉽게 이해할 수 있는 자료 중 하나입니다.
3. WHATWG (Web Hypertext Application Technology Working Group)
 URL: https://html.spec.whatwg.org/multipage/
 HTML의 지속적인 발전을 담당하는 단체로, 최신 HTML Living Standard(HTML LS)를 유지보수한다.
 가장 최신의 HTML 사양을 확인할 수 있다.

MPA, SPA

Node.js
ㅡ patform: 소프트웨어가 실행될 수 있는 기반 환경
ㅡ environment: 특정 소프트웨어가 실행될 수 있도록 구성된 조건
ㅡframework: 소프트웨어 개발을 위한 뼈대 또는 기반 구조
ㅡruntime: 프로그램이 실행되는 동안 필요한 환경

Node.js는 os수준의 플랫폼이 아니다.
Node.js는 특정 기능을 강제하지 않는다.

IDE으 주요 기능
ㅡ 코드 편집기
ㅡ 디버거
ㅡ 빌드 자동화
ㅡ 버전 관리 연동
ㅡ 프로젝트 관리
ㅡ 패키지 관리자 연동
ㅡ 플러그인 및 확장성

VS Code
ㅡ 가벼운 코드 편집이자 IDE 기능을 갖춘 개발 도구

VS Code의 장점
ㅡ 무료 및 오픈 소스
ㅡ 크로스 플랫폼
ㅡ 활발한 커뮤니티
ㅡ 풍부한 확장기능










