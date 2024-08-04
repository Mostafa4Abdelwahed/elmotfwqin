import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CookieService from "../../Services/CookieService";

export const quizSlice = createApi({
    reducerPath: "quizes",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`}),
    endpoints: (builder) => ({
        getAllQuizesByUnitySlug: builder.query({
            query(unitySlug) {
                return {
                    url: `quizzes?populate=*&filters[unity][slug][$eq]=${unitySlug}`,
                    headers:{
                        Authorization: `Bearer ${CookieService.get("jwt")}`
                    }
                }
            }
        }),
        getSingleQuizById: builder.query({
            query(quizId) {
                return {
                    url: `quizzes/${quizId}?populate=*`,
                    headers:{
                        Authorization: `Bearer ${CookieService.get("jwt")}`
                    }
                }
            }
        }),
    })
})

export const { useGetAllQuizesByUnitySlugQuery, useGetSingleQuizByIdQuery } = quizSlice