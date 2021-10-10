// // A mock function to mimic making an async request for data
// export async function fetchCoins() {
//   return fetch("https://coinranking1.p.rapidapi.com/coins", {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-host": "coinranking1.p.rapidapi.com",
//       "x-rapidapi-key": "e7dad98537msh6794aa3acc3598fp18c43cjsn35cf4e2be9c7"
//     }
//   })

//   // .then(response => {
//   //   // console.log(await response.json());
//   //   return response.json()
//   // })
//   // .catch(err => {
//   //   console.error(err);
//   // });
// }


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  ICoins,
  IRes
} from './types'
const cryptoApiHeaders = {
  'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
  'x-rapidapi-host': import.meta.env.VITE_CRYPTO_RAPIDAPI_HOST,
};
const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com/' }),
  endpoints: (builder) => ({
    coinList: builder.query<IRes<ICoins>, number>({
      query: count => createRequest(`/coins?limit=${count}`),
    }),
    exchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCoinListQuery,
  useExchangesQuery
} = cryptoApi