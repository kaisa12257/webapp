import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    // 전체를 <div>나 <>로 감싸야 합니다!
    <div>
      <MyComponent name="React" />
      <MyComponent name="javascript" />
      <MyComponent name="HTML" />
    </div>
  );
}

export default App;