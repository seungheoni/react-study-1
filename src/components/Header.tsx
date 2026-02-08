const Header = () => {

    console.log("Header 컴포넌트 랜더링 되었습니다");
    return (
        <header style={{ backgroundColor: '#282c34', padding: '1rem', color: 'white' }} >
            <nav>
                <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
                    <li>test 1</li>
                    <li>test 2</li>
                    <li>test 3</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;