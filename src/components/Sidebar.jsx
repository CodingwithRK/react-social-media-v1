import {FaHome, FaPlus} from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Sidebar = ({selectedTab, setSelectedTab}) => {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar">
                <a href="/"
                   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4">Sidebar</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item" onClick={() => setSelectedTab('home')}>
                        <a className={`nav-link text-white ${selectedTab === 'home' && 'active'}`}
                           aria-current="page">
                            <FaHome/>
                            <span className="ms-3">Home</span>
                        </a>
                    </li>
                    <li onClick={() => setSelectedTab('create_post')}>
                        <a className={`nav-link text-white ${selectedTab === 'create_post' && 'active'}`}>
                            <FaPlus/>
                            <span className="ms-3">Create post</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;