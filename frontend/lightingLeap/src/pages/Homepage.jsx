
  
  import React, { useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { getBlockData } from '../redux/actioncreator';
  import "./Homepage.css"
  
  function Homepage() {
    const state = useSelector(state => state.blog);
    const dispatch = useDispatch();
    console.log(state.data.allBlog);
  
    useEffect(() => {
      dispatch(getBlockData());
    }, [dispatch]);
  
    function formatDate(dateString) {
      const date = new Date(dateString);
      const options = { month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }
  
    return (
      <div
        className="flex flex-col justify-center items-center gap-10"
        style={{ marginLeft: '16rem', background: `radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%)` }}
      >
        {state.data.allBlog && state.data.allBlog.map((temp) => (
          <div key={temp._id}   className=".custom-card max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
          </div>
        ))}
      </div>
    );
  }
  
  export default Homepage;
  