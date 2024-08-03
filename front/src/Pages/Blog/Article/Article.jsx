import { useParams } from "react-router-dom";
import { useGetSingleArticleQuery } from "../../../app/ApiCalls/articleSlice";
import ArticlePageSkeleton from "../../../Components/Skeletons/ArticlePageSkeleton";
import { useEffect } from "react";

const Article = () => {
  const params = useParams();
  const {
    data: article,
    isLoading,
    isError,
  } = useGetSingleArticleQuery(params?.id);
  useEffect(() => {
    window.scroll(0, 0)
  }, []);
  const date = new Date(
    article?.data?.attributes?.createdAt
  ).toLocaleDateString();
  if (isLoading) {
    return <ArticlePageSkeleton />;
  }
  if (isError) {
    return <h1 className="text-5xl py-20 text-center font-bold">Error</h1>;
  }
  return (
    <main className="py-px">
      <article className="prose prose-gray max-w-3xl md:mx-auto mx-4 my-12 dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            {article?.data?.attributes?.title}
          </h1>
          <p className="text-muted-foreground">تاريخ النشر: {date}</p>
        </div>
        <p className="mt-3.5">{article?.data?.attributes?.content}</p>
      </article>
    </main>
  );
};

export default Article;
