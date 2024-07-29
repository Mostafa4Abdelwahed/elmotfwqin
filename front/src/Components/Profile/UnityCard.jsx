import { Link } from "react-router-dom";

const UnityCard = ({ title, desc, saved }) => {
  return (
    <div className="relative max-w-xs border border-solid border-gray-200 rounded-2xl transition-all duration-500 ">
      <div className="block overflow-hidden">
        <img
          src="https://pagedone.io/asset/uploads/1695365240.png"
          alt="Card image"
        />
      </div>
      <div className="p-4">
        <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
          {title}
        </h4>
        <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
          {desc}
        </p>
        <Link
          to="/profile/arabic/units/elwehda-alolah"
          className="bg-primary hover:bg-primary/70 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold"
        >
          عرض المزيد
        </Link>
      </div>
      <div className="absolute top-2 right-2.5 cursor-pointer border-2 p-2 rounded-full bg-white text-gray-500">
        {saved ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default UnityCard;
