import { Match } from "./matchTrackerApi";

export const matchFilter = (matches: Match[], filterSelect: string ) => {
    switch (filterSelect) {
        case 'Ongoing':
            return matches.filter((match) => match.status === 'Ongoing')
        case 'Finished':
            return matches.filter((match) => match.status === 'Finished')
        case 'Scheduled':
            return matches.filter((match) => match.status === 'Scheduled')
        default:
            return matches
    }
}