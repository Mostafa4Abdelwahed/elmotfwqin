import ArticleCardSkeleton from "../../../Components/Skeletons/ArticleCardSkeleton";
import Pagination from "../../../Components/ui/Pagination";
import { useGetAllArticlesQuery } from "../../../app/ApiCalls/articleSlice";
import ArticleCard from "../../../Components/Blog/ArticleCard";
import Container from "../../../Components/ui/container";
import Header from "../../../Components/ui/Header";
import { useEffect, useState } from "react";

const Blog = () => {
  const [page, setPage] = useState("1");
  const { data: articles, isLoading, isError } = useGetAllArticlesQuery(page);
  const countPages = articles?.meta?.pagination?.pageCount;
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 p-10">
        <ArticleCardSkeleton />
        <ArticleCardSkeleton />
        <ArticleCardSkeleton />
      </div>
    );
  }
  if (isError) {
    return (
      <h1 className="text-4xl font-bold text-center py-5">
        خطاء في تحميل البيانات
      </h1>
    );
  }
  return (
    <div className="py-2.5">
      <Container>
        <Header title="المقالات" desc="جميع مقالات المنصة" />
        {articles?.data?.length >= 1 ? (
          <div className="grid grid-col-1 lg:grid-cols-3 gap-7 pb-7">
            {articles?.data?.map((article, key) => {
              return <ArticleCard key={key} article={article} />;
            })}
          </div>
        ) : (
          <h1 className="text-5xl text-center font-semibold mb-10">
            لاوجد مقالات
          </h1>
        )}
        <Pagination page={setPage} totalPages={countPages} />
      </Container>
    </div>
  );
};

export default Blog;
