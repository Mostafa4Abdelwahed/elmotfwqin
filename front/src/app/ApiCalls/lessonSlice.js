import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CookieService from "../../Services/CookieService";

export const lessonSlice = createApi({
    reducerPath: "lessons",
    tagTypes: ["lesson"],
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
            query: (id)=> ({
                    url: `videos/${id}`,
                    headers:{
                        Authorization: `Bearer ${CookieService.get("jwt")}`
                    }
            }),
        }),
        getLessonsViews: builder.query({
            query({userId, page}) {
                return {
                    url: `histories?populate=user,video.lesson.unity.language&filters[user][id][$eq]=${userId}&sort=createdAt:DESC&pagination[pageSize]=10&pagination[page]=${page}`,
                    headers:{
                        Authorization: `Bearer ${CookieService.get("jwt")}`
                    }
                }
            },
            providesTags: ["lesson"]
        }),
        addLessonToViews: builder.mutation({
            query: (args)=> ({
                    url: `histories`,
                    method: "POST",
                    headers:{
                        Authorization: `Bearer ${CookieService.get("jwt")}`
                    },
                    body:{
                        data:{
                            video: args.videoId,
                            user: args.userId
                        }
                    }
            }),
            invalidatesTags: ["lesson"],
        }),
        checkLessonIsViewed: builder.query({
            query({userId, videoId}) {
                return {
                    url: `histories?populate=user,video.lesson.unity.language&filters[user][id][$eq]=${userId}&filters[video][id][$eq]=${videoId}&sort=createdAt:DESC`,
                    headers:{
                        Authorization: `Bearer ${CookieService.get("jwt")}`
                    }
                }
            },
            providesTags: ["lesson"]
        })
    })
})

export const { useGetAllLessonsQuery, useGetSingleLessonQuery, useGetLessonsViewsQuery, useAddLessonToViewsMutation, useCheckLessonIsViewedQuery } = lessonSlice