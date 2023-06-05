import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectUserProfiles } from "./Store";

export default function CommentCard({ content, firstName, lastName, profile_id }) {

    const profiles = useSelector(selectUserProfiles);

    const profileImage = profiles.find(profile => profile.id === profile_id).image


    return (
        <>
            <Container className="mt-2">
                <Container id="profileImage">
                    <img src={profileImage ? profileImage : "https://cdn-icons-png.flaticon.com/512/5556/5556529.png"} alt="profilePic" />
                    <label>{`${firstName} ${lastName}`}</label>
                    <label id="arrow">⤵</label>
                </Container>
                <Card>
                    <Card.Text>{content}</Card.Text>
                </Card>
            </Container>

        </>
    )
}