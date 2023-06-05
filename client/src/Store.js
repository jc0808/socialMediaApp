import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";


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


function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response
};

const addPost = (state, action) => {

    return {
        ...state,
        data: {
            ...state.data,
            posts: [{
                // id: state.data.posts.length === 0 ? 1 : state.data.posts[state.data.posts.length - 1].id + 1,
                id: action.payload.id,
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
                        if (post.id === action.payload.post_id) {
                            return {
                                ...post,
                                my_comments: [...post.my_comments, {
                                    id: action.payload.id,
                                    firstName: state.data.firstName,
                                    lastName: state.data.lastName,
                                    profile_id: state.data.id,
                                    post_id: action.payload.post_id,
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

                if (post.id === action.payload.post_id) {
                    return {
                        ...post,
                        my_comments: [...post.my_comments, {
                            id: action.payload.post_id,
                            firstName: state.data.firstName,
                            lastName: state.data.lastName,
                            profile_id: state.data.id,
                            post_id: action.payload.post_id,
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
                if (user.id === action.payload.following_id) {


                    return {
                        ...user,
                        followers: [...user.followers, {
                            id: action.payload.id,
                            profile_id: state.data.id,
                            following_id: action.payload.following_id,
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
                        followers: user.followers.filter(follower => follower.profile_id !== state.data.id)
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


    const new_user_profiles_array = state.data.user_profiles?.filter(profile => profile.id !== state.data.id).filter(profile =>
        profile.followers.find(follower => follower.profile_id === state.data.id)?.profile_id === state.data.id);


    const user_profiles_posts = [];



    for (let i = 0; i < new_user_profiles_array?.length; i++) {
        new_user_profiles_array[i].posts.forEach(post => {
            user_profiles_posts.push({
                id: post.id,
                firstName: new_user_profiles_array[i].firstName,
                lastName: new_user_profiles_array[i].lastName,
                pImage: new_user_profiles_array[i].image,
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
            pImage: state.data.image,
            content: element.content,
            image: element.image,
            my_comments: element.my_comments,
            my_dislikes: element.my_dislikes,
            my_likes: element.my_likes,
            profile_id: element.profile_id
        }
    });

    const merge = my_posts?.concat(user_profiles_posts);


    return merge;
}

export const selectMyProfileInfo = state => {

    state = state.data
    const profileInfo = {
        id: state.id,
        firstName: state.firstName,
        lastName: state.lastName,
        location: state.location,
        user_id: state.user_id,
        image: state.image,
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
