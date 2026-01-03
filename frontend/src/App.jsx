import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { WebDevelopment } from './components/services/WebDevelopment'
import { Services } from './pages/Services'
import { ServiceDetails } from './pages/ServiceDetails'
import { Blogs } from './pages/blogs'
import { BlogDetails } from './pages/BlogDetails'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
 

  return (
    <>
    <Header/>
    {/* <Services/> */}

    <Routes>
      <Route path="/" element={<Home />} />
     <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetails />} />
      <Route path="/404" element={<h1>Service Not Found</h1>} />
      <Route path="/blogs" element={<Blogs/>} />
       <Route path="/blogs/:slug" element={<BlogDetails />} />

    </Routes>

    <Footer/>
      
    </>
  )
}

export default App
