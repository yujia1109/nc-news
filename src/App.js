import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import { UserContext } from './contexts/User';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import ChangeUsers from './components/ChangeUsers';
import { useState } from 'react';


function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username:"tickle122",name:"Tom Tickle",
    avatar_url:"https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
  })

  return (
    <BrowserRouter>
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
    <div className="App">
      <Header />
      <Nav />
      <section>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/:topic" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/users" element={<ChangeUsers />} />
      </Routes>
      </section>     
    </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
