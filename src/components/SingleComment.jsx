import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { deleteComment } from "../utils/api";

const SingleComment = ({comment_id, votes, author, body, created_at}) => {
    const {loggedInUser} = useContext(UserContext);
    const [highlighted, setHighlighted] = useState(false);
    const [deleteInfo, setDeleteInfo] = useState(false)
    const [buttonDisable, setButtonDisable] = useState('')
    
    const handleDelete = () => {
        setButtonDisable('disabled')
        setDeleteInfo(true)
        deleteComment(comment_id).then(() => { })
        .catch((err) => {
           setButtonDisable('')
           setDeleteInfo(false)
           setHighlighted(false)
        })
       setHighlighted((currHighlighted) => {
        return !currHighlighted
       })
    }

    return (
        <section className={`comment-container ${highlighted ? 'comment-container--highlighted' : ''}`} >
            <li>
            <p>{body}</p>
            <p>{created_at}</p>
            <p>Post by: {author}</p>
            <p>Votes: {votes}</p>
            <p>{author===loggedInUser.username ? <button onClick={ handleDelete } disabled={buttonDisable} >delete</button> : null}</p>
            <p>{deleteInfo ? 'Comment deleted, please refresh page!' : ''}</p>
        </li>
        </section> 
    )
}
export default SingleComment;
