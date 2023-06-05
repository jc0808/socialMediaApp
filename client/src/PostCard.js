import { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import CommentCard from "./CommentCard";
import { useDispatch, useSelector } from "react-redux";
import { loadData, selectCurrentUserID } from "./Store";


export default function PostCard({ id, content, image, firstName, lastName, likes, dislikes, comments, profileId, pImage }) {

    // const [likess, setLikes] = useState(likes.length);
    // const [dislikess, setDislikes] = useState(dislikes.length);
    // const [action, setAction] = useState(false);
    const [ShowCommentSection, setShowCommentSection] = useState(false);
    const [comment, setComment] = useState(null);
    // const f = new FileReader();
    // const i = f.readAsDataURL(image)

    const currentUserId = useSelector(selectCurrentUserID);
    const dispatch = useDispatch();

    // const loadMyData = useSelector(loadData);

    // const [liked, setLiked] = useState(null);
    // const [disliked, setDisliked] = useState(null);


    let findLike = likes.find(like => like.profile_id === currentUserId);
    let findDislike = dislikes.find(dislike => dislike.profile_id === currentUserId);

    const [iconLike, setIconLike] = useState(findLike ? '✅' : null);
    const [iconDislike, setIconDislike] = useState(findDislike ? '❌' : null);





    // The current user will only be able to like or dislike one time per post
    // and will only be able to like or dislike per porst
    function handleLikes() {

        const myPost = profileId === currentUserId ? true : false;

        const addLikeToMyPost = {
            type: 'addLikeToMyPost',
            payload: {
                id: id
            }
        }

        const removeLikeToMyPost = {
            type: 'removeLikeToMyPost',
            payload: {
                id: id,
                likeID: findLike?.id
            }
        }

        //for followers posts

        const addLikeToMyFPost = {
            type: 'addLikeToMyFPost',
            payload: {
                id: id
            }
        }

        const removeLikeToMyFPosts = {
            type: 'removeLikeToMyFPost',
            payload: {
                id: id,
                likeID: findLike?.id
            }
        }



        if (myPost) {
            if (!findDislike) {
                if (findLike) {
                    dispatch(removeLikeToMyPost);
                    setIconLike(null);

                    fetch(`/likes/${id}`, {
                        method: "DELETE",
                    })

                } else {
                    dispatch(addLikeToMyPost);
                    setIconLike('✅');

                    fetch('/likes', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "profile_id": currentUserId,
                            "post_id": id
                        })
                    })


                }
            }
        } else {


            if (!findDislike) {
                console.log("no dislike")
                if (findLike) {
                    dispatch(removeLikeToMyFPosts);
                    setIconLike(null);
                    fetch(`/likes/${id}`, {
                        method: "DELETE",
                    })

                } else {
                    dispatch(addLikeToMyFPost);
                    setIconLike('✅');

                    fetch('/likes', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "profile_id": currentUserId,
                            "post_id": id
                        })
                    })

                }
            }
        }



    }

    function handleDislikes() {

        const myPost = profileId === currentUserId ? true : false;

        const addDislikeToMyPost = {
            type: 'addDislikeToMyPost',
            payload: {
                id: id
            }
        }

        const RemoveDislikeToMyPost = {
            type: 'removeDislikeToMyPost',
            payload: {
                id: id,
                dislikeID: findDislike?.id
            }
        }

        //for followers posts
        const addDislikeToFPost = {
            type: 'addDislikeToMyFPost',
            payload: {
                id: id
            }
        }

        const RemoveDislikeToFPost = {
            type: 'removeDislikeToMyFPost',
            payload: {
                id: id,
                dislikeID: findDislike?.id
            }
        }




        if (myPost) {
            if (!findLike) {
                if (findDislike) {
                    dispatch(RemoveDislikeToMyPost);
                    setIconDislike(null);

                    fetch(`/dislikes/${id}`, {
                        method: "DELETE",
                    })




                } else {
                    dispatch(addDislikeToMyPost);
                    setIconDislike('❌');

                    fetch('/dislikes', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "profile_id": currentUserId,
                            "post_id": id
                        })
                    })



                }
            }
        } else {
            if (!findLike) {
                if (findDislike) {
                    dispatch(RemoveDislikeToFPost);
                    setIconDislike(null);

                    fetch(`/dislikes/${id}`, {
                        method: "DELETE",
                    })

                } else {
                    dispatch(addDislikeToFPost);
                    setIconDislike('❌');

                    fetch('/dislikes', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "profile_id": currentUserId,
                            "post_id": id
                        })
                    })


                }
            }
        }
    }

    function handleComments(e) {

        e.preventDefault();

        const myPost = profileId === currentUserId ? true : false;
        console.log(id)

        // const addCommentToMyPost = {
        //     type: 'addCommentToMyPost',
        //     payload: {
        //         id: id,
        //         content: comment
        //     }
        // }

        // const addCommentToMyFPost = {
        //     type: 'addCommentToMyFPost',
        //     payload: {
        //         id: id,
        //         content: comment
        //     }
        // }

        if (myPost) {

            fetch("/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    profile_id: currentUserId,
                    post_id: id,
                    content: comment
                })
            })

                .then(res => res.json())
                .then(comment => {
                    const addCommentToMyPost = {
                        type: 'addCommentToMyPost',
                        payload: {
                            id: comment.id,
                            post_id: comment.post_id,
                            content: comment.content
                        }
                    }
                    dispatch(addCommentToMyPost);

                })

        } else {

            fetch("/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    profile_id: currentUserId,
                    post_id: id,
                    content: comment
                })
            })

                .then(res => res.json())
                .then(comment => {
                    const addCommentToMyFPost = {
                        type: 'addCommentToMyFPost',
                        payload: {
                            id: comment.id,
                            post_id: comment.post_id,
                            content: comment.content
                        }
                    }

                    dispatch(addCommentToMyFPost);

                })

        }
    }

    function handleCommmentInput(e) {
        setComment(e.target.value);
    }





    const displayCommentCard = comments.map(comment => {

        return (
            <CommentCard key={comment.id} id={comment.id} content={comment.content} firstName={comment.firstName} lastName={comment.lastName} profile_id={comment.profile_id} />
        )
    })

    return (
        <>
            <Card id="postCard" className="p-3 mt-3">
                <Card.Title className='text-center'> <img style={{ width: "40px" }} src={pImage} alt="" />{`${firstName} ${lastName}`}</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
                <Card.Img variant="top" src={image} />

                <Card.Body>
                    <div className='d-flex p-1 justify-content-center'>
                        {/* <Card.Text className="me-5 " style={{ color: "grey" }}>0 ❤️ 0❌</Card.Text> */}
                        <Card.Text style={{ color: "grey", cursor: "pointer" }} onClick={() => setShowCommentSection((ShowCommentSection) => !ShowCommentSection)} >{comments.length} comments</Card.Text>


                    </div>
                    <Button className="me-2" variant="primary" onClick={() => handleLikes()}> {`${iconLike ? iconLike : ''}  ${likes.length} Likes`} </Button>
                    <Button variant="danger" onClick={() => handleDislikes()}>{` ${iconDislike ? iconDislike : ''} ${dislikes.length} Dislikes`}</Button>
                </Card.Body>
            </Card>

            {ShowCommentSection
                ?
                <Container className="commentsContainer">
                    <Container id="exitC">
                        <label onClick={() => setShowCommentSection((ShowCommentSection) => !ShowCommentSection)}>X</label>
                    </Container>

                    {displayCommentCard}

                    <Container className="commentInput">
                        <form onSubmit={handleComments}>
                            <input id='cInput' type='text' placeholder='Comment here ✍️...' onChange={handleCommmentInput} />
                            <button>✏️</button>
                        </form>
                    </Container>
                </Container>
                :
                null}

        </>
    )
}