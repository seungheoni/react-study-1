import { useEffect, useState } from "react";
import SubChild from "./SubChild";

interface Props {
    count: number;
    setCount: (val: number) => void;
  }
  const LocalCounter = ({ count, setCount }: Props) => {
    return (
      <div style={{ border: '1px solid #666', padding: '15px', marginTop: '20px' }}>
        <h3>자식 카운터 (Props 사용)</h3>
        <p>부모로부터 받은 값: {count}</p>
        <button onClick={() => setCount(count + 1)}>자식에서 부모 숫자 올리기</button>
      </div>
    );
  };

export default LocalCounter;