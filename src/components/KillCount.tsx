import { Player } from "./MatchListItem";

interface KillCountProps {
    player: Player;
}

const KillCount = ( { player }: KillCountProps) => {
    return (
        <span>
            {player.username} - {player.kills} убийств
        </span>
    )
}

export default KillCount;