import { useState } from "react";
import SubChild from "./SubChild";

const LocalCounter = () => {

    const [count, setCount] = useState(0);
    console.log("🔵 LocalCounter(최하위) 렌더링 됨");
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