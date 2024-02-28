import Post from "./Post.jsx";
import {useContext} from "react";
import {PostList as PostListData} from '../store/post-list-store.jsx';

const PostList = () => {
    
    const {postList} = useContext(PostListData);

    return (
        <>
            {postList.map((posts) => (<Post key={posts.id} post={posts}/>))}
        </>
    );
};

export default PostList;