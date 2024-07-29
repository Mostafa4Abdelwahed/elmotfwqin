const Header = ({title, desc}) => {
  return (
    <div className="my-5">
      <h2 className="max-w-lg text-start text-3xl font-bold text-gray-900">
        {title}
      </h2>
      <p className="text-base text-start text-gray-700 md:text-lg">
        {desc}
      </p>
    </div>
  );
};

export default Header;
