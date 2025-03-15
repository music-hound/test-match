import CounterFlip from "./CounterFlip";

interface ScoreTableProps {
    left: number;
    right: number;
}

const ScoreTable = ( { left, right }: ScoreTableProps) => {
    return (
        <div className="scoreTable">
            <CounterFlip>{left}</CounterFlip>:<CounterFlip>{right}</CounterFlip>
        </div>
    )
}

export default ScoreTable;