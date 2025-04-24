import { BrowserRouter, Route, Routes } from "react-router"
import "./App.css"
import About from "./components/pages/about/About"
import Layout from "./components/pages/layout/Layout"
import Home from "./components/pages/home/Home"
import Contact from "./components/pages/contact/Contact"
import Prints from "./components/pages/prints/Prints"

export const App = () => (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
      {/* <Route index element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>          
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/prints" element={<Prints/>}></Route> */}
    </Route>
  </Routes>
  </BrowserRouter>
)
