import {MdDelete} from "react-icons/md";
import {useContext} from "react";
import {PostList as PostListData} from '../store/post-list-store.jsx';

const Post = ({post}) => {
    const {deletePost} = useContext(PostListData)
    return (
        <>
            <div className="card post-card">
                <div className="card-body">
                    <h5 className="card-title">
                        {post.title}
                        <span onClick={() => deletePost(post.id)}
                              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-post">
                            <MdDelete/>
                        </span>
                    </h5>
                    <p className="card-text">{post.body}</p>
                    {post.tags.map((tag) => (
                        <span key={tag} className="badge rounded-pill text-bg-primary me-2 text-capitalize">
                            {tag}
                        </span>
                    ))}
                    <div className="alert alert-success reactions" role="alert">
                        This post has been reacted by : {post.reactions} peoples
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;