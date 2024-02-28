import {createContext, useReducer} from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {
    },
    deletePost: () => {
    },
});

const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currentPostList];
    } else if (action.type === 'DELETE_POST') {
        newPostList = currentPostList.filter((post) => post.id !== action.payload.postId);
    }
    return newPostList;
}

const PostListProvider = ({children}) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (userId, title, body, reactions, tags) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: title,
                body: body,
                reactions: reactions,
                userId: userId,
                tags: tags,
            }
        })
    }

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            },
        });
    }

    return <PostList.Provider value={
        {
            postList,
            addPost,
            deletePost,
        }
    }>
        {children}
    </PostList.Provider>
}


const DEFAULT_POST_LIST = [
    {
        id: 1,
        title: 'CodingwithRK',
        body: 'Hi this is RK, this is my first full react application',
        reactions: 0,
        userId: 1,
        tags: [
            'react',
            'application'
        ]
    }
];

export default PostListProvider;