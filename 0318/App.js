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
      fontSize: 'calc(10px + 2vmin)',
      color: 'white',
      textAlign: 'center'
    }}>
      <style>
        {`
          @keyframes App-logo-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .App-logo {
            height: 40vmin;
            pointer-events: none;
            animation: App-logo-spin infinite 20s linear;
          }
        `}
      </style>
      <svg className="App-logo" viewBox="0 0 841.9 596.6" xmlns="http://www.w3.org/2000/svg">
        <circle cx="420.9" cy="298.3" r="23.1" fill="#61dafb"/>
        <g fill="none" stroke="#61dafb" strokeWidth="20">
          <ellipse rx="390.4" ry="147.1" transform="rotate(0 420.9 298.3)" cx="420.9" cy="298.3"/>
          <ellipse rx="390.4" ry="147.1" transform="rotate(60 420.9 298.3)" cx="420.9" cy="298.3"/>
          <ellipse rx="390.4" ry="147.1" transform="rotate(120 420.9 298.3)" cx="420.9" cy="298.3"/>
        </g>
      </svg>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        style={{ color: '#61dafb', textDecoration: 'none' }}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
