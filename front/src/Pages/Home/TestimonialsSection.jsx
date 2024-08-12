import Slider from "react-slick";
import TestimonialCard from "../../Components/Home/TestimonialCard";
import Container from "../../Components/ui/container";
import { useGetAllTestimonailsQuery } from "../../app/ApiCalls/testimonialSlice";

const TestimonialsSection = () => {
  const { data: testimonials, isLoading, isError } = useGetAllTestimonailsQuery();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (isError){
    return <h1 className="text-4xl text-center font-bold">خطاء في تحميل التقييمات</h1>
  }
  return (
    <div id="teachers" className="bg-gray-100 pt-10 pb-20">
      <Container>
        <div className="mb-8 md:mb-12">
          <h2 className="max-w-lg mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            تقييمات الطلاب
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            تقييمات الطلاب علي المنصة
          </p>
        </div>
        <Slider dir="rtl" {...settings}>
          {testimonials?.data?.map((testimonial, key) => {
            return (
              <TestimonialCard
                key={key}
                stars={testimonial?.attributes?.star}
                name={testimonial?.attributes?.name}
                level={testimonial?.attributes?.level}
                comment={testimonial?.attributes?.comment}
              />
            );
          })}
        </Slider>
      </Container>
    </div>
  );
};

export default TestimonialsSection;
