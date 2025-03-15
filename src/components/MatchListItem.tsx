import { useState } from "react";
import Collapse from "./Collapse";
import ScoreTable from "./ScoreTable";
import StatusCard from "./StatusCard";
import TeamDetails from "./TeamDetails";

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
        >
            <div
            style={{
                cursor:'pointer',
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
                    gap:'4px',
                }}
                >
                    <ScoreTable left={match.homeScore} right={match.awayScore}/>
                    <StatusCard status={match.status} />
                </div>

                <strong style={{flexGrow:1, textAlign:'right'}} >{match.awayTeam.name}</strong>
                <img style={{width:'50px', height:'50px'}} src="teamLogoPlaceholder.png" alt="team_logo" />
                
                <svg className="arrow_side" style={{
                    flexShrink: 0,
                    transition: "transform 0.3s ease",
                    transform: isOpen ? "rotate(180deg) scale(1)" : "rotate(0deg) scale(0.9)",

                }} width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 6L10 13L17 6" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            <Collapse isOpen={isOpen}>

            <div className="teamContainer">
                <TeamDetails team={match.homeTeam}/>
                <div className="versus_container">
                    <div className="versus_line"></div>
                    <div className="versus">VS</div>
                    <div className="versus_line"></div>
                </div>
                
                <TeamDetails team={match.awayTeam}/>
            </div>

            </Collapse>

            <div className="arrow_center">

                <svg style={{
                    flexShrink: 0,
                    transition: "transform 0.3s ease",
                    transform: isOpen ? "rotate(180deg) scale(1)" : "rotate(0deg) scale(0.9)",

                }} width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 6L10 13L17 6" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

        </div>
    );
};

export default MatchListItem;
