import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router"
import Home from "./Pages/index"
import Login from "./Pages/auth/login"
import Register from "./Pages/auth/register"
import Teams from "./Pages/Team"
import ContactT from "./Pages/contact"
import BooksT from "./Pages/books"




function App() {
 
  return (
    <>
      <div className="container"> 
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path="/books" element={<BooksT/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/teams" element={<Teams/>} />
            <Route path="/contact" element={<ContactT/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App