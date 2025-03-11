interface ScoreTableProps {
    left: number;
    right: number;
}

const ScoreTable = ( { left, right }: ScoreTableProps) => {
    return (
        <div className="scoreTable">
            {left}:{right}
        </div>
    )
}

export default ScoreTable;