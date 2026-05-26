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
