import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import ArticlesList from './components/ArticlesList';
import TopicArticles from './components/TopicArticles';
import SingleArticle from './components/SingleArticle';


function App() {

  return (
    <div className="App">
      <Header />
      <Nav />
      <section>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/:topic" element={<TopicArticles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
      </section>     
    </div>
  );
}

export default App;
