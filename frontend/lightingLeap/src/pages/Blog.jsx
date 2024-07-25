import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlockData, getIndividualBlockData } from '../redux/actioncreator'
import "./BLog.css"
import axios from "axios"

function Blog() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [currentId, setCurrentId] = useState(null);

    const state = useSelector(state => state.blog)
    const dispatch = useDispatch()
    console.log(state.data);
    useEffect(() => {
        dispatch(getIndividualBlockData())
    }, [dispatch])

    const blogUrl = "https://lightning-leap-10.onrender.com/blog";
    async function deletePost(id) {
        const token = localStorage.getItem("token")
        try {
            const url = `${blogUrl}/${id}`
            console.log(url);
            const response = await axios.delete(url, {
                headers: {
                    token
                }
            })
            console.log(response.data);
            alert(`${response.data.message}`)
            dispatch(getIndividualBlockData())

        } catch (error) {
            console.log(error.message);
        }
    }

    async function updatePost(e) {
        e.preventDefault();
        const token = localStorage.getItem("token")
        try {
            const response = await axios.put(`${blogUrl}/${currentId}`, {
                title,
                image,
                content
            }, {
                headers: {
                    token
                }
            })
            console.log(response.data);
            alert(`${response.data.message}`)
            dispatch(getIndividualBlockData())
            setTitle("");
            setImage("");
            setContent("");
            setCurrentId(null);

        } catch (error) {
            console.log(error.message);
        }
    }

    function handleUpdateClick(temp) {
        setTitle(temp.title);
        setImage(temp.image);
        setContent(temp.content);
        setCurrentId(temp._id);
    }

    return (
        <div className='custom_css_blog flex flex-col justify-center items-center gap-10' >
            {state.data.blog && state.data.blog.map((temp) => (
                <div key={temp._id} className="homepage_custom flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-64 md:rounded-none md:rounded-l-lg" src={temp.image} alt={temp.title} />
                    <div className="flex flex-col justify-between p-6 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{temp.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{temp.content}</p>
                    </div>
                    <div className="button_blog_main">
                        <button onClick={() => handleUpdateClick(temp)} className='update blog_btn'>Update</button>
                        <button onClick={() => deletePost(temp._id)} className='delete blog_btn'>Delete</button>
                    </div>
                </div>
            ))}

            <div className="form_for_update">
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
        </div>
    )
}

export default Blog
