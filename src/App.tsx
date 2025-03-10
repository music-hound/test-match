import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MatchList from './components/MatchList'
import './App.css';

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <>
      <h1>Match Tracker</h1>
        <MatchList />
      </>
    </QueryClientProvider>
  )
}

export default App
