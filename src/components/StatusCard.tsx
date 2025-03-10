interface StatusCardProps {
    status: string;
}

const StatusCard = ({ status }: StatusCardProps) => {
    return (
        <div className={`statusCard ${status.toLowerCase()}`}>
            <span>{status}</span>
        </div>
    )
}

export default StatusCard;