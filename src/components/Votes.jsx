import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import IncreaseVotes from "./IncreaseVotes";
import DecreaseVotes from "./DecreaseVotes";

const Votes = ({article_id, votes}) => {
    const [displayVotes, setDispalyVotes] = useState(0);

    useEffect(() => {
        getArticleById(article_id).then((data) => {
            setDispalyVotes(data.article.votes)
        })
    }, [votes])


    return (
        <section>
            <p>Votes: {displayVotes}</p>
            <IncreaseVotes setDispalyVotes={setDispalyVotes}  article_id={article_id} />
            <DecreaseVotes setDispalyVotes={setDispalyVotes}  article_id={article_id}/>
        </section>
    )
}

export default Votes;