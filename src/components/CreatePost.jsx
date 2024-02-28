import {useContext, useRef, useState} from "react";
import {PostList as PostListData} from '../store/post-list-store.jsx';

const CreatePost = () => {

    const {addPost} = useContext(PostListData);
    const [alert, setAlert] = useState(false)

    const userIdElement = useRef();
    const titleElement = useRef();
    const bodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = userIdElement.current.value;
        const title = titleElement.current.value;
        const body = bodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(' ');

        if (title && body && reactions && tags) {
            userIdElement.current.value = "";
            titleElement.current.value = "";
            bodyElement.current.value = "";
            reactionsElement.current.value = "";
            tagsElement.current.value = "";
            addPost(userId, title, body, reactions, tags);
        } else {
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 2000);
        }
    }

    return (
        <>
            <form className={'create-post'} onSubmit={handleSubmit}>
                {alert && <div className="alert alert-danger" role="alert">
                    Please fill all fields
                </div>}
                <input type="hidden" id={'userId'} value={1} ref={userIdElement}/>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post title</label>
                    <input type="text" ref={titleElement} className="form-control" id="title"
                           placeholder={'How are you feeling today'}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Post content</label>
                    <textarea ref={bodyElement} className="form-control" id="body" placeholder={'Tell us more'}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="reactions" className="form-label">No. of reactions</label>
                    <input type={'number'} ref={reactionsElement} className="form-control" id="reactions"
                           placeholder={'How many peoples reacted to this post'}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags</label>
                    <input type={'text'} ref={tagsElement} className="form-control" id="tags"
                           placeholder={'Enter your tags using spaces'}/>
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
            </form>
        </>
    );
};

export default CreatePost;