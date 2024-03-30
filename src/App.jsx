import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/layout"
import Home from "./components/pages/Home"
import Search from "./components/pages/Search"
import Profile from "./components/pages/Profile"
import Upload from "./components/pages/Upload"
import Error from "./components/pages/Error"
import Notification from "./components/pages/Notification"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/*" element={<Error />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



