import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllTopics } from "../utils/api";

const Nav = () => {
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        getAllTopics().then((data) => {
            setTopics(data)
        })
    }, [])

    return (
        <section>
            <Link to="/"><h2>Home</h2></Link>
            <nav>
                {topics.map((topic) => {
                    return <button key={topic.slug}>{topic.slug}</button>
                })}
            </nav>
        </section>
    )
}

export default Nav;