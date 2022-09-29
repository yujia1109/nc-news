import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const TopicArticles = () => {
    const {topic} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const[articlesByTopic, setArticlesByTopic] = useState([]);
    const [params, setParams] = useState({});
    const [orderBy, setOrderBy] = useState('asc')

    useEffect(() => {
        setIsLoading(true);
        getAllArticles(params).then((data) => {
           setArticlesByTopic(data)
           setIsLoading(false);
        })
    }, [params]);

    useEffect(() => {
        setParams({topic})
    }, [topic])

    const handleDate = (column) => {
        setParams((currParams) => {
            return {...currParams, sort_by: column}
        })
    }

    const handleVotes = (column) => {
        setParams((currParams) => {
            return {...currParams, sort_by: column}
        })
    }

    const handleComment = (column) => {
        setParams((currParams) => {
            return {...currParams, sort_by: column}
        })
    }

    const switchOrder = () => {
        setParams((currParams) => {
            return {...currParams, order: orderBy}
        })

        setOrderBy((currOrder) => {
            return currOrder === 'asc' ? "desc" : 'asc'
        })

    }


    if(isLoading) {
        return(
            <p>Loading...</p>
        )
    };

    return(
        <section>
            <span>Sort by: </span>
            <button onClick={() => handleDate('created_at')}>date</button>
            <button onClick={() => handleComment('comment_count')}>comments</button>
            <button onClick={() => handleVotes('votes')}>votes</button> 
            <button onClick={() => switchOrder()}>{orderBy ==='asc'? 'asc' : 'desc'}</button>
             <ul>
            {articlesByTopic.map((article) => {
                return <ArticleCard article={article} key={article.article_id} />
            })}
        </ul>
        </section>
       
    )
}

export default TopicArticles;