import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";


// export let currentUser;





// console.log(currentUser)

// const load = async () => {


//     const response = await fetch("/profiles/1");
//     const data = await response.json();

//     // console.log(data)

//     currentUser = data;
//     console.log(data)
// }

// load()

// console.log(currentUser)

const fetchDataBegin = () => ({
    type: "FETCH_DATA_BEGIN"
})

const fetchDataSuccess = data => ({
    type: "FETCH_DATA_SUCCESS",
    payload: { data }
})

const fetchDataFailure = error => ({
    type: "FETCH_DATA_FAILURE",
    payload: { error }
})


// export function fetchData() {


//     return async dispatch => {
//         dispatch(fetchDataBegin());
//         console.log("fetching the data...")
//         try {
//             const response = await fetch("/profiles/1");
//             const res = await handleErrors(response);
//             const json = res.json();
//             dispatch(fetchDataSuccess(json));
//             console.log(json);
//             return json;
//         } catch (error) {
//             return dispatch(fetchDataFailure(error));
//         }
//     }
// }

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response
};









// export const currentUser = {
//     "id": 1,
//     "firstName": "Joshua",
//     "lastName": "Campos",
//     "user_id": 1,
//     "location": "USA",
//     "user_profiles": [
//         {
//             "id": 1,
//             "firstName": "Joshua",
//             "lastName": "Campos",
//             "location": "USA",
//             "followers": [
//                 {
//                     "id": 3,
//                     "profile_id": 2,
//                     "following_id": 1,
//                     "followers_profile": {
//                         "firstName": "Lucas",
//                         "lastName": "Campos"
//                     }
//                 },
//                 {
//                     "id": 4,
//                     "profile_id": 3,
//                     "following_id": 1,
//                     "followers_profile": {
//                         "firstName": "Shafeska",
//                         "lastName": "Callimore"
//                     }
//                 }
//             ],
//             "posts": [
//                 {
//                     "id": 1,
//                     "content": "How's everyone day going?",
//                     "image": null,
//                     "profile_id": 1,
//                     "my_likes": [

//                     ],
//                     "my_dislikes": [

//                     ],
//                     "my_comments": [
//                         {
//                             "id": 1,
//                             "firstName": "Lucas",
//                             "lastName": "Campos",
//                             "content": "My was great Joshua!",
//                             "profile_id": 2,
//                             "created_at": "2023-05-09T19:17:38.006Z"
//                         },
//                         {
//                             "id": 2,
//                             "firstName": "Shafeska",
//                             "lastName": "Callimore",
//                             "content": "It was awesome!",
//                             "profile_id": 3,
//                             "created_at": "2023-05-09T19:17:38.010Z"
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             "id": 2,
//             "firstName": "Lucas",
//             "lastName": "Campos",
//             "location": "USA",
//             "followers": [
//                 {
//                     "id": 1,
//                     "profile_id": 1,
//                     "following_id": 2,
//                     "followers_profile": {
//                         "firstName": "Joshua",
//                         "lastName": "Campos"
//                     }
//                 }
//             ],
//             "posts": [
//                 {
//                     "id": 2,
//                     "content": "Went on a walk today",
//                     "image": null,
//                     "profile_id": 2,
//                     "my_likes": [

//                     ],
//                     "my_dislikes": [

//                     ],
//                     "my_comments": [
//                         {
//                             "id": 3,
//                             "firstName": "Joshua",
//                             "lastName": "Campos",
//                             "content": "Nice, hope you enjoyed it!",
//                             "profile_id": 1,
//                             "created_at": "2023-05-09T19:17:38.013Z"
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             "id": 3,
//             "firstName": "Shafeska",
//             "lastName": "Callimore",
//             "location": "CR",
//             "followers": [
//                 {
//                     "id": 2,
//                     "profile_id": 1,
//                     "following_id": 3,
//                     "followers_profile": {
//                         "firstName": "Joshua",
//                         "lastName": "Campos"
//                     }
//                 },
//                 {
//                     "id": 5,
//                     "profile_id": 2,
//                     "following_id": 3,
//                     "followers_profile": {
//                         "firstName": "Lucas",
//                         "lastName": "Campos"
//                     }
//                 }
//             ],
//             "posts": [
//                 {
//                     "id": 3,
//                     "content": "Went to Amsterdan last week",
//                     "image": null,
//                     "profile_id": 3,
//                     "my_likes": [

