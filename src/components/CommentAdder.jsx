import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../utils/api";

const CommentAdder = ({setPostCount, article_id, setComments}) => {
    const [newComment, setNewComment] = useState('');
    const {loggedInUser} = useContext(UserContext);
    const [infoMessage, setInfoMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const commentBody = newComment;
        const minBody = 6;
        if(commentBody.length < minBody) {
            setInfoMessage(`Comment must be more than ${minBody} characters long!`)
        } else {
            setInfoMessage('Posting...');
            setPostCount((postCount) => {
                return postCount + 1
            })
            postComment(article_id, loggedInUser.username, commentBody).then((data) => {
              setComments((currComments) => {
                return [data.comment, ...currComments]
              })
              setNewComment('')  
              setInfoMessage("Posted!");
            }).catch((err) => {
                setInfoMessage("Error - please try later!")
            })
        }
    }

    return (
        <section>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="comment-add">Add a comment</label>
                <textarea id="comment-add" value={newComment} onChange={(e) => setNewComment(e.target.value)} ></textarea>
                <button>Add</button>
            </form>
           {infoMessage ? <p>{infoMessage}</p> : null} 
        </section>
    )
}

export default CommentAdder;