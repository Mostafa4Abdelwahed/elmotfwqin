const Row = ({lesson}) => {
  const date = new Date(lesson?.attributes?.createdAt);
  let  dateHandle = date.toLocaleDateString();
  return (
    <tr>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
        {lesson?.attributes?.video?.data?.attributes?.lesson?.data?.attributes?.title}
      </td>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
        {lesson?.attributes?.video?.data?.attributes?.lesson?.data?.attributes?.unity?.data?.attributes?.language?.data?.attributes?.name}
      </td>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
        {lesson?.attributes?.video?.data?.attributes?.lesson?.data?.attributes?.unity?.data?.attributes?.name}
      </td>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
        {lesson?.attributes?.video?.data?.attributes?.teacherName}
      </td>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
        {dateHandle}
      </td>
    </tr>
  );
};

export default Row;
