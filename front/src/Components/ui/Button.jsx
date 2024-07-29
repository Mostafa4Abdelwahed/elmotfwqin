import { Link } from "react-router-dom"

const Button = ({children, to, type, className, click}) => {
  return (
    <Link onClick={click} to={to} className={`border-primary block text-center border-2 px-5 py-2.5 rounded transition-all ${className} ${type === "outline" ? "hover:bg-primary hover:text-white text-primary" : "bg-primary hover:bg-white hover:border-primary hover:text-primary text-white"}`}>{children}</Link>
  )
}

export default Button