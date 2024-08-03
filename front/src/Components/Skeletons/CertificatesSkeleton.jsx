import HeaderSkeleton from "./HeaderSkeleton"

const CertificatesSkeleton = () => {
  return (
    <div className="p-7">
        <HeaderSkeleton />
        <div className="grid grid-cols-1 lg:grid-cols-3 py-10 gap-5">
            <div className="bg-gray-200 w-full rounded p-2.5 animate-pulse">
                <div className="bg-gray-400 h-24 rounded" />
                <div className="bg-gray-300 h-10 rounded mt-5" />
                <div className="bg-gray-300 h-10 rounded mt-2.5" />
            </div>
            <div className="bg-gray-200 w-full rounded p-2.5 animate-pulse">
                <div className="bg-gray-400 h-24 rounded" />
                <div className="bg-gray-300 h-10 rounded mt-5" />
                <div className="bg-gray-300 h-10 rounded mt-2.5" />
            </div>
            <div className="bg-gray-200 w-full rounded p-2.5 animate-pulse">
                <div className="bg-gray-400 h-24 rounded" />
                <div className="bg-gray-300 h-10 rounded mt-5" />
                <div className="bg-gray-300 h-10 rounded mt-2.5" />
            </div>
        </div>
    </div>
  )
}

export default CertificatesSkeleton