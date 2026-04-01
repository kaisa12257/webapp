import React from 'react';
// 파일 경로가 src/funcComp 폴더 안에 있다면 아래처럼 써야 합니다.
import Header from './funcComp/Header';
import Main from './funcComp/Main';
import Footer from './funcComp/Footer';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;