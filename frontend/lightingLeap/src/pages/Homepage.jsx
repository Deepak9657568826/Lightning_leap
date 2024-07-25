import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlockData } from '../redux/actioncreator'

function Homepage() {

    const state = useSelector(state => state.blog)
    const dispatch = useDispatch()
    console.log(state);
    useEffect(() => {
        dispatch(getBlockData())
    }, [])

    return (
        <div className='  flex flex-col justify-center items-center gap-10' style={{ marginLeft: '16rem',background: `radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%)`}}>
        {state.data.allBlog && state.data.allBlog.map((temp) => (
          <a key={temp._id} href="#" className="homepage_custome flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-64 md:rounded-none md:rounded-l-lg" src={temp.image} alt={temp.title} />
            <div className="flex flex-col justify-between p-6 leading-normal bg-linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{temp.title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{temp.content}</p>
            </div>
          </a>
        ))}
      </div>
    )
}


export default Homepage
