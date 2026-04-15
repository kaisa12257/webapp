


import { useState } from 'react';

export default function CombinedApp() {
  // 1. 카운터 상태
  const [count, setCount] = useState(0);

  // 2. 텍스트 입력 상태
  const [text, setText] = useState('hello');

  // 3. 체크박스 상태
  const [liked, setLiked] = useState(true);

  // 4. 폼(이름/나이) 상태
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);

  return (
    <div style={{ padding: '20px', lineHeight: '2' }}>
      {/* 첫 번째: 카운터 */}
      <section>
        <h3>1. Counter</h3>
        <button onClick={() => setCount(count + 1)}>
          You pressed me {count} times
        </button>
      </section>

      <hr />

      {/* 두 번째: 텍스트 입력 */}
      <section>
        <h3>2. Input</h3>
        <div>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <p>You typed: {text}</p>
        <button onClick={() => setText('hello')}>Reset</button>
      </section>

      <hr />

      {/* 세 번째: 체크박스 */}
      <section>
        <h3>3. Checkbox</h3>
        <label style={{ display: 'block' }}>
          <input
            type="checkbox"
            checked={liked}
            onChange={(e) => setLiked(e.target.checked)}
          />
          I liked this
        </label>
        <p>You {liked ? 'liked' : 'did not like'} this.</p>
      </section>

      <hr />

      {/* 네 번째: 폼 (이름/나이) */}
      <section>
        <h3>4. Form</h3>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <button onClick={() => setAge(age + 1)}>
            Increment age
          </button>
        </div>
        <p>Hello, {name}. You are {age}.</p>
      </section>
    </div>
  );
}