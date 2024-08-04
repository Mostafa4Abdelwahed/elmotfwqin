import { Link } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  return (
    <Link to={`quiz/${quiz?.id}`} className="border-2 relative border-primary p-1 rounded-lg shadow-sm">
      <div className="bg-gray-100 rounded-lg">
        <div>
          <img className="h-40 rounded w-full object-cover object-center" src={`${import.meta.env.VITE_SERVER_URL}${
              quiz?.attributes?.image?.data?.attributes?.url
            }`}
            alt="thumbnail"
          />
        </div>
        <div className="p-4">
          <h3 className="tracking-widest text-primary text-xs font-medium title-font">
            امتحان علي الوحدة كاملة
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
            {quiz?.attributes?.title}
          </h2>
        </div>
        <div className="badge absolute -top-4 -left-4 bg-primary border-2 shadow-md w-20 h-20 flex justify-center items-center text-lg font-bold rounded-full text-white">امتحان</div>
      </div>
    </Link>
  );
};

export default QuizCard;
