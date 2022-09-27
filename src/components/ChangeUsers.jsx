import { useEffect, useState, useContext } from "react";
import { getUsers } from "../utils/api";
import { UserContext } from "../contexts/User";


const ChangeUsers = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const { setLoggedInUser } = useContext(UserContext);

    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data)
            setIsLoading(false);
        })
    }, []);

    if(isLoading) {
        return(
            <p>Loading...</p>
        )
    };

    return (
        <section>
            <ul>
                {users.map((user) => {
                    return(
                        <li key={user.username}>
                            <h2>{user.username}</h2>
                            <img className="user_img" src={user.avatar_url} alt="user" />
                            <button onClick={() => setLoggedInUser(user)} >
                                Select this user!
                            </button>
                        </li>
                    )

                })}
            </ul>
        </section>
    )
    }

export default ChangeUsers;