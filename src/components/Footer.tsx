const Footer = () => {
    console.log("Footer 컴포넌트 랜더링 되었습니다");
    return (

        <footer style={{ backgroundColor: '#00FF00' , borderTop: '1px solid #ddd', padding: '1rem', marginTop: '20px' }}>
            <p>리액트 프로젝트 풋터</p>
        </footer>
    );
}

export default Footer;