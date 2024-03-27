import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/authReducer/action';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const isAuth = useSelector((store)=>store.authReducer.isAuth)
    const token = useSelector((store)=>store.authReducer.token)
    const dispatch = useDispatch()

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const handleLogout= ()=>{
        try{
            dispatch(logout(token))
            .then((res)=>{
                alert(res.msg)
            })
        }
        catch(error){
            console.log(error)
        }
        
    }

    return (
        <nav className="bg-custom-green px-6 py-3 ">
            <div className="container mx-auto flex items-center justify-between ">
                <div className="flex items-center">
                    <Link to={'/'} className="text-white text-lg font-bold">Home</Link>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <button onClick={()=>navigate('/tasks')} className="text-custom-green bg-white px-4 py-1 rounded-full text-lg hover:text-custom-pink">My Tasks</button>
                    {isAuth?<button onClick={handleLogout} className="text-custom-green bg-white px-4 py-1 rounded-full text-lg hover:text-custom-pink">Logout</button>:
                    <button onClick={()=>navigate('/login')} className="text-custom-green bg-white px-4 py-1 rounded-full text-lg hover:text-custom-pink">Login</button>
                    }
                    
                    <button onClick={()=>navigate('/profile')} className="text-custom-green bg-white px-4 py-1 rounded-full text-lg hover:text-custom-pink">Profile</button>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleNavbar} className="text-white">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-custom-green p-4">
                    <button onClick={()=>navigate('/tasks')} className="block text-white mb-2">My Tasks</button>
                    <button className="block text-white mb-2">Login/Logout</button>
                    {isAuth?<button onClick={handleLogout} className="block text-white mb-2">Logout</button>:<button onClick={()=>navigate('/login')} className="block text-white mb-2">Login</button>}
                    <button onClick={()=>navigate('/profile')} className="block text-white">Profile</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
