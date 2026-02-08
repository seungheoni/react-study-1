import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

interface LayoutProps {
    children:React.ReactNode;
    subject: string;
    bgColor?: string;
}

const Layout = ({children, subject, bgColor = '#0000FF'}: LayoutProps) => {

    console.log("Layout 컴포넌트 랜더링 되었습니다");
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header/>
            <div style={{ backgroundColor: bgColor, flex: 1 }}>
                <Content>
                    <h1 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>
                        {subject}
                    </h1>
                    {children}
                </Content>
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;