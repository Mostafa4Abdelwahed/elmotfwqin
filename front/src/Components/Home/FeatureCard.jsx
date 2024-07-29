
const FeatureCard = ({icon, title, children}) => {
  return (
    <div className="flex flex-col transition-all bg-white px-5 py-8 border rounded shadow-sm">
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/15">
      <img src={icon} className="w-[32px]" alt="Security Icon" />
    </div>
    <h6 className="mb-2 font-semibold leading-5">{title}</h6>
    <p className="text-sm leading-relaxed mt-2 text-gray-900">
      {children}
    </p>
  </div>
  )
}

export default FeatureCard