import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import ArticlesList from './components/ArticlesList';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Display />
      <section>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
      </Routes>
      </section>     
    </div>
  );
}

export default App;
