import CookieService from "../../Services/CookieService"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`}),
    endpoints: (builder) => ({
        getUser: builder.query({
            query() {
                return {
                    url: "users/me?populate=*",
                    headers:{
                        Authorization: `Bearer ${CookieService.get("jwt")}`
                    }
                }
            }
        }),
        updateUser: builder.mutation({
            query:(args)=> ({
              url: `users/${args.id}`,
              method: "PUT",
              headers:{
                Authorization: `Bearer ${CookieService.get("jwt")}`
              },
              body: args.user,
            })
        })
    })
})

export const { useGetUserQuery, useUpdateUserMutation } = userSlice;