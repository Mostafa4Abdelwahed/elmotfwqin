import Button from "../ui/Button";

const BlogCard = ({thumbnail, title, desc, link}) => {
  return (
    <div dir="rtl" className="bg-white mb-7 border-2 mx-5 rounded-lg overflow-hidden transition-transform transform">
      <img
        className="w-full h-48 object-cover"
        src={thumbnail}
        alt="thumbnail Blog" 
      />
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">
          {desc}
        </p>
        <Button className="inline-flex" to={link}>
          قرائة المقال
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
