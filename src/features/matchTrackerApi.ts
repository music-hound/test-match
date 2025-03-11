import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Match {
    title: string;
    time: string;
    status: "Finished" | "Ongoing" | "Scheduled";
    homeTeam: Team;
    awayTeam: Team;
    homeScore: number;
    awayScore: number;
}

export interface Team {
    name: string;
    place: number;
    players: Player[];
    points: number;
    total_kills: number;
}

export interface Player {
  username: string;
  kills: number;
}

interface Matches {
  matches: Match[]
}


interface MatchesResponse {
  data: Matches;
  ok: boolean;
}

export const matchTrackerApi = createApi({
  reducerPath: 'matchTrackerApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getMatches: builder.query<MatchesResponse, void>({
      query: () => '/fronttemp',
    }),
  }),
  refetchOnFocus:false,
});

export const { useGetMatchesQuery } = matchTrackerApi;
