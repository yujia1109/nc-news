import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentAdder from "./CommentAdder";
import SingleComment from "./SingleComment";

const CommentsList = ({article_id, comment_count}) => {
    const [comments, setComments] = useState([]);
    const [postCount, setPostCount] = useState(0);
    

    useEffect(() => {
        getCommentsByArticleId(article_id).then((data) => {
            setComments(data)
        })
    }, [postCount])

    return (
        <section >
        <h4>Comments: {comment_count} </h4>
        <CommentAdder setPostCount={setPostCount} article_id={article_id} setComments={setComments} />
         <ul>
            {comments.map(({comment_id, votes, author, body, created_at }) => {
                return <SingleComment key={comment_id} comment_id={comment_id} votes={votes} author={author} body={body} created_at={created_at}  />
            })}
        </ul>
        </section>
       
    )
}

export default CommentsList;