import type { Match } from './components/MatchListItem';
import MatchListItem from './components/MatchListItem';
import LoadingBar from './components/LoadingBar';
import { useGetMatchesQuery } from './features/matchTrackerApi';
import Header from './components/Header';
import { matchFilter } from './features/matchFilter';
import { useSelector } from 'react-redux';
import { RootState } from './state/store';

function App() {

  const { data, isLoading, isFetching, isError, refetch } = useGetMatchesQuery();
  const filterSelect = useSelector((state : RootState) => state.reducer.filter.filterSelect);
  const filteredMatches : Match[] = data?.data.matches ? matchFilter(data.data.matches, filterSelect) : [];


  return (
    <>

    <LoadingBar isLoading={isLoading} isFetching={isFetching} />

    <Header isError={isError} refetch={refetch} />

      <div>
        {!isLoading && !isFetching && !isError && filteredMatches && (
          <div className={'matchList'}>
            {
               filteredMatches.map((match) => (
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
