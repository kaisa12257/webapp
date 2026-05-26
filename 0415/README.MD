Event Handler란?
사용자가 웹 페이지와 상호작용할 때 발생하는 이벤트(클릭, 마우스 오버, 키 입력 등)에 반응하여 특정 동작을 수행하는 함수
Event Handler = Event Listener

기본 사용법
이벤트명은 camelCase 로 작성
핸들러는 함수로 전달 (문자열 X)

이벤트 객체 (SyntheticEvent)
React는 브라우저 네이티브 이벤트를 감싼 SyntheticEvent 제공
모든 브라우저에서 동일한 인터페이스 보장
event.target.value 로 입력값 접근

