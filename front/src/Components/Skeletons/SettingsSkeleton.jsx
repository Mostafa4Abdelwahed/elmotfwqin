import HeaderSkeleton from "./HeaderSkeleton"

const SettingsSkeleton = () => {
  return (
    <div className="p-7">
        <HeaderSkeleton />
        <div className="grid sm:grid-cols-2 gap-8 py-10">
            <div className="bg-gray-200 w-full h-12 rounded animate-pulse" />
            <div className="bg-gray-200 w-full h-12 rounded animate-pulse" />
            <div className="bg-gray-200 w-full h-12 rounded animate-pulse" />
            <div className="bg-gray-200 w-full h-12 rounded animate-pulse" />
        </div>
        <div className="bg-gray-300 w-full rounded animate-pulse h-14" />
    </div>
  )
}

export default SettingsSkeleton