State란?
컴포넌트 내부에서 관리하는 변경 가능한 데이터
일반 변수(const, let)와 달리 값이 변하면 관련 컴포넌트가 자동으로 재렌더링됨
렌더링 결과물에 영향을 주는 정보로, 시간이 지남에 따라 변하는 데이터
props는 외부에서 전달받아 변경 불가, state는 컴포넌트 내부에서 직접 변경 가능

State를 사용하는 이유
일반 변수는 값이 바뀌어도 화면이 자동으로 바뀌지 않음
state는 값이 변경되면 React가 자동으로 감지하여 화면을 다시 렌더링함
유동적인 데이터를 화면에 반영하려면 state 사용 필수

setState 특징
비동기로 동작 → setState 직후 바로 값을 읽으면 이전 값이 출력됨
batch update: 16ms 동안 변경된 state를 모아 한 번에 렌더링 (성능 최적화)
같은 키 값이면 마지막 값으로 덮어씌워짐
최신 값을 기반으로 업데이트하려면 콜백 함수 사용:

State 정의 시 주의사항
렌더링과 데이터 흐름에 관련된 값만 state로 관리
불필요한 값을 state에 넣으면 불필요한 재렌더링으로 성능 저하

Event Handling (이벤트 처리)

JSX에서 이벤트는 camelCase 로 작성

HTML: onclick="handler()" ❌
React: onClick={handler} ✅


이벤트 핸들러는 문자열이 아닌 함수로 전달
주요 이벤트 종류:

onClick - 클릭
onChange - 값 변경
onSubmit - 폼 전송
onKeyDown / onKeyUp - 키보드
onFocus / onBlur - 포커스
onMouseMove / onMouseDown / onMouseUp - 마우스
