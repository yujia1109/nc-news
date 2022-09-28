const SingleComment = ({votes, author, body, created_at}) => {
    return (
        <li>
            <p>{body}</p>
            <p>{created_at}</p>
            <p>Post by: {author}</p>
            <p>Votes: {votes}</p>
        </li>
    )
}
export default SingleComment;