import React from 'react';
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const state = useSelector(state => state.auth);
    console.log(state.data.Message);

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>BLOG</h2>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <Link to="/homepage" > <i className="fas fa-home"></i></Link>
                    <span><Link to="/homepage" className="ms-3">Dashboard</Link></span>
                </li>


                <li>
                    <Link to="/blog">  <i className="fas fa-edit"></i></Link>
                    <span><Link to="/blog" className="ms-3">Your Post</Link></span>
                </li>


                {(state.data.Message == "Login successfull") ? (
                    <li>
                        <Link to="/addblog"> <i className="fas fa-plus-circle"></i></Link>
                        <span><Link to="/addblog" className="ms-3">Add Post</Link></span>
                    </li>
                ) : (
                    ""
                )}



                {(state.data.Message == "Login successfull" ) ? (
                    <li>
                        <Link to="/user" > <i className="fas fa-users"></i></Link>
                        <span><Link to="/user" className="flex-1 ms-3 whitespace-nowrap">Users</Link></span>
                    </li>
                ) : (
                    ""
                )}



                {!(state.data.Message == "Login successfull") ? (
                    <li>
                        <Link to="/signup" > <i className="fas fa-sign-in-alt"></i></Link>
                        
                        <span><Link to="/signup" className="flex-1 ms-3 whitespace-nowrap">Sign In</Link></span>
                    </li>
                ) : (
                    ""
                )}



                {state.data.Message == "Login successfull" ? (
                    <li>
                        <Link to="/logout"><i className="fas fa-sign-out-alt"></i></Link>
                        <span><Link to="/logout" className="flex-1 ms-3 whitespace-nowrap">Logout</Link></span>
                    </li>
                ) : (
                    ""
                )}

            </ul>
        
        </div>
    );
};

export default Sidebar;
