import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById } from "../utils/api";
import CommentsList from "./CommentsList";
import Votes from './Votes'


const SingleArticle = () => {
    const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [article, setArticle] = useState('');
    useEffect(() => {
        setIsLoading(true);
        getArticleById(article_id).then((data) => {
            setArticle(data.article)
            setIsLoading(false);
        })
   }, [article_id])

   if(isLoading) {
       return (
          <p>Loading...</p>
       )
    };

    return(
        <section>
            <h3>{article.title}</h3>
            <p>By {article.author}</p>
            <p>Date: {article.created_at}</p>
            <p>{article.body}</p>           
            <Votes article_id={article.article_id} votes={article.votes}/>
            <CommentsList article_id={article.article_id} comment_count={article.comment_count}/>
        </section>
    )
}

export default SingleArticle;