import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";

const TopicArticles = () => {
    const {topic} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const[articlesByTopic, setArticlesByTopic] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        getArticlesByTopic(topic).then((data) => {
           setArticlesByTopic(data)
           setIsLoading(false);
        })
    }, [topic]);

    if(isLoading) {
        return(
            <p>Loading...</p>
        )
    };

    return(
        <ul>
            {articlesByTopic.map((article) => {
                return <ArticleCard article={article} key={article.article_id} />
            })}
        </ul>
    )
}

export default TopicArticles;