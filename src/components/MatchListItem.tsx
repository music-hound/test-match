import ScoreTable from "./ScoreTable";
import StatusCard from "./StatusCard";

interface Player {
    username: string;
    kills: number;
}

export interface Team {
    name: string;
    place: number;
    players: Player[];
    points: number;
    total_kills: number;
}

export interface Match {
    title: string;
    time: string;
    status: "Finished" | "Ongoing" | "Scheduled";
    homeTeam: Team;
    awayTeam: Team;
    homeScore: number;
    awayScore: number;
}

const MatchListItem = ({ match }: { match: Match }) => {
    return (
        <div
        className="matchListItem"
        style={{ 
            margin: '30px 0px', 
            padding: '20px', 
            border: '1px solid #ccc', 
            borderRadius: '10px' 
        }}>
            <StatusCard status={match.status} />
            <ScoreTable left={match.homeScore} right={match.awayScore}/>
            <img src="test-match/teamLogoPlaceholder.png" alt="team_logo" />

            <p>
                <strong>{match.homeTeam.name}</strong> ({match.homeScore}) vs ({match.awayScore}) <strong>{match.awayTeam.name}</strong>
            </p>

            <div className="teamContainer">
                {/* Домашняя команда */}
                <div className="homeTeam">
                    <h4>{match.homeTeam.name} (Место #{match.homeTeam.place})</h4>
                    <p><strong>Очки:</strong> {match.homeTeam.points}</p>
                    <p><strong>Всего убийств:</strong> {match.homeTeam.total_kills}</p>
                    <h5>Игроки:</h5>
                    <ul>
                        {match.homeTeam.players.map(player => (
                            <li key={player.username}>
                                {player.username} - {player.kills} убийств
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Гостевая команда */}
                <div className="awayTeam">
                    <h4>{match.awayTeam.name} (Место #{match.awayTeam.place})</h4>
                    <p><strong>Очки:</strong> {match.awayTeam.points}</p>
                    <p><strong>Общие убийства:</strong> {match.awayTeam.total_kills}</p>
                    <h5>Игроки:</h5>
                    <ul>
                        {match.awayTeam.players.map(player => (
                            <li key={player.username}>
                                {player.username} - {player.kills} убийств
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default MatchListItem;
