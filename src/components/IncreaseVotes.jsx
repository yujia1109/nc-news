import { updateVotes } from "../utils/api"

const IncreaseVotes = ({setDispalyVotes, article_id}) => {
    const handleIncrease = () => {
        setDispalyVotes((currVotes) => {
            return currVotes = currVotes + 1
        })
        updateVotes(article_id, 1).catch(() => {
            setDispalyVotes((curr) => {
                return curr = curr - 1
        })})
    }

    return(
        <button onClick={handleIncrease}>+</button>
    )
}

export default IncreaseVotes;