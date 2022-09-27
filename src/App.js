import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import ArticlesList from './components/ArticlesList';
import TopicArticles from './components/TopicArticles'


function App() {

  return (
    <div className="App">
      <Header />
      <Nav />
      <section>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles/:topic" element={<TopicArticles />} />
      </Routes>
      </section>     
    </div>
  );
}

export default App;
