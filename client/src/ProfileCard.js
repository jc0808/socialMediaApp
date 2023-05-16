export default function ProfileCard({ id, firstName, lastName, image, profileView }) {



    function handleViewProfile() {
        profileView(id)
    }
    return (
        <>
            <div className="fCard mt-2">
                <img src="https://cdn-icons-png.flaticon.com/512/5556/5556529.png" alt='profilePic' />
                <label> {`${firstName} ${lastName}`} </label>
                <button className="vProfile" onClick={handleViewProfile}>view profile</button>
            </div>
        </>
    )

}