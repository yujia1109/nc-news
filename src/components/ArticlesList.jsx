import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        setIsLoading(true);
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
                return ( <ArticleCard article={article} />)          
            })}
        </ul>
        </>
    )
}

export default ArticlesList;