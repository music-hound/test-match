import { Match } from './components/MatchListItem'
import MatchListItem from './components/MatchListItem';
import LoadingBar from './components/LoadingBar';
import { useGetMatchesQuery } from './features/matchTrackerApi';
import Header from './components/Header';

function App() {

  const { data, isLoading, isFetching, isError, refetch } = useGetMatchesQuery();
  

  return (
    <>

    <LoadingBar isLoading={isLoading} isFetching={isFetching} />

    <Header isError={isError} refetch={refetch} />

      <div>
        {!isLoading && !isFetching && !isError && data && (
          <div className={'matchList'}>
            {
              data.data.matches.map((match: Match) => (
                  <MatchListItem key={match.title} match={match} />
              ))
            }
          </div>
        )}
      </div>
      
    </>
  )
}

export default App
