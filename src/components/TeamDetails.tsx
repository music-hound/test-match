import KillCount from './KillCount';
import { Team, Player } from './MatchListItem';

interface TeamDetailsProps {
    team: Team;
  }

const TeamDetails = ( { team } : TeamDetailsProps ) => {
    return (
        <div className="homeTeam">
                    <h4>{team.name} (Место #{team.place})</h4>
                    <p><strong>Очки:</strong> {team.points}</p>
                    <p><strong>Всего убийств:</strong> {team.total_kills}</p>
                        {team.players.map( (player : Player) => <KillCount player={ player } />)}
                </div>
    )
}

export default TeamDetails;