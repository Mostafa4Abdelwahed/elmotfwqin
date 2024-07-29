import { Link } from "react-router-dom";

const SmallCard = ({title, thumbnail, link}) => {
  return (
    <Link to={link} className="p-4 rounded-xl w-full bg-gray-50">
      <div className="block relative h-36 rounded-xl overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={thumbnail}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-gray-900 text-center text-lg font-medium">{title}</h2>
      </div>
    </Link>
  );
};

export default SmallCard;
