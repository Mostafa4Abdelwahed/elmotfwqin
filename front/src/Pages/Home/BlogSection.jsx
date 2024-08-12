import Slider from "react-slick";
import BlogCard from "../../Components/Home/BlogCard";
import Container from "../../Components/ui/container";
import { useGetAllArticlesQuery } from "../../app/ApiCalls/articleSlice";
import ArticleCardSkeleton from "../../Components/Skeletons/ArticleCardSkeleton";
import Button from "../../Components/ui/Button";

const BlogSection = () => {
  const { data: articles, isLoading, isError } = useGetAllArticlesQuery(1);
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
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (isError) {
    return (
      <h1 className="text-4xl text-center font-bold">خطاء في تحميل المقالات</h1>
    );
  }
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10">
        <ArticleCardSkeleton />
        <ArticleCardSkeleton />
        <ArticleCardSkeleton />
      </div>
    );
  }
  return (
    <div id="blog" className="bg-white pt-10 pb-20">
      <Container>
        <div className="mb-8 md:mb-12 flex flex-wrap items-center justify-between">
          <div>
            <h2 className="max-w-lg mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              احدث المقالات
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              اخر المقالات المضافة علي المنصة
            </p>
          </div>
          <Button to="blog">عرض المزيد</Button>
        </div>
        {articles?.data?.length >= 1 ? (
          <Slider {...settings}>
            {articles?.data?.slice(0, 5).map((article, key) => {
              return <BlogCard key={key} article={article} />;
            })}
          </Slider>
        ) : (
          <h1 className="text-5xl text-center font-semibold mb-3">
            لا يوجد مقالات
          </h1>
        )}
      </Container>
    </div>
  );
};

export default BlogSection;
