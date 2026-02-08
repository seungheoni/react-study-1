import { useEffect, useState } from "react";
import SubChild from "./SubChild";

const LocalCounter = () => {

    const [count, setCount] = useState(0);
    console.log("🔵 LocalCounter(최하위) 렌더링 됨");

    useEffect(() => {
        console.log("🔵 [1단계: Mount] 카운터가 태어났습니다. 타이머 시작!");
        
        // 1초마다 콘솔을 찍는 타이머 생성
        const timer = setInterval(() => {
          console.log("...작동 중(틱톡)");
        }, 1000);
    
        // [3단계: Cleanup] 컴포넌트가 사라질 때 리액트가 이 함수를 실행함
        return () => {
          clearInterval(timer); // 타이머 제거
          console.log("🛑 [3단계: Unmount] 카운터가 파괴되었습니다. 타이머 종료!");
        };
      }, []); // 빈 배열: 태어날 때와 죽을 때만 작동
      
    return (
        <div style={{ 
            marginTop: '20px', 
            padding: '15px', 
            border: '2px solid #bd5720', 
            borderRadius: '8px' 
          }}>
            <h3>내부 카운터 (Local State)</h3>
            <p>값: {count}</p>
            <button onClick={() => {setCount(count + 1)}}>숫자 올리기</button>
            <p style={{ fontSize: '12px', color: '#666' }}>이 버튼을 누르면 Header나 Layout은 다시 그려지지 않아요!</p>
            <SubChild onIncrease={() => {setCount(count + 1)}} />
        </div>
    );
}

export default LocalCounter