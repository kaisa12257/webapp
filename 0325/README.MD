Rendering Element
- 리액트 앱을 구성하는 가장 작은 블록들
Element
-React에서 Element는 UI의 가장 작은 단위이며, 화면에 표시될 내용을 담고 있는 javascript객체이다.
Componemt
- Element를 생성하고 관리하는 함수 또는 클래스입니다.
Component는 재사용 가능하며, 독립적인 기능을 수행하는 UI의 특정 부분을 나타냄

Element vs Component
구분 React ElementReact Component
정의 UI의 가장 작은 단위 여러 개의 Element를 포함하는 독립적인 UI 블록
형태 변경 불가능한 객체 함수 또는 클래스
사용법 const element = <h1>Hello</h1>; function App() { return <h1>Hello</h1>; }
재사 용불가능 가능
리렌더 링새로운 Element를 생성해야 변경됨 상태(state) 변화에 따라 자동으로 업데이트됨

React elements are immutable
Element 생성 후 children이나 attributes를 변경할 수 없습니다.
Element 자체를 수정하는 것이 아니라 새로운 Element를 만들어야 합니다.

Rendering
1.초기랜더링
2. 상태 변화
3. 비교(디프)
4. 업데이트

React로 DOM 변경하기
일반적으로 DOM을 변경하면 모든 부분이 강조되는데, 리액트를 사용해 DOM을 조작한 경우 필요한 부분만 강조되는 것을 확인할 수 있습니다.
프로그램을 보면 지금까지 했던 것과 마찬가지로 ReactDOM.render() 메소드를 호출하고 있을 뿐입니다.
이처럼 리액트에서는 DOM을 일부만 변경합니다.
리액트는 DOM 전체를 변경하는 것이 아니라 변경 부분을 찾아 일부분만 변경합니다.
따라서 화면 처리 속도가 빠릅니다.
리액트로 만든 애플리케이션이 부드럽게 작동한다는 말을 많이 하는데, 이는 모두 가상 DOM(Virtual DOM)을 사용했기 때문입니다.

JSX
XML 과 유사한 구문을 사용하여 DOM트리를 생성할 수 있는 javascript 확
JSX를 사용하면 React에서 HTML을 작성할 수 있습니다.
JSX를 사용하면 React에서 HTML을 더 쉽게 작성하고 추가할 수 있습니다.
