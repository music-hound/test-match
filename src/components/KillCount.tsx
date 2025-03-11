import { Player } from "./MatchListItem";

interface KillCountProps {
    player: Player;
}

const KillCount = ( { player }: KillCountProps) => {
    return (
        <div className="killCount">
            <img src="avatar.png"/>
            <span style={{flexGrow:1}}>{player.username}</span>
            <span className="grayLabel">Убийств:</span>
            <span style={{fontSize:'16px'}}>{player.kills}</span>
        </div>
    )
}

export default KillCount;