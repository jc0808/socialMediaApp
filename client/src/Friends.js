// import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import FriendCard from "./FriendCard";
import profilePic from "./profilePic.png";
import { useSelector } from "react-redux";
import { selectCurrentUserID, selectMyFollowers } from "./Store";


export default function Friends({ followers, profileInfo }) {


    // const [allFriends, setAllFriends] = useState([]);

    // useEffect(() => {
    //     fetch(`/profiles/1`)
    //         .then(r => r.json())
    //         .then(data => setAllFriends(data))

    // }, [])

    // console.log(allFriends)

    // const myFollowers = useSelector(selectMyFollowers);

    const currentUserId = useSelector(selectCurrentUserID);

    const profileOwner = profileInfo.id === currentUserId;

    console.log(profileOwner)



    const displayFriendsCards = followers.map(follower => {
        console.log(follower)
        return (
            <FriendCard key={follower.id} id={follower.profile_id} firstName={follower.firstName} lastName={follower.lastName} profileOwner={profileOwner} />
        )
    });






    return (
        <>

            <div className="fContainer">
                <div className="post" style={{ backgroundColor: "yellow" }}>

                    <div className="searchBarP">
                        <div>
                            <input placeholder="Search 👀..." type="text" />
                        </div>
                    </div>
                    {/* <Card className="fCard">
                        <img src={profilePic} alt='profilePic' />
                        <Card.Title> Lucas C. </Card.Title>
                        <button className="vProfile">view profile</button>
                        <button className="removeF">remove friend</button>
                    </Card> */}

                    {displayFriendsCards ? displayFriendsCards : null}



                </div>
            </div>

        </>
    )
}