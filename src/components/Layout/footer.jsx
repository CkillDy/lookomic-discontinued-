import {
  RiHomeHeartLine,
  RiSearchLine,
  RiUpload2Line,
  RiUser6Line
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


function MyFooter() {
  const localRouter = useLocation();
  const isActive = (path) => localRouter.pathname === path;

  return (
    <footer className="footer">
      <nav>
        <Link draggable="false" to="/" className={isActive("/") ? "active" : ""}>
          <i className="iconLook" >
            < RiHomeHeartLine />
          </i>
        </Link>
        <Link draggable="false" to="/search" className={isActive("/search") ? "active" : ""}>
          <i className="iconLook" >
            <RiSearchLine />
          </i>
        </Link>
        <Link draggable="false" to="/upload" className={isActive("/upload") ? "active" : ""}>
          <i className="iconLook" >
            <RiUpload2Line />
          </i>
        </Link>
        <Link draggable="false" to="/profile" className={isActive("/profile") ? "active" : ""}>
          <i className="iconLook" >
            <RiUser6Line />
          </i>
        </Link>
      </nav>
    </footer>

  )
}

export default MyFooter
