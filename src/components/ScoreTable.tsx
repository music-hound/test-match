interface ScoreTableProps {
    left: number;
    right: number;
}

const ScoreTable = ( { left, right }: ScoreTableProps) => {
    return (
        <div>
            <span
            style={{fontSize:'20px',fontWeight:'900'}}
            >
                {left}:{right}
            </span>
        </div>
    )
}

export default ScoreTable;