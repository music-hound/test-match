import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toggle_error } from "../state/errorSlice";

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
  matches: Match[];
}

interface MatchesResponse {
  data: Matches;
  ok: boolean;
}

export const matchTrackerApi = createApi({
  reducerPath: "matchTrackerApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getMatches: builder.query<MatchesResponse, void>({
      query: () => "/fronttemp",
      async onCacheEntryAdded(_, { updateCachedData, cacheDataLoaded, cacheEntryRemoved, dispatch }) {
        const socket = new WebSocket(import.meta.env.VITE_WS_URL);

        socket.onerror = (error) => {
          console.error("WebSocket error:", error);
        };

        socket.onclose = () => {
          console.error("WebSocket closed connection");
        };

        try {
          await cacheDataLoaded;

          socket.onmessage = (event) => {
            try {
              const message = JSON.parse(event.data);
          
              if (!message || message.type !== "update_matches" || !Array.isArray(message.data)) {
                console.error("Invalid WebSocket data format:", message);
                return;
              }
          
              updateCachedData((draft) => {
                if (!draft.data || !Array.isArray(draft.data.matches)) {
                  draft.data = { matches: [] };
                }
          
                const newMatches: Match[] = message.data;
                const existingTitles = new Set(draft.data.matches.map((match) => match.title));
          
                draft.data.matches = [
                  ...draft.data.matches.map(
                    (match) => newMatches.find((newMatch) => newMatch.title === match.title) || match
                  ),
                  ...newMatches.filter((newMatch) => !existingTitles.has(newMatch.title)),
                ];
              });
              dispatch(toggle_error(false))
            } catch (error) {
              dispatch(toggle_error(true))
              console.error("Error parsing WebSocket message:", error);
            }
          };          
          
        } catch (err) {
          console.error("WebSocket error:", err);
        }

        window.addEventListener('offline', () => {
          dispatch(toggle_error(true))
          console.log('Интернет-соединение потеряно');
        });

        await cacheEntryRemoved;
        socket.close();
      },
    }),
  }),
});

export const { useGetMatchesQuery } = matchTrackerApi;
