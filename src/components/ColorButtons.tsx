interface ColorButtonsProps {
    onChangeColor: (color: string) => void;
}

const ColorButtons = ({onChangeColor} : ColorButtonsProps) => {

    console.log("ColorButtons 컴포넌트 랜더링 되었습니다");
    return (
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
            <button onClick={() => onChangeColor('#f2e055')} style={btnStyle}>노란색</button>
            <button onClick={() => onChangeColor('#bd5720')} style={btnStyle}>갈색</button>
        </div>
    );
}

const btnStyle = {
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '8px',
    border: '1px solid #ccc'
};

export default ColorButtons;
