import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    gettodoByName: builder.query({
      query: (name) => `todo/${name}`,
    }),
  }),
})

export const { useGettodoByNameQuery } = todoApi