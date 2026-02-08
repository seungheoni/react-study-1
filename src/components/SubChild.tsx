interface SubChildProps {
    onIncrease: () => void;
}

const SubChild = ({onIncrease}: SubChildProps) => {
    console.log("🟠 --- SubChild(손자) 렌더링 됨");
    return (
        <div style={{ marginTop: '20px', padding: '15px', border: '2px solid #0000FF', borderRadius: '8px' }}>
            <p>저는 분리된 자식입니다.</p>
            <button onClick={onIncrease}>부모 숫자 올리기</button>
        </div>
    );
}
export default SubChild;