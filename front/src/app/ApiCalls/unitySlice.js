import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CookieService from "../../Services/CookieService";

export const unitySlice = createApi({
    reducerPath: "unitis",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`}),
    tagTypes: ["unitis"],
    endpoints: (builder) => ({
        getAllUnitis: builder.query({
            query(args) {
                return {
                    url: `unities?sort=createdAt:DESC&populate=*&filters[${args.year}][$eq]=true&filters[language][slug][$eq]=${args.lang}&filters[term][$eq]=${args.term}`,
                    headers:{
                        Authorization: `Bearer ${CookieService.get("jwt")}`
                    }
                }
            }
        }),
        addToFavourite: builder.mutation({
            query: (args)=> ({
                url: `users/${args.userId}`,
                method: "PUT",
                headers:{
                    Authorization: `Bearer ${CookieService.get("jwt")}`
                },
                body: {
                    "favourites":
                    [
                        {
                            "id": args.unityId
                        }
                    ]
                }
            }),
            invalidatesTags: ["unitis"],
        }),
        getFavourites: builder.query({
            query: ()=> ({
                url: `users/me?populate[0]=favourites.language&fields[0]=fullName`,
                headers:{
                    Authorization: `Bearer ${CookieService.get("jwt")}`
                },
            }),
            providesTags: ["unitis"]
        }),
        removeFromFavourite: builder.mutation({
            query: (args)=> ({
                url: `users/${args.userId}`,
                method: "PUT",
                headers:{
                    Authorization: `Bearer ${CookieService.get("jwt")}`
                },
                body: {
                    favourites:{
                        disconnect: args.unityId
                    }
                }
            }),
            invalidatesTags: ["unitis"],
        }),
    })
})

export const { useGetAllUnitisQuery, useAddToFavouriteMutation, useGetFavouritesQuery, useRemoveFromFavouriteMutation } = unitySlice