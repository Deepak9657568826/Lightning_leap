import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIndividualBlockData } from '../redux/actioncreator';
import "./BLog.css";
import axios from "axios";

function Blog() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [currentId, setCurrentId] = useState(null);
    const [isUpdating, setIsUpdating] = useState(false);

    const state = useSelector(state => state.blog);
    const dispatch = useDispatch();
    console.log(state.data);

    useEffect(() => {
        dispatch(getIndividualBlockData());
    }, [dispatch]);

    const blogUrl = "https://lightning-leap-10.onrender.com/blog";

    async function deletePost(id) {
        const token = localStorage.getItem("token");
        try {
            const url = `${blogUrl}/${id}`;
            console.log(url);
            const response = await axios.delete(url, {
                headers: { token }
            });
            console.log(response.data);
            alert(`${response.data.message}`);
            dispatch(getIndividualBlockData());
        } catch (error) {
            console.log(error.message);
        }
    }

    async function updatePost(e) {
        e.preventDefault();
        const token = localStorage.getItem("token");
        try {
            const response = await axios.put(`${blogUrl}/${currentId}`, {
                title,
                image,
                content
            }, {
                headers: { token }
            });
            console.log(response.data);
            alert(`${response.data.message}`);
            dispatch(getIndividualBlockData());
            setTitle("");
            setImage("");
            setContent("");
            setCurrentId(null);
            setIsUpdating(false);
        } catch (error) {
            console.log(error.message);
        }
    }

    function handleUpdateClick(temp) {
        setTitle(temp.title);
        setImage(temp.image);
        setContent(temp.content);
        setCurrentId(temp._id);
        setIsUpdating(true);
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <div  style={{ marginLeft: '16rem', background: `radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%)` }} className='custom_css_blog flex flex-col justify-center items-center gap-10'>
            {state.data.blog && state.data.blog.map((temp) => (
                <div key={temp._id} className="max-w-2xl relative custom-card  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    {isUpdating && currentId === temp._id && (
                        <div className="form_for_update absolute inset-0 bg-opacity-80 bg-gray-900 flex justify-center items-center">
                            <form className="w-full space-y-4" onSubmit={updatePost}>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Enter title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="pl-10 py-2 w-full rounded-md border border-gray-600 bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-500"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Enter image url"
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                        className="pl-10 py-2 w-full rounded-md border border-gray-600 bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-500"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={content}
                                        placeholder="Enter content"
                                        onChange={(e) => setContent(e.target.value)}
                                        className="pl-10 py-2 w-full rounded-md border border-gray-600 bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-500"
                                    />
                                </div>
                                <div className='flex justify-center'>
                                    <button
                                        type="submit"
                                        className="w-52 py-2 bg-gray-700 flex justify-center text-white rounded-md hover:bg-gray-600 focus:outline-none"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                    <div className="creator-info flex items-center p-3">
                        <img className="creator-image rounded-full w-12 h-12" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Creator" /> {/* Replace with actual creator image URL */}
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{temp.creatorName}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{formatDate(temp.date)}</p>
                        </div>
                    </div>
                    <a href="#">
                        <img className="custom_home_page_image rounded-t-lg" src={temp.image} alt={temp.title} />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{temp.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{temp.content}</p>
                    </div>
                    <div className="button_blog_main flex justify-between p-3">
                        <button onClick={() => handleUpdateClick(temp)} className='update blog_btn'>Update</button>
                        <button onClick={() => deletePost(temp._id)} className='delete blog_btn'>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Blog;
