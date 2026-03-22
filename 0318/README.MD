리액트란?
사용자 인터페이스를 만들기 위한 javascript라이브러리이다.
사용자와 웹 사이트의 상호작용을 돕는 인터페이스를 만들기 위한 자바스크립트 기능 모음집
SPA 개발을 위한 프레임워크
'컴포넌트'라고 물리는 작고 고립된 코드 파편을 이용하여 복잡한 UI를 구성

브라우저 로딩 과정
ㅡ 피싱
ㅡ 스타일
ㅡ 레이아웃
ㅡ 페인트
ㅡ 합성

개발 환경
Node.js, 웹 서버 개발 플랫폼, 윈도우/macOS, 필수
VScode, 소스 코드 편집기, 윈도우/macOS, 권장
scoop, 윈도우용 설치 프로그램, 윈도우, 권장
Homebrew, macOS용 설치 프로그램, macOS, 권장
touch, 파일 관리 유틸리티, 윈도우, 선택
Chorme, 웹 브라우저, 윈도우/macOS, 권장

-APP.js-
function MyButton() {
return (
<button>
I'm a button
</button>
);
}
export default function MyApp() {
return (
<div>
<h1>Welcome to my app</h1>
<MyButton />
</div>
);
}

Package manager
Linux에서 사용하던 커맨드라인 패키지 매니저인 apt(apt-get), yum, Mac에서 사용하던 Homebrew 처럼 패키지설치/업데이트/삭제 등에 사용
Chocolatey
• Chocolatey (약칭 Choco) : 윈도우에서 사용할 수 있는 커맨드 라인 패키지 매니저
Scoop
• 윈도우의 패키지 매니저
• 윈도우용 CLI (command-line installer)로 윈도우에서 좀 더 쾌적한 설치를 위해 개발
Winget
• Windows 10 및 Windows 11 컴퓨터에서 애플리케이션을 검색, 설치, 업그레이드, 제거 및 구성할 수 있음
WingetUI
• GUI를 제공하면서 winget, chocolatey, scoop 3개의 윈도우 패키지 관리자를 한번에 사용할 수 있는 오픈
소스 앱

Bable이 하는일 
Transform syntax(구문 변환)
bable-polyfill을 통해서 폴리필 기능 지원
JSX and React

폴더 구조
ㅡnode_modules
ㅡpublic
ㅡsrc
ㅡgitignore
