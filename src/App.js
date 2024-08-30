import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Topbar from './components/topbar/Topbar';
import Blog from './pages/blogPage/Blog';
import Blogpost from './components/blogPost/Blogpost';
import Project from './pages/projects/Project';
import Footer from './components/newFooter/Footer';
import CardContainer from './components/test/ProjectPage';
import BlogNav from './components/blogNavbar/BlogNav';
function App() {
  return (
    <Router>
      <BlogNav/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
