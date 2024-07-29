const Row = ({title, subject, unity, mr}) => {
  return (
    <tr>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
        {title}
      </td>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
        {subject}
      </td>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
        {unity}
      </td>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
        {mr}
      </td>
    </tr>
  );
};

export default Row;
