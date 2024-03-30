import { RiNotification2Line } from "react-icons/ri"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

function MyHeader() {
  const localRouter = useLocation()
  const isActive = (path) => localRouter.pathname === path;
  return (
    <header className="header">
      <Link draggable="false" to={"/"}>
        <h1>lookomic</h1>
      </Link>

      <Link draggable="false" to={"/notification"} className={isActive("/notification") ? "active" : ""}>
        <i title="Notificações" className="iconLook" >< RiNotification2Line /></i>
      </Link>
    </header>
  )
}


export default MyHeader