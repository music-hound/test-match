import CounterFlip from "./reusable/CounterFlip";
import { Player } from "./MatchListItem";

interface KillCountProps {
    player: Player;
}

const KillCount = ( { player }: KillCountProps) => {
    return (
        <div className="killCount">
            <div className="player_creds">
                <img src="avatar.png"/>
                <span style={{flexGrow:1, color:'#fafafa'}}>{player.username}</span>
            </div>

            <div className="player_kills">
                <span style={{color: '#FAFAFA66', fontSize:'14px'}}>Убийств:</span>
                <CounterFlip>{player.kills}</CounterFlip>
            </div>
        </div>
    )
}

export default KillCount;