import { Outlet } from "react-router-dom"

function MyMain() {
  return (
    <main className="main">
      <Outlet />
    </main>
  )
}


export default MyMain