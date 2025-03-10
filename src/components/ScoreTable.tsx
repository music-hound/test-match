interface ScoreTableProps {
    left: number;
    right: number;
}

const ScoreTable = ( { left, right }: ScoreTableProps) => {
    return (
        <div>
            <span>{left}:{right}</span>
        </div>
    )
}

export default ScoreTable;