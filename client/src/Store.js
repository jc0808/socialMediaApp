import { createStore } from "redux";







export const currentUser = {
    "id": 1,
    "firstName": "Joshua",
    "lastName": "Campos",
    "user_id": 1,
    "location": "USA",
    "followers_posts": [
        {
            "posts": {
                "firstName": "Lucas",
                "lastName": "Campos",
                "post": {
                    "id": 2,
                    "profile_id": 2,
                    "content": "Went on a walk today",
                    "image": null,
                    "created_at": "2023-05-09T19:17:37.949Z",
                    "updated_at": "2023-05-09T19:17:37.949Z"
                },
                "likes": [
                    {
                        "id": 3,
                        "profile_id": 1,
                        "post_id": 2,
                        "created_at": "2023-05-09T19:17:37.967Z",
                        "updated_at": "2023-05-09T19:17:37.967Z"
                    },
                    {
                        "id": 5,
                        "profile_id": 3,
                        "post_id": 2,
                        "created_at": "2023-05-09T19:17:37.973Z",
                        "updated_at": "2023-05-09T19:17:37.973Z"
                    }
                ],
                "dislikes": [

                ],
                "comments": [
                    {
                        "id": 3,
                        "firstName": "Joshua",
                        "lastName": "Campos",
                        "content": "Nice, hope you enjoyed it!",
                        "profile_id": 1,
                        "created_at": "2023-05-09T19:17:38.013Z"
                    }
                ]
            }
        },
        {
            "posts": {
                "firstName": "Shafeska",
                "lastName": "Callimore",
                "post": {
                    "id": 3,
                    "profile_id": 3,
                    "content": "Went to Amsterdan last week",
                    "image": null,
                    "created_at": "2023-05-09T19:17:37.951Z",
                    "updated_at": "2023-05-09T19:17:37.951Z"
                },
                "likes": [
                    {
                        "id": 4,
                        "profile_id": 1,
                        "post_id": 3,
                        "created_at": "2023-05-09T19:17:37.970Z",
                        "updated_at": "2023-05-09T19:17:37.970Z"
                    },
                    {
                        "id": 6,
                        "profile_id": 2,
                        "post_id": 3,
                        "created_at": "2023-05-09T19:17:37.976Z",
                        "updated_at": "2023-05-09T19:17:37.976Z"
                    }
                ],
                "dislikes": [

                ],
                "comments": [
                    {
                        "id": 4,
                        "firstName": "Joshua",
                        "lastName": "Campos",
                        "content": "how was it?",
                        "profile_id": 1,
                        "created_at": "2023-05-09T19:17:38.015Z"
                    }
                ]
            }
        }
    ],
    "user_profiles": [
        {
            "id": 1,
            "firstName": "Joshua",
            "lastName": "Campos",
            "followers": [
                {
                    "id": 3,
                    "profile_id": 2,
                    "following_id": 1,
                    "followers_profile": {
                        "firstName": "Lucas",
                        "lastName": "Campos"
                    }
                },
                {
                    "id": 4,
                    "profile_id": 3,
                    "following_id": 1,
                    "followers_profile": {
                        "firstName": "Shafeska",
                        "lastName": "Callimore"
                    }
                }
            ],
            "posts": [
                {
                    "id": 1,
                    "content": "How's everyone day going?",
                    "profile_id": 1,
                    "my_likes": [
                        {
                            "id": 1,
                            "profile_id": 2,
                            "post_id": 1,
                            "created_at": "2023-05-09T19:17:37.961Z",
                            "updated_at": "2023-05-09T19:17:37.961Z"
                        },
                        {
                            "id": 2,
                            "profile_id": 3,
                            "post_id": 1,
                            "created_at": "2023-05-09T19:17:37.964Z",
                            "updated_at": "2023-05-09T19:17:37.964Z"
                        }
                    ],
                    "my_dislikes": [

                    ],
                    "my_comments": [
                        {
                            "id": 1,
                            "firstName": "Lucas",
                            "lastName": "Campos",
                            "content": "My was great Joshua!",
                            "profile_id": 2,
                            "created_at": "2023-05-09T19:17:38.006Z"
                        },
                        {
                            "id": 2,
                            "firstName": "Shafeska",
                            "lastName": "Callimore",
                            "content": "It was awesome!",
                            "profile_id": 3,
                            "created_at": "2023-05-09T19:17:38.010Z"
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "firstName": "Lucas",
            "lastName": "Campos",
            "followers": [
                {
                    "id": 1,
                    "profile_id": 1,
                    "following_id": 2,
                    "followers_profile": {
                        "firstName": "Joshua",
                        "lastName": "Campos"
                    }
                }
            ],
            "posts": [
                {
                    "id": 2,
                    "content": "Went on a walk today",
                    "profile_id": 2,
                    "my_likes": [
                        {
                            "id": 3,
                            "profile_id": 1,
                            "post_id": 2,
                            "created_at": "2023-05-09T19:17:37.967Z",
                            "updated_at": "2023-05-09T19:17:37.967Z"
                        },
                        {
                            "id": 5,
                            "profile_id": 3,
                            "post_id": 2,
                            "created_at": "2023-05-09T19:17:37.973Z",
                            "updated_at": "2023-05-09T19:17:37.973Z"
                        }
                    ],
                    "my_dislikes": [

                    ],
                    "my_comments": [
                        {
                            "id": 3,
                            "firstName": "Joshua",
                            "lastName": "Campos",
                            "content": "Nice, hope you enjoyed it!",
                            "profile_id": 1,
                            "created_at": "2023-05-09T19:17:38.013Z"
                        }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "firstName": "Shafeska",
            "lastName": "Callimore",
            "followers": [
                {
                    "id": 2,
                    "profile_id": 1,
                    "following_id": 3,
                    "followers_profile": {
                        "firstName": "Joshua",
                        "lastName": "Campos"
                    }
                },
                {
                    "id": 5,
                    "profile_id": 2,
                    "following_id": 3,
                    "followers_profile": {
                        "firstName": "Lucas",
                        "lastName": "Campos"
                    }
                }
            ],
            "posts": [
                {
                    "id": 3,
                    "content": "Went to Amsterdan last week",
                    "profile_id": 3,
                    "my_likes": [
                        {
                            "id": 4,
                            "profile_id": 1,
                            "post_id": 3,
                            "created_at": "2023-05-09T19:17:37.970Z",
                            "updated_at": "2023-05-09T19:17:37.970Z"
                        },
                        {
                            "id": 6,
                            "profile_id": 2,
                            "post_id": 3,
                            "created_at": "2023-05-09T19:17:37.976Z",
                            "updated_at": "2023-05-09T19:17:37.976Z"
                        }
                    ],
                    "my_dislikes": [

                    ],
                    "my_comments": [
                        {
                            "id": 4,
                            "firstName": "Joshua",
                            "lastName": "Campos",
                            "content": "how was it?",
                            "profile_id": 1,
                            "created_at": "2023-05-09T19:17:38.015Z"
                        }
                    ]
                }
            ]
        },
        {
            "id": 4,
            "firstName": "Marko",
            "lastName": "Ramirez",
            "followers": [

            ],
            "posts": [

            ]
        }
    ],
    "followers": [
        {
            "id": 3,
            "profile_id": 2,
            "following_id": 1,
            "followers_profiles": {
                "firstName": "Lucas",
                "lastName": "Campos"
            }
        },
        {
            "id": 4,
            "profile_id": 3,
            "following_id": 1,
            "followers_profiles": {
                "firstName": "Shafeska",
                "lastName": "Callimore"
            }
        }
    ],
    "posts": [
        {
            "id": 1,
            "profile_id": 1,
            "content": "How's everyone day going?",
            "image": null,
            "my_likes": [
                {
                    "id": 1,
                    "profile_id": 2,
                    "post_id": 1,
                    "created_at": "2023-05-09T19:17:37.961Z",
                    "updated_at": "2023-05-09T19:17:37.961Z"
                },
                {
                    "id": 2,
                    "profile_id": 3,
                    "post_id": 1,
                    "created_at": "2023-05-09T19:17:37.964Z",
                    "updated_at": "2023-05-09T19:17:37.964Z"
                }
            ],
            "my_dislikes": [

            ],
            "my_comments": [
                {
                    "id": 1,
                    "firstName": "Lucas",
                    "lastName": "Campos",
                    "content": "My was great Joshua!",
                    "profile_id": 2,
                    "created_at": "2023-05-09T19:17:38.006Z"
                },
                {
                    "id": 2,
                    "firstName": "Shafeska",
                    "lastName": "Callimore",
                    "content": "It was awesome!",
                    "profile_id": 3,
                    "created_at": "2023-05-09T19:17:38.010Z"
                }
            ]
        }
    ]
};

const addPost = (state, action) => {

    return {
        ...state,
        posts: [{
            id: state.posts.length === 0 ? 1 : state.posts[state.posts.length - 1].id + 1,
            content: action.payload.content,
            image: action.payload.image,
            profile_id: state.id,
            my_likes: [],
            my_comments: [],
            my_dislikes: []
        }, ...state.posts]
    };
}


const removePost = (state, action) => {
    return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload.id)
    };
}


const addCommentToMyFP = (state, action) => {
    return {
        ...state,
        followers_posts: state.followers_posts.map(element => {
            if (element.posts.post.id === action.payload.id) {
                return {
                    posts: {
                        ...element.posts,
                        comments: [...element.posts.comments, {
                            id: element.posts.comments.length === 0 ? 1 : element.posts.comments[element.posts.comments.length - 1].id + 1,
                            firstName: state.firstName,
                            lastName: state.lastName,
                            profile_id: state.id,
                            post_id: action.payload.id,
                            content: action.payload.content
                        }]
                    }
                }
            } else {
                return {
                    posts: {
                        ...element.posts
                    }
                }
            }
        })

    }
}

const addCommentToMyPost = (state, action) => {
    return {
        ...state,
        posts: state.posts.map(post => {


            return {
                ...post,
                my_comments: [...post.my_comments, {
                    id: post.my_comments.length === 0 ? 1 : post.my_comments[post.my_comments.length - 1].id + 1,
                    firstName: state.firstName,
                    lastName: state.lastName,
                    profile_id: state.id,
                    post_id: action.payload.id,
                    content: action.payload.content
                }]
            }
        })
    }
}

const addLikeToMyFP = (state, action) => {
    return {
        ...state,
        followers_posts: state.followers_posts.map(element => {
            if (element.posts.post.id === action.payload.id) {
                return {
                    posts: {
                        ...element.posts,
                        likes: [...element.posts.likes, {
                            id: element.posts.likes.length === 0 ? 1 : element.posts.likes[element.posts.likes.length - 1].id + 1,
                            profile_id: state.id,
                            post_id: action.payload.id
                        }]
                    }

                }
            } else {
                return {
                    posts: {
                        ...element.posts
                    }
                }
            }
        })
    }

}

const addLikeToMyPost = (state, action) => {
    return {
        ...state,
        posts: state.posts.map(post => {
            if (post.id === action.payload.id) {
                return {
                    ...post,
                    my_likes: [...post.my_likes, {
                        id: post.my_likes.length === 0 ? 1 : post.my_likes[post.my_likes.length - 1].id + 1,
                        profile_id: state.id,
                        post_id: action.payload.id
                    }]
                }
            } else {
                return {
                    ...post
                }
            }
        })
    }
}

const addDislikeToMyFP = (state, action) => {
    return {
        ...state,
        followers_posts: state.followers_posts.map(element => {
            if (element.posts.post.id === action.payload.id) {
                return {
                    posts: {
                        ...element.posts,
                        dislikes: [...element.posts.dislikes, {
                            id: element.posts.dislikes.length === 0 ? 1 : element.posts.dislikes[element.posts.dislikes.length - 1].id + 1,
                            profile_id: state.id,
                            post_id: action.payload.id
                        }]
                    }

                }
            } else {
                return {
                    posts: {
                        ...element.posts
                    }
                }
            }
        })
    }
}

const removeLikeToMyFPost = (state, action) => {
    return {
        ...state,
        followers_posts: state.followers_posts.map(element => {
            if (element.posts.post.id === action.payload.id) {
                return {
                    posts: {
                        ...element.posts,
                        likes: element.posts.likes.filter(like => like.id !== action.payload.likeID)
                    }
                }
            } else {
                return {
                    posts: {
                        ...element.posts
                    }
                }
            }
        })
    }
}

const removeLikeToMyPost = (state, action) => {
    return {
        ...state,
        posts: state.posts.map(post => {
            if (post.id === action.payload.id) {
                return {
                    ...post,
                    my_likes: post.my_likes.filter(like => like.id !== action.payload.likeID)
                }
            } else {
                return {
                    ...post
                }
            }
        })
    }
}

const addDislikeToMyPost = (state, action) => {
    return {
        ...state,
        posts: state.posts.map(post => {
            if (post.id === action.payload.id) {
                return {
                    ...post,
                    my_dislikes: [...post.my_dislikes, {
                        id: post.my_dislikes.length === 0 ? 1 : post.my_dislikes[post.my_dislikes.length - 1].id + 1,
                        profile_id: state.id,
                        post_id: action.payload.id
                    }]
                }
            } else {
                return {
                    ...post
                }
            }
        })
    }
}

const removeDislikeToMyPost = (state, action) => {
    return {
        ...state,
        posts: state.posts.map(post => {
            if (post.id === action.payload.id) {
                return {
                    ...post,
                    my_dislikes: post.my_dislikes.filter(dislike => dislike.id !== action.payload.dislikeID)
                }
            } else {
                return {
                    ...post
                }
            }
        })
    }
}

const removeDislikeToMyFPost = (state, action) => {
    return {
        ...state,
        followers_posts: state.followers_posts.map(element => {
            if (element.posts.post.id === action.payload.id) {
                return {
                    posts: {
                        ...element.posts,
                        dislikes: element.posts.likes.filter(dislike => dislike.id !== action.payload.dislikeID)
                    }
                }
            } else {
                return {
                    posts: {
                        ...element.posts
                    }
                }
            }
        })
    }
}

const followProfile = (state, action) => {
    return {
        ...state,
        user_profiles: state.user_profiles.map(user => {
            if (user.id === action.payload.id) {


                return {
                    ...user,
                    followers: [...user.followers, {
                        id: user.followers.length === 0 ? 1 : user.followers[user.followers.length - 1].id + 1,
                        profile_id: state.id,
                        following_id: action.payload.id,
                        followers_profile: {
                            firstName: state.firstName,
                            lastName: state.lastName
                        }
                    }]
                }


            } else {
                return {
                    ...user
                }
            }
        })
    }
}


const removeFollower = (state, action) => {
    return {
        ...state,
        user_profiles: state.user_profiles.map(user => {
            if (user.id === action.payload.id) {
                return {
                    ...user,
                    followers: user.followers.filter(follower => follower.profile_id !== state.id)
                }
            } else {
                return {
                    ...user
                }
            }
        })
    }
}

const removeMyFollower = (state, action) => {
    return {
        ...state,
        followers: state.followers.filter(follower => follower.profile_id !== action.payload.id)
    }
}


const updateMyProfileInfo = (state, action) => {
    return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        location: action.payload.location
    }
}




function profileReducer(state = currentUser, action) {
    switch (action.type) {
        case 'addPost':
            return addPost(state, action);
        case 'removePost':
            return removePost(state, action);
        case 'addLikeToMyPost':
            return addLikeToMyPost(state, action);
        case 'addLikeToMyFPost':
            return addLikeToMyFP(state, action);
        case 'addDislikeToMyPost':
            return addDislikeToMyPost(state, action);
        case 'addDislikeToMyFPost':
            return addDislikeToMyFP(state, action);
        case 'removeLikeToMyPost':
            return removeLikeToMyPost(state, action);
        case 'removeLikeToMyFPost':
            return removeLikeToMyFPost(state, action);
        case 'removeDislikeToMyPost':
            return removeDislikeToMyPost(state, action);
        case 'removeDislikeToMyFPost':
            return removeDislikeToMyFPost(state, action);
        case 'addCommentToMyPost':
            return addCommentToMyPost(state, action);
        case 'addCommentToMyFPost':
            return addCommentToMyFP(state, action);

        case 'followProfile':
            return followProfile(state, action);
        case 'removeFollower':
            return removeFollower(state, action);

        case 'removeMyFollower':
            return removeMyFollower(state, action);

        case 'updateMyProfileInfo':
            return updateMyProfileInfo(state, action);

        default:
            return state;
    }
}

// const commit = {
//     type: 'addLikeToMyFPost',
//     payload: {
//         id: 3
//     }
// };

// const f = {
//     type: 'followProfile',
//     payload: {
//         id: 4
//     }
// };




export const store = createStore(profileReducer)

// store.dispatch(f)




// selectors

export const selectPosts = (state) => {

    // console.log(state.followers_posts.find(element => {
    //     if (element.posts.post.id === 1) {
    //         return element
    //     }
    // }))

    // console.log(state.posts)

    const followers_posts = state.followers_posts.map(element => {
        return {
            id: element.posts.post.id,
            firstName: element.posts.firstName,
            lastName: element.posts.lastName,
            image: element.posts.image,
            content: element.posts.post.content,
            my_comments: element.posts.comments,
            my_dislikes: element.posts.dislikes,
            my_likes: element.posts.likes,
            profile_id: element.posts.post.profile_id
        }
    })



    const my_posts = state.posts.map(element => {
        return {
            id: element.id,
            firstName: state.firstName,
            lastName: state.lastName,
            content: element.content,
            image: element.image,
            my_comments: element.my_comments,
            my_dislikes: element.my_dislikes,
            my_likes: element.my_likes,
            profile_id: element.profile_id
        }
    });

    const merge = followers_posts.concat(my_posts);

    return merge;
}

export const selectMyProfileInfo = state => {
    const profileInfo = {
        id: state.id,
        firstName: state.firstName,
        lastName: state.lastName,
        location: state.location,
        age: 21,
        posts: state.posts,
        followers: state.followers
    }

    return profileInfo;
}

export const selectMyFollowers = state => {
    return state.followers.map(follower => {
        return {
            id: follower.id,
            profile_id: follower.followers_profiles.id,
            firstName: follower.followers_profiles.firstName,
            lastName: follower.followers_profiles.lastName
        }
    });
}

export const selectCurrentUserID = state => {
    return state.id;
}

export const loadData = state => {
    return state;
}

export const selectUserProfiles = state => {
    return state.user_profiles
}