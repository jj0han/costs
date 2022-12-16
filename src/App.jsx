import "./styles/css/index.css"
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar"
import Main from "./components/layout/Main"
import Footer from "./components/layout/Footer"
import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import NewProject from "./components/pages/NewProject"
import Projects from "./components/pages/Projects";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Main>
        <Routes>
            <Route path="*" element={<Navigate to={"/costs"}/>}/> 
            {/* Qualquer link fora das rotas redireciona a página principal */}
            <Route path="/costs" element={<Home customClass="home"/>}/>
            <Route path="Projects" element={<Projects/>} customClass="project"/>
            <Route path="/NewProject" element={<NewProject customClass="newProject"/>}/>
            <Route path="/Company" element={<Company customClass="company"/>}/>
            <Route path="/Contact" element={<Contact customClass="contact"/>}/>
        </Routes>
      </Main>
      <Footer />
    </div>
  )
}