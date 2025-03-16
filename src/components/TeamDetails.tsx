import CounterFlip from './reusable/CounterFlip';
import KillCount from './KillCount';
import { Team, Player } from './MatchListItem';

interface TeamDetailsProps {
    team: Team;
  }

const TeamDetails = ( { team } : TeamDetailsProps ) => {
    return (
        <div>
            <div className="detailsGrid">
                {
                team.players.map(
                    (player : Player, index:number) => <KillCount key={index} player={ player } />
                    )
                }
                <div className='teamDetails'>
                    <div style={{display:'flex', gap:'8px'}}>
                        <span>Points:</span>
                        <CounterFlip>{team.points}</CounterFlip>
                    </div>
                    <div className="vertical-divider" />
                    <div style={{display:'flex', gap:'8px'}}>
                        <span>Место:</span>
                        <CounterFlip>{team.place}</CounterFlip>
                    </div>
                    <div className="vertical-divider" />
                    <div style={{display:'flex', gap:'8px'}}>
                        <span>Всего убийств:</span>
                        <CounterFlip>{team.total_kills}</CounterFlip>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamDetails;