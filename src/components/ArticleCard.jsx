import { Link } from 'react-router-dom';
import Votes from './Votes'

const ArticleCard = ({article}) => {
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
}

export default ArticleCard;