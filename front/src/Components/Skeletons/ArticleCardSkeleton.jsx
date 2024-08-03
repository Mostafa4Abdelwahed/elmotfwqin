
const ArticleSkeleton = () => {
  return (
    <div className="bg-gray-200 w-full min-h-60 rounded-md animate-pulse">
      <div className="bg-gray-300 rounded-t w-full h-48" />
      <div className="p-5">
      <div className="bg-gray-300 rounded rounded-t-2 w-full h-10 my-1" />
      <div className="bg-gray-300 rounded rounded-t-2 w-full h-10 my-2.5" />
      <div className="bg-gray-300 rounded rounded-t-2 w-28 h-10 my-2.5" />
      </div>
    </div>
  )
}

export default ArticleSkeleton