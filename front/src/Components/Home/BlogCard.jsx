import Button from "../ui/Button";

const BlogCard = ({ article }) => {  
  return (
    <div
      dir="rtl"
      className="bg-white mb-7 border-2 mx-5 rounded-lg overflow-hidden transition-transform transform"
    >
      <img
        className="w-full h-48 object-cover"
        src={article?.attributes?.thumbnail?.data?.attributes?.url}
        alt="thumbnail Blog"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {article?.attributes?.title}
        </h2>
        <p className="text-gray-700 mb-4 line-clamp-2">{article?.attributes?.description}</p>
        <Button to={`blog/${article?.id}`} className="inline-flex">قرائة المقال</Button>
      </div>
    </div>
  );
};

export default BlogCard;
