interface StatusCardProps {
    status: string;
}

const StatusCard = ({ status }: StatusCardProps) => {
    return (
        <div className={`statusCard ${status.toLowerCase()}`}>
            <span>
                {
                    status === 'Finished' ? status :
                    ( status === 'Ongoing' ? "Live" : 'Match preparing')
                }
            </span>
        </div>
    )
}

export default StatusCard;