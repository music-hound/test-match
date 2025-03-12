import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://example.com/api" }),
    endpoints: (builder) => ({
        getLiveData: builder.query<string[], void>({
            queryFn: () => ({ data: [] }),
            async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
                const socket = new WebSocket("wss://example.com/socket");

                try {
                    await cacheDataLoaded;

                    socket.onmessage = (event) => {
                        const newData = JSON.parse(event.data);
                        updateCachedData((draft) => {
                            draft.push(newData);
                        });
                    };
                } catch (err) {
                    console.error("WebSocket error:", err);
                }
                
                await cacheEntryRemoved;
                socket.close();
            },
        }),
    }),
});

export const { useGetLiveDataQuery } = api;
