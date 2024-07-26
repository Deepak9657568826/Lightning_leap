import React from 'react'
import "./userdetails.css"
import { useSelector } from 'react-redux'
function Userdetail() {
    const state = useSelector(state => state.auth)
    console.log(state);

    return (
        <div className='userdetails_main'>
            <div className=" usermain w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                </div>
                <div className="flex flex-col items-center pb-10">
                    <div className="relative">
                        <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt=""/>
                            <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{state.data.user?(state.data.user.name):("John Deo")}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-bold">{state.data.user?(state.data.user.email):("johndeo@gmail.com")}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-bold"> Role: {state.data.user?(state.data.user.role):("User")}</span>
                </div>
            </div>

        </div>
    )
}
export default Userdetail
