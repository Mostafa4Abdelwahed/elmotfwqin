import { Link } from "react-router-dom";

const LessonCard = ({title, desc, unity}) => {
  return (
    <Link to="eldars-awal" className="border-2 rounded-lg shadow-sm">
      <div className="bg-gray-100 rounded-lg">
        <div>
          <img
            className="h-40 rounded w-full object-cover object-center"
            src="https://dummyimage.com/720x400"
            alt="content"
          />
        </div>
        <div className="p-4">
          <h3 className="tracking-widest text-primary text-xs font-medium title-font">
            {unity}
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
            {title}
          </h2>
          <p className="leading-snug inline text-base">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LessonCard;
