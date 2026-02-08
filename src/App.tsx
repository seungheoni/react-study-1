import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import ColorButtons from './components/ColorButtons';
import LocalCounter from './components/LocalCounter';

function App() {

  const [bgColor, setBgColor] = useState("#e5e6e1");

  const [showCounter, setShowCounter] = useState(true);

  const [count, setCount] = useState(0);

  {/* [구현1] 첫 페이지 로드시 실행 */}
  useEffect (() => {
    console.log("🚀 앱이 성공적으로 로드되었습니다!");
    alert("환영합니다! 프로필 설정 페이지입니다.");
  },[]);

  // [구현 2] Update: bgColor가 바뀔 때마다 실행
  useEffect(() => {
    // 이 안의 코드는 bgColor가 변할 때마다 "리액션"을 합니다.
    console.log(`🎨 배경색이 ${bgColor}로 변경되었습니다.`);
    
    // 실제 브라우저 탭의 제목을 현재 색상 코드로 바꿉니다.
    document.title = `현재 테마: ${bgColor}`;

    // (팁) 만약 새로고침해도 이 색상을 유지하고 싶다면? 여기서 저장하면 됩니다!
    // localStorage.setItem('themeColor', bgColor);
  }, [bgColor]); // 👈 중요: 리액트에게 bgColor를 감시하라고 명령함!


// [추가 로직] 색상 이름을 분석하는 무거운 함수
const getColorName = (hex: string) => {
  console.log("🤔 색상 이름을 분석하는 중... (매우 무거운 작업)");
  if (hex === "#f2e055") return "노란색";
  if (hex === "#bd5720") return "갈색";
  if (hex === "#3b82f6") return "시원한 블루";
  if (hex === "#22c55e") return "싱그러운 그린";
  return "새로운 색상";
};

//const colorName = getColorName(bgColor); // 리렌더링마다 무조건 실행됨

// [useMemo 적용] 
// bgColor가 변할 때만 위 함수를 실행해서 colorName을 업데이트합니다.
const colorName = useMemo(() => {
  return getColorName(bgColor);
}, [bgColor]);

  return (
    <Layout subject="내 프로필 설정" bgColor={bgColor}>
      {/* 여기서 작성하는 태그들이 Content의 children으로 전달됩니다 */}
      <section>
        <h1>반갑습니다!</h1>
        {/* 분석된 색상 이름을 화면에 표시 */}
        <p>현재 테마는 <strong>{colorName}</strong>입니다.</p>
        <p>이곳이 메인 컨텐츠 영역입니다.</p>

        {/* [3단계 확인용 버튼 추가] */}
        <div style={{ marginBottom: '20px' }}>
          <button 
            style={btnStyle} 
            onClick={() => setShowCounter(!showCounter)}
          >
            {showCounter ? "❌ 카운터 파괴 (Unmount)" : "✅ 카운터 생성 (Mount)"}
          </button>
        </div>

        <ColorButtons onChangeColor={setBgColor} />
        {showCounter && <LocalCounter count={count} setCount={setCount} />}
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