//                     ],
//                     "my_dislikes": [

//                     ],
//                     "my_comments": [
//                         {
//                             "id": 4,
//                             "firstName": "Joshua",
//                             "lastName": "Campos",
//                             "content": "how was it?",
//                             "profile_id": 1,
//                             "created_at": "2023-05-09T19:17:38.015Z"
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             "id": 4,
//             "firstName": "Marko",
//             "lastName": "Ramirez",
//             "location": "Nevada",
//             "followers": [

//             ],
//             "posts": [

//             ]
//         },
//         {
//             "id": 5,
//             "firstName": "Buggie",
//             "lastName": "Campos",
//             "location": "NC",
//             "followers": [

//             ],
//             "posts": [

//             ]
//         }
//     ],
//     "followers": [
//         {
//             "id": 3,
//             "profile_id": 2,
//             "following_id": 1,
//             "followers_profiles": {
//                 "firstName": "Lucas",
//                 "lastName": "Campos"
//             }
//         },
//         {
//             "id": 4,
//             "profile_id": 3,
//             "following_id": 1,
//             "followers_profiles": {
//                 "firstName": "Shafeska",
//                 "lastName": "Callimore"
//             }
//         }
//     ],
//     "posts": [
//         {
//             "id": 1,
//             "profile_id": 1,
//             "content": "How's everyone day going?",
//             "image": null,
//             "my_likes": [
//                 {
//                     "id": 1,
//                     "profile_id": 2,
//                     "post_id": 1,
//                     "created_at": "2023-05-09T19:17:37.961Z",
//                     "updated_at": "2023-05-09T19:17:37.961Z"
//                 },
//                 {
//                     "id": 2,
//                     "profile_id": 3,
//                     "post_id": 1,
//                     "created_at": "2023-05-09T19:17:37.964Z",
//                     "updated_at": "2023-05-09T19:17:37.964Z"
//                 }
//             ],
//             "my_dislikes": [

//             ],
//             "my_comments": [
//                 {
//                     "id": 1,
//                     "firstName": "Lucas",
//                     "lastName": "Campos",
//                     "content": "My was great Joshua!",
//                     "profile_id": 2,
//                     "created_at": "2023-05-09T19:17:38.006Z"
//                 },
//                 {
//                     "id": 2,
//                     "firstName": "Shafeska",
//                     "lastName": "Callimore",
//                     "content": "It was awesome!",
//                     "profile_id": 3,
//                     "created_at": "2023-05-09T19:17:38.010Z"
//                 }
//             ]
//         }
//     ]
// };

const addPost = (state, action) => {

    return {
        ...state,
        data: {
            ...state.data,
            posts: [{
                id: state.data.posts.length === 0 ? 1 : state.data.posts[state.data.posts.length - 1].id + 1,
                content: action.payload.content,
                image: action.payload.image,
                profile_id: state.data.id,
                my_likes: [],
                my_comments: [],
                my_dislikes: []
            }, ...state.data.posts]
        }
    };
}


const removePost = (state, action) => {
    return {
        ...state,
        data: {
            ...state.data,
            posts: state.posts.filter(post => post.id !== action.payload.id)
        }
    };
}


