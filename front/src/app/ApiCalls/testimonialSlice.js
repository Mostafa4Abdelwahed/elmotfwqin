import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testimonialSlice = createApi({
    reducerPath: "testimonials",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`}),
    endpoints: (builder) => ({
        getAllTestimonails: builder.query({
            query: () => "testimonials"
        }),
    })
})

export const { useGetAllTestimonailsQuery } = testimonialSlice