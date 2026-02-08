import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import ColorButtons from './components/ColorButtons';
import LocalCounter from './components/LocalCounter';

function App() {

  const [bgColor, setBgColor] = useState("#e5e6e1");

  return (
    <Layout subject="내 프로필 설정" bgColor={bgColor}>
      {/* 여기서 작성하는 태그들이 Content의 children으로 전달됩니다 */}
      <section>
        <h1>반갑습니다!</h1>
        <p>이곳이 메인 컨텐츠 영역입니다.</p>
        <ColorButtons onChangeColor={setBgColor} />
        <LocalCounter />
      </section>
    </Layout>
  )
}

const btnStyle = {
  padding: '10px 20px',
  cursor: 'pointer',
  borderRadius: '8px',
  border: '1px solid #ccc'
};

export default App
