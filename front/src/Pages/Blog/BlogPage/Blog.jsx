import ArticleCardSkeleton from "../../../Components/Skeletons/ArticleCardSkeleton"
import Pagination from "../../../Components/ui/Pagination"
import { useGetAllArticlesQuery } from "../../../app/ApiCalls/articleSlice";
import ArticleCard from "../../../Components/Blog/ArticleCard";
import Container from "../../../Components/ui/container";
import Header from "../../../Components/ui/Header";
import { useState } from "react";

const Blog = () => {
  const [page, setPage] = useState("1")
  const { data: articles, isLoading, isError } = useGetAllArticlesQuery(page);
  const  countPages = articles?.meta?.pagination?.pageCount;
  if (isLoading) {
    return(
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 p-10">
        <ArticleCardSkeleton />
        <ArticleCardSkeleton />
        <ArticleCardSkeleton />
      </div>
    )
  }
  if (isError) {
    return <h1 className="text-4xl font-bold text-center py-5">Error</h1>
  }
  return (
    <div className="py-2.5">
      <Container>
        <Header
          title="المقالات"
          desc="المقالات المقالات المقالات المقالات المقالات المقالات"
        />
        <div className="grid grid-col-1 lg:grid-cols-3 gap-7 pb-7">
          {articles?.data?.map((article, key) => {
            return <ArticleCard key={key} article={article} />;
          })}
        </div>
        <Pagination page={setPage} totalPages={countPages} />
      </Container>
    </div>
  );
};

export default Blog;
