import Home from "./pages/Home"
import About from "./pages/About.js";
import Article from "./pages/Article.js";
import ArticlesList from "./pages/ArticlesList.js";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound.js";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <div className="max-w-screen-md mx-auto pt-20">
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articleslist" element={<ArticlesList />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="*" element={<NotFound/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
