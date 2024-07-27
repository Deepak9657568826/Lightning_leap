
  
  import React, { useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { getBlockData } from '../redux/actioncreator';
  import "./Homepage.css"
  import { useNavigate } from 'react-router-dom';
  
  function Homepage() {
    const state = useSelector(state => state.blog);
    const dispatch = useDispatch();
    console.log(state);
  const navigate  = useNavigate();
  
    useEffect(() => {
      dispatch(getBlockData(navigate));
    }, [dispatch]);
  
    function formatDate(dateString) {
      const date = new Date(dateString);
      const options = { month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }

    if(state.loading){
      return (
      <div role="status" className="scalaton_home_page  p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
          <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
              </svg>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div className="flex items-center mt-4">
             <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
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
      <div
        className=" homepage_custom flex flex-col justify-center items-center gap-1"
        // style={{ marginLeft: '16rem', background: `radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%)` }}
      >
        {state.data.allBlog && state.data.allBlog.map((temp) => (
          <div key={temp._id} id="homepage_card"   className="mt-10 .custom-card max-w-2xl  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="creator-info flex items-center p-3">
              <img className="creator-image rounded-full w-12 " src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Creator" /> 
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{temp.creatorName}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{formatDate(temp.date)}</p>
              </div>
            </div>
            <div className='homepage_image_container'>
              <img   className="custom_home_page_image rounded-t-lg" src={temp.image} alt={temp.title} />
            </div>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{temp.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{temp.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Homepage;
  