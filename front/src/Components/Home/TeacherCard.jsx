
const CategoryCard = ({ profile, name, role }) => {
  return (
    <div dir="rtl" className="p-4">
      <div className="flex-col  flex justify-center items-center">
        <div className="flex-shrink-0">
            <img
              alt="profile"
              src={profile}
              className="mx-auto object-cover rounded-full h-40 w-440 "
            />
        </div>
        <div className="mt-2 text-center flex flex-col">
          <span className="text-xl font-medium text-gray-600 dark:text-white">
            {name}
          </span>
          <span className="text-sm text-gray-400">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
