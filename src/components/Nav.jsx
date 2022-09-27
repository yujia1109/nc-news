import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getAllTopics } from "../utils/api";
import { UserContext } from "../contexts/User";

const Nav = () => {
    const {loggedInUser} = useContext(UserContext);
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getAllTopics().then((data) => {
            setTopics(data)
        })
    }, [])

    return (
        <section>
            <Link to="/"><h2>Home</h2></Link>
            <div>
                <h3>Current user: {loggedInUser.username}</h3>
                <img className="user_img" src={loggedInUser.avatar_url} alt="user"/>
            </div>
            <Link to="/users">Change User</Link>
            <nav>
              <span>Category: </span>  {topics.map((topic) => {             
                    return <Link to={`/${topic.slug}` } key={topic.slug} >{topic.slug} </Link>
                })}
            </nav>
        </section>
    )
}

export default Nav;