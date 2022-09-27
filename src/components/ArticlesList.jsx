import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import { Link } from 'react-router-dom';
import Votes from "./Votes";

const ArticlesList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        getAllArticles().then((data) => {
            setArticles(data)
            setIsLoading(false);
        })
    }, []);

    if(isLoading) {
        return(
            <p>Loading...</p>
        )
    };

    return (
        <>
        <ul>
            {articles.map((article) => {
                return (
                        <li key={article.article_id}>
                            <Link >
                            <h3>{article.title}</h3>
                            </Link>
                            <p>Author: {article.author}</p>
                            <p>Topic: {article.topic}</p>
                            <Votes votes={article.votes}/>
                            <p>Comments: {article.comment_count}</p>
                        </li>
                )
                
            })}
        </ul>
        </>
    )
}

export default ArticlesList;