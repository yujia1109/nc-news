import { Link } from 'react-router-dom';

const ArticleCard = ({article}) => {
    return (
        <li >
                            <Link to={`/articles/${article.article_id}`} >
                            <h3>{article.title}</h3>
                            </Link>
                            <p>Author: {article.author}</p>
                            <p>Topic: {article.topic}</p>
                            <p>Created_at: {article.created_at} </p>
                            <p>Votes: {article.votes}</p>
                            <p>Comments: {article.comment_count}</p>
                        </li>
    )
}

export default ArticleCard;