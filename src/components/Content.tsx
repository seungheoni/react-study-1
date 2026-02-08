interface ContentProps {
    children : React.ReactNode;
}

const Content = ({children}: ContentProps) => {

    console.log("Content 컴포넌트 랜더링 되었습니다");
    return (
        <main style={{ 
            flex: 1,               // 컨텐츠가 적어도 풋터가 바닥에 있게 만듦
            width: '100%',         // 기본 너비 100%
            maxWidth: '1200px',    // 너무 넓어지면 가독성이 떨어지므로 제한
            margin: '0 auto',      // 화면 정중앙 배치
            padding: '40px 20px',   // 안쪽 여백 (상하 40, 좌우 20)
            minHeight: '80vh',      // 내용이 없어도 어느 정도 높이 유지
            boxSizing: 'border-box' // 패딩 때문에 너비가 깨지지 않게 방어
          }}>
            {children}
        </main>
    );
}

export default Content;