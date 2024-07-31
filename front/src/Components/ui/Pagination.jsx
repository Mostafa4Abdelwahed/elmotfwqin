import ReactPaginate from "react-paginate";

const Pagination = ({page, totalPages}) => {
  const handleClick = (data) => {
    page(data.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handleClick}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel="Back"
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-center flex-wrap gap-x-4 my-10"
        pageLinkClassName="w-10 h-10 text-gray-500 bg-white p-2 inline-flex items-center justify-center border border-gray-200 rounded-full transition-all duration-150 hover:text-primary hover:border-primary"
        nextLinkClassName="bg-primary hover:bg-primary/60 text-white px-7 py-2 rounded inline-flex items-center md:mr-8 mr-1"
        previousLinkClassName="bg-primary m-2.5 hover:bg-primary/60 text-white px-7 py-2 rounded inline-flex items-center md:mr-8 mr-1"
        breakLinkClassName="w-10 h-10 text-gray-500 bg-white p-2 inline-flex items-center justify-center border border-gray-200 rounded-full transition-all duration-150 hover:text-primary hover:border-primary"
        activeClassName="bg-primary text-white p-px rounded-full"
      />
    </>
  );
};

export default Pagination;
