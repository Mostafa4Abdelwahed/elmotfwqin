import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CookieService from "../../Services/CookieService";

export const lessonSlice = createApi({
    reducerPath: "lessons",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`}),
    endpoints: (builder) => ({
        getAllLessons: builder.query({
            query(unity) {
                return {
                    url: `lessons?sort=createdAt:DESC&populate=*&filters[unity][slug][$eq]=${unity}`,
                    headers:{
                        Authorization: `Bearer ${CookieService.get("jwt")}`
                    }
                }
            }
        }),
        getSingleLesson: builder.query({
            query(id) {
                return {
                    url: `videos/${id}`,
                    headers:{
                        Authorization: `Bearer ${CookieService.get("jwt")}`
                    }
                }
            }
        })
    })
})

export const { useGetAllLessonsQuery, useGetSingleLessonQuery } = lessonSlice