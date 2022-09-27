import { updateVotes } from "../utils/api"

const DecreaseVotes = ({setDispalyVotes, article_id}) => {
    const handleDecrease = () => {
        setDispalyVotes((currVotes) => {
            return currVotes = currVotes - 1
        })
        updateVotes(article_id, -1).catch(() => {
            setDispalyVotes((curr) => {
                return curr = curr + 1
        })})
    }



    return(
        <button onClick={handleDecrease}>-</button>
    )
}

export default DecreaseVotes;