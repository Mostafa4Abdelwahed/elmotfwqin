import Slider from "react-slick";
import BlogCard from "../../Components/Home/BlogCard";
import Container from "../../Components/ui/container";

const BlogSection = () => {
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div id="blog" className="bg-white pt-10 pb-20">
      <Container>
        <div className="mb-8 md:mb-12">
          <h2 className="max-w-lg mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            احدث المقالات
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            اخر المقالات المضافة علي المنصة
          </p>
        </div>
        <Slider {...settings}>
          <BlogCard
            thumbnail="https://placehold.co/1280x720"
            title="عنوان المقال"
            desc="ملخص قصير للمقال يوضح النقاط الرئيسية والمحتوى المقدم."
          />
          <BlogCard
            thumbnail="https://placehold.co/1280x720"
            title="عنوان المقال"
            desc="ملخص قصير للمقال يوضح النقاط الرئيسية والمحتوى المقدم."
          />
          <BlogCard
            thumbnail="https://placehold.co/1280x720"
            title="عنوان المقال"
            desc="ملخص قصير للمقال يوضح النقاط الرئيسية والمحتوى المقدم."
          />
          <BlogCard
            thumbnail="https://placehold.co/1280x720"
            title="عنوان المقال"
            desc="ملخص قصير للمقال يوضح النقاط الرئيسية والمحتوى المقدم."
          />
          <BlogCard
            thumbnail="https://placehold.co/1280x720"
            title="عنوان المقال"
            desc="ملخص قصير للمقال يوضح النقاط الرئيسية والمحتوى المقدم."
          />
          <BlogCard
            thumbnail="https://placehold.co/1280x720"
            title="عنوان المقال"
            desc="ملخص قصير للمقال يوضح النقاط الرئيسية والمحتوى المقدم."
          />
        </Slider>
      </Container>
    </div>
  );
};

export default BlogSection;