const addCommentToMyFP = (state, action) => {
    return {
        ...state,
        data: {
            ...state.data,
            user_profiles: state.data.user_profiles.map(profile => {
                return {
                    ...profile,
                    posts: profile.posts.map(post => {
                        if (post.id === action.payload.id) {
                            return {
                                ...post,
                                my_comments: [...post.my_comments, {
                                    id: post.my_comments.length === 0 ? 1 : post.my_comments[post.my_comments.length - 1].id + 1,
                                    firstName: state.data.firstName,
                                    lastName: state.data.lastName,
                                    profile_id: state.data.id,
                                    post_id: action.payload.id,
                                    content: action.payload.content
                                }]
                            }
                        } else {
                            return {
                                ...post
                            }
                        }
                    })
                }
            })
        }
    }
}

const addCommentToMyPost = (state, action) => {
    return {
        ...state,
        data: {
            ...state.data,
            posts: state.data.posts.map(post => {


                return {
                    ...post,
                    my_comments: [...post.my_comments, {
                        id: post.my_comments.length === 0 ? 1 : post.my_comments[post.my_comments.length - 1].id + 1,
                        firstName: state.data.firstName,
                        lastName: state.data.lastName,
                        profile_id: state.data.id,
                        post_id: action.payload.id,
                        content: action.payload.content
                    }]
                }
            })
        }
    }
}

