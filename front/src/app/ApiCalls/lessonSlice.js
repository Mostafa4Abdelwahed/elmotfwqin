import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const lessonSlice = createApi({
    reducerPath: "lessons",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`}),
    endpoints: (builder) => ({
        getAllLessons: builder.query({
            query: (unity) => `lessons?sort=createdAt:DESC&populate=*&filters[unity][slug][$eq]=${unity}`
        }),
        getSingleLesson: builder.query({
            query: (id) => `videos/${id}`
        })
    })
})

export const { useGetAllLessonsQuery, useGetSingleLessonQuery } = lessonSlice