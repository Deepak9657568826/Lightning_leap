import React, { useEffect } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Allroutes from './Allroutes';
import Homepage from './pages/Homepage';
import Blog from './pages/Blog';
import Addpost from './pages/Addpost';
import Sidebar from './component/Sidebar';

function App() {

  useEffect(() => {
    const handleBeforeUnload = () => {
        localStorage.removeItem('token'); // Adjust the key if necessary
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
    };
}, []);


  return (
    <div>
      <Sidebar/>
    <Allroutes/>
    </div>
  );
}

export default App;

