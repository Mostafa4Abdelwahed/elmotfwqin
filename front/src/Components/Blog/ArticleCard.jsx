import Button from "../../Components/ui/Button";

const ArticleCard = ({ article }) => {
  return (
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <img
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        src={article?.attributes?.thumbnail?.data?.attributes?.url}
        alt="blog"
      />
      <div className="p-6">
        <h1 className="title-font h-14 text-lg font-medium text-gray-900 mb-3">
          {article?.attributes?.title}
        </h1>
        <p className="leading-relaxed mb-5 line-clamp-2">
          {article?.attributes?.description}
        </p>
        <Button className="w-full" to={`${article?.id}`}>
          قرائة المقال
        </Button>
      </div>
    </div>
  );
};

export default ArticleCard;
