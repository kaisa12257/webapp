import React from 'react';

function App() {
  return (
    <div style={{ 
      backgroundColor: '#282c34', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      color: 'white',
      textAlign: 'center'
    }}>
      {/* 로고 이미지가 안 나올 경우를 대비해 텍스트와 원형 디자인을 넣었습니다 */}
      <div style={{
        width: '150px',
        height: '150px',
        border: '8px solid #61dafb',
        borderRadius: '50%',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#61dafb'
      }}>React</div>
      
      <h1>React 배포 성공!</h1>
      <p>회장님, 드디어 파란 로고 화면이 활성화되었습니다.</p>
      <a
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#61dafb', textDecoration: 'none', marginTop: '20px' }}
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
