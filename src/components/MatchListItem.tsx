import { useState } from "react";
import Collapse from "./Collapse";
import KillCount from "./KillCount";
import ScoreTable from "./ScoreTable";
import StatusCard from "./StatusCard";

export interface Player {
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
    const [ isOpen, setIsOpen ] = useState(false)
    
    return (
        <div
        className="matchListItem"
        onClick={()=>{setIsOpen(!isOpen)}}
        style={{
            cursor:'pointer',
            margin: '30px 0px', 
            padding: '20px', 
            borderRadius: '4px' 
        }}>
            <div
            style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                gap:'14px'
            }}
            >
                <img style={{width:'50px', height:'50px'}} src="teamLogoPlaceholder.png" alt="team_logo" />
                <strong style={{flexGrow:1}} >{match.homeTeam.name}</strong>
                <div
                style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                }}
                >
                    <ScoreTable left={match.homeScore} right={match.awayScore}/>
                    <StatusCard status={match.status} />
                </div>
                <strong style={{flexGrow:1, textAlign:'right'}} >{match.awayTeam.name}</strong>
                <img style={{width:'50px', height:'50px'}} src="teamLogoPlaceholder.png" alt="team_logo" />
                
                <svg style={{
                    
                    transition: "transform 0.3s ease",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",

                }} width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 6L10 13L17 6" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            <Collapse isOpen={isOpen}>

            <div className="teamContainer">
                {/* Домашняя команда */}
                <div className="homeTeam">
                    <h4>{match.homeTeam.name} (Место #{match.homeTeam.place})</h4>
                    <p><strong>Очки:</strong> {match.homeTeam.points}</p>
                    <p><strong>Всего убийств:</strong> {match.homeTeam.total_kills}</p>
                        {match.homeTeam.players.map(player => <KillCount player={ player } />)}
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
            </Collapse>
        </div>
    );
};

export default MatchListItem;
