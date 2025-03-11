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
                    (player : Player) => <KillCount player={ player } />
                    )
                }
                <div className='teamDetails'>
                    <div style={{display:'flex', gap:'8px'}}>
                        <span>Points:</span>
                        <span style={{ color:'#fff'}}>{team.points}</span>
                    </div>
                    <div style={{display:'flex', gap:'8px'}}>
                        <span>Место:</span>
                        <span style={{ color:'#fff'}}>{team.place}</span>
                    </div>
                    <div style={{display:'flex', gap:'8px'}}>
                        <span>Всего убийств:</span>
                        <span style={{ color:'#fff'}}>{team.total_kills}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamDetails;