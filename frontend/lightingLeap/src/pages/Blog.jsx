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
    const [loader, setLoader] = useState(false)

    const state = useSelector(state => state.blog);
    const dispatch = useDispatch();
    console.log(state);

    useEffect(() => {
        dispatch(getIndividualBlockData());
    }, [dispatch]);


    const blogUrl = "https://lightning-leap-10.onrender.com/blog";

    async function deletePost(id) {
        setLoader(true)
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
            setLoader(false)
        } catch (error) {
            console.log(error.message);
            setLoader(false)
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


    if (state.loading) {
        return (
            <div role="status" className="scalaton_home_page  p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="flex items-center mt-4">
                    <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        )

    }



    return (
        <div style={{ marginLeft: '16rem', background: `radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%)` }} className='custom_css_blog flex flex-col justify-center items-center gap-10 '>
            {state.data.blog && state.data.blog.map((temp) => (
                <div key={temp._id} className="max-w-2xl relative custom-card  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
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
                    <div className="creator-info flex items-center p-3 ">
                        <img className="creator-image rounded-full w-12 h-12" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Creator" /> {/* Replace with actual creator image URL */}
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{temp.creatorName}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{formatDate(temp.date)}</p>
                        </div>
                    </div>
                    <a href="#">
                        <img className="custom_add_page_image rounded-t-lg" src={temp.image} alt={temp.title} />
                    </a>
                    <div className="px-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{temp.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{temp.content}</p>
                    </div>
                    <div className="button_blog_main flex justify-between px-3">
                        <button onClick={() => handleUpdateClick(temp)} className='update blog_btn'>Update</button>
                        <button onClick={() => deletePost(temp._id)} className='delete blog_btn'>

                            {loader ? (
                                <div role="status">
                                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>

                            ) : (
                                "Delete"

                            )}

                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Blog;
