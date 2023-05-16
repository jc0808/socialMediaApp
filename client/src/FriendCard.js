import { useDispatch } from "react-redux";


export default function FriendCard({ id, firstName, lastName, profileOwner }) {

    const dispatch = useDispatch();

    function handleViewProfile() {
        console.log(id)
    }

    const handleRemoveFollower = () => {
        const removeFollower = {
            type: 'removeMyFollower',
            payload: {
                id: id
            }
        };

        console.log(id)

        dispatch(removeFollower)
    }
    return (
        <>
            <div className="fCard mt-2">
                {/* <img src="" alt='profilePic' /> */}
                <label> {`${firstName} ${lastName}`} </label>
                <button className="vProfile" onClick={handleViewProfile}>view profile</button>
                {profileOwner ? <button className="removeF" onClick={handleRemoveFollower}>remove follower</button> : null}
            </div>
        </>
    )

}