const addLikeToMyFP = (state, action) => {
    return {
        ...state,
        data: {
            ...state.data,

            user_profiles: state.data.user_profiles.map(profile => {
                return {
                    ...profile,
                    posts: profile.posts.map(post => {
                        if (post.id === action.payload.id) {
                            return {
                                ...post,
                                my_likes: [...post.my_likes, {
                                    id: post.my_likes.length === 0 ? 1 : post.my_likes[post.my_likes.length - 1].id + 1,
                                    profile_id: state.data.id,
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
            })

        }

    }

}

const addLikeToMyPost = (state, action) => {
    return {
        ...state,
        data: {
            ...state.data,
            posts: state.data.posts.map(post => {
                if (post.id === action.payload.id) {
                    return {
                        ...post,
                        my_likes: [...post.my_likes, {
                            id: post.my_likes.length === 0 ? 1 : post.my_likes[post.my_likes.length - 1].id + 1,
                            profile_id: state.data.id,
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
}

const addDislikeToMyFP = (state, action) => {
    return {
        ...state,
        data: {
            ...state.data,
            user_profiles: state.data.user_profiles.map(profile => {
                return {
                    ...profile,
                    posts: profile.posts.map(post => {
                        if (post.id === action.payload.id) {
                            return {
                                ...post,
                                my_dislikes: [...post.my_dislikes, {
                                    id: post.my_dislikes.length === 0 ? 1 : post.my_dislikes[post.my_dislikes.length - 1].id + 1,
                                    profile_id: state.data.id,
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
            })
        }
    }
}

const removeLikeToMyFPost = (state, action) => {
    return {
        ...state,
        data: {
            ...state.data,
            user_profiles: state.data.user_profiles.map(profile => {
                return {
                    ...profile,
                    posts: profile.posts.map(post => {
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
            })
        }
    }
}

const removeLikeToMyPost = (state, action) => {
    return {
        ...state,
        data: {
            ...state.data,
            posts: state.data.posts.map(post => {
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
}

const addDislikeToMyPost = (state, action) => {
    return {
        ...state,
        data: {
            ...state.data,
            posts: state.data.posts.map(post => {
                if (post.id === action.payload.id) {
                    return {
                        ...post,
                        my_dislikes: [...post.my_dislikes, {
                            id: post.my_dislikes.length === 0 ? 1 : post.my_dislikes[post.my_dislikes.length - 1].id + 1,
                            profile_id: state.data.id,
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
}

const removeDislikeToMyPost = (state, action) => {
    return {
        ...state,
        data: {
            ...state.data,
            posts: state.data.posts.map(post => {
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
}

const removeDislikeToMyFPost = (state, action) => {
    return {
        ...state,
        data: {
            ...state.data,
            user_profiles: state.data.user_profiles.map(profile => {
                return {
                    ...profile,
                    posts: profile.posts.map(post => {
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
            })
        }
    }
}

const followProfile = (state, action) => {
    return {
        ...state,
        data: {
            ...state.data,
            user_profiles: state.data.user_profiles.map(user => {
                if (user.id === action.payload.id) {


                    return {
                        ...user,
                        followers: [...user.followers, {
                            id: user.followers.length === 0 ? 1 : user.followers[user.followers.length - 1].id + 1,
                            profile_id: state.data.id,
                            following_id: action.payload.id,
                            followers_profile: {
                                firstName: state.data.firstName,
                                lastName: state.data.lastName
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
}


const removeFollower = (state, action) => {
    return {
        ...state,
        data: {
            ...state.data,
            user_profiles: state.data.user_profiles.map(user => {
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
}

const removeMyFollower = (state, action) => {
    return {
        ...state,
        data: {
            ...state.data,
            followers: state.data.followers.filter(follower => follower.profile_id !== action.payload.id)
        }
    }
}


const updateMyProfileInfo = (state, action) => {
    return {
        ...state,
        data: {
            ...state.data,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            location: action.payload.location
        }
    }
}




const initialState = {
    data: [],
    loading: false,
    error: null
};




function profileReducer(state = initialState, action) {
    switch (action.type) {
        // case 'load':
        //     return load(state);

        case "FETCH_DATA_BEGIN":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload.data
            };
        case "FETCH_DATA_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                data: []
            };





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




export const store = createStore(profileReducer, applyMiddleware(thunk))

// store.dispatch({
//     type: "load"
// })


export function fetchData(id) {

    console.log("starting")



    store.dispatch(fetchDataBegin());
    console.log("fetching the data...")
    fetch(`/profiles/${id}`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            store.dispatch(fetchDataSuccess(json));
            return json
        })
        .catch(error => store.dispatch(fetchDataFailure(error)))

}







// selectors

export const selectPosts = (state) => {

    // console.log(state.followers_posts.find(element => {
    //     if (element.posts.post.id === 1) {
    //         return element
    //     }
    // }))

    // console.log(state.posts)

    // console.log(state.user_profiles)

    // console.log(state.user_profiles.map(profile => profile.posts[0]))


    const new_user_profiles_array = state.data.user_profiles?.filter(profile => profile.id !== state.data.id);


    const user_profiles_posts = [];



    for (let i = 0; i < new_user_profiles_array?.length; i++) {
        new_user_profiles_array[i].posts.forEach(post => {
            user_profiles_posts.push({
                id: post.id,
                firstName: new_user_profiles_array[i].firstName,
                lastName: new_user_profiles_array[i].lastName,
                image: post.image,
                content: post.content,
                my_comments: post.my_comments,
                my_dislikes: post.my_dislikes,
                my_likes: post.my_likes,
                profile_id: post.profile_id
            })
        })
    }

    console.log(state.data?.posts)

    const my_posts = state.data.posts?.map(element => {
        return {
            id: element.id,
            firstName: state.data.firstName,
            lastName: state.data.lastName,
            content: element.content,
            image: element.image,
            my_comments: element.my_comments,
            my_dislikes: element.my_dislikes,
            my_likes: element.my_likes,
            profile_id: element.profile_id
        }
    });

    const merge = my_posts?.concat(user_profiles_posts);

    console.log(merge)

    return merge;
}

export const selectMyProfileInfo = state => {

    state = state.data
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
    return state.data.followers?.map(follower => {
        return {
            id: follower.id,
            profile_id: follower.profile_id,
            firstName: follower.followers_profiles.firstName,
            lastName: follower.followers_profiles.lastName
        }
    });
}

export const selectCurrentUserID = state => {
    return state.data?.id;
}

export const selectLoadData = state => {
    return state;
}

export const selectUserProfiles = state => {
    return state.data?.user_profiles
}
