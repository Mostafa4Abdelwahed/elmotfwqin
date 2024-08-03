import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CookieService from "../../Services/CookieService";

export const languageSlice = createApi({
    reducerPath: "languages",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`}),
    endpoints: (builder) => ({
        getAllLanguages: builder.query({
            query(year) {
                return {
                    url: `languages?sort=createdAt:DESC&populate=*&filters[${year}][$eq]=true`,
                    headers:{
                        Authorization: `Bearer ${CookieService.get("jwt")}`
                    }
                }
            }
        }),
    })
})

export const { useGetAllLanguagesQuery } = languageSlice