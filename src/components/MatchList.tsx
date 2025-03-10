import { useQuery } from '@tanstack/react-query';
import { Match } from './MatchListItem'
import MatchListItem from "./MatchListItem";
    
const MatchList = () => {
    const { data, isLoading, isFetching, refetch } = useQuery({
        queryKey: ['matchTracker'],
        queryFn: async () => {
            const res = await fetch(import.meta.env.VITE_API_URL);
            return res.json();
        },
    });
    
    return (
        <div>
            <button onClick={() => refetch()}>Обновить</button>
    
            {/* Показываем лоадер при первом запуске или обновлении */}
            {isLoading || isFetching ? <p>Loading...</p> : null}
    
            {!isLoading && !isFetching && (
                <div id={'matchList'}>
                    {data.data.matches.map((match: Match) => (
                        <MatchListItem key={match.title} match={match} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default MatchList;