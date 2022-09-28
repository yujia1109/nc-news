import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import SingleComment from "./SingleComment";

const CommentsList = ({article_id, comment_count}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getCommentsByArticleId(article_id).then((data) => {
            setComments(data)
        })
    }, [article_id])

    return (
        <section>
        <h4>Comments: {comment_count} </h4>
         <ul>
            {comments.map(({comment_id, votes, author, body, created_at }) => {
                return <SingleComment key={comment_id} votes={votes} author={author} body={body} created_at={created_at} />
            })}
        </ul>
        </section>
       
    )
}

export default CommentsList;