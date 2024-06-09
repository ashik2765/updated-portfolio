import { useState } from "react";
import { Link } from "react-router-dom";


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="bg-gray-900 p-4 fixed max-w-7xl mx-auto w-full z-10 top-0">
            <div className="container mx-auto flex items-center justify-between">
                
                <div className="flex items-center">
                    <span className="text-white text-2xl font-semibold">Ashikur Rahman</span>
                </div>

               
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="h-8 w-8 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 18C3 19.1046 3.89543 20 5 20C6.10457 20 7 19.1046 7 18C7 16.8954 6.10457 16 5 16C3.89543 16 3 16.8954 3 18ZM11 18C11 19.1046 11.8954 20 13 20C14.1046 20 15 19.1046 15 18C15 16.8954 14.1046 16 13 16C11.8954 16 11 16.8954 11 18ZM17 18C17 19.1046 17.8954 20 19 20C20.1046 20 21 19.1046 21 18C21 16.8954 20.1046 16 19 16C17.8954 16 17 16.8954 17 18ZM5 8C3.89543 8 3 8.89543 3 10C3 11.1046 3.89543 12 5 12C6.10457 12 7 11.1046 7 10C7 8.89543 6.10457 8 5 8ZM13 8C11.8954 8 11 8.89543 11 10C11 11.1046 11.8954 12 13 12C14.1046 12 15 11.1046 15 10C15 8.89543 14.1046 8 13 8ZM19 8C17.8954 8 17 8.89543 17 10C17 11.1046 17.8954 12 19 12C20.1046 12 21 11.1046 21 10C21 8.89543 20.1046 8 19 8Z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6C4 5.44772 4.44772 5 5 5C5.55228 5 6 5.44772 6 6C6 6.55228 5.55228 7 5 7C4.44772 7 4 6.55228 4 6ZM4 10C4 9.44772 4.44772 9 5 9C5.55228 9 6 9.44772 6 10C6 10.5523 5.55228 11 5 11C4.44772 11 4 10.5523 4 10ZM4 14C4 13.4477 4.44772 13 5 13C5.55228 13 6 13.4477 6 14C6 14.5523 5.55228 15 5 15C4.44772 15 4 14.5523 4 14ZM10 6C10 5.44772 10.4477 5 11 5C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7C10.4477 7 10 6.55228 10 6ZM10 10C10 9.44772 10.4477 9 11 9C11.5523 9 12 9.44772 12 10C12 10.5523 11.5523 11 11 11C10.4477 11 10 10.5523 10 10ZM10 14C10 13.4477 10.4477 13 11 13C11.5523 13 12 13.4477 12 14C12 14.5523 11.5523 15 11 15C10.4477 15 10 14.5523 10 14ZM16 6C16 5.44772 16.4477 5 17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6ZM16 10C16 9.44772 16.4477 9 17 9C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11C16.4477 11 16 10.5523 16 10ZM16 14C16 13.4477 16.4477 13 17 13C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15C16.4477 15 16 14.5523 16 14Z"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                
                <div className="hidden lg:flex space-x-4">
                    <Link to="/" className="text-white hover:text-gray-300 transition duration-300">Home</Link>
                    <a href="#portfolio" className="text-white hover:text-gray-300 transition duration-300">Portfolio</a>
                    <a href="#about" className="text-white hover:text-gray-300 transition duration-300">About</a>
                    <a href="#contact" className="text-white hover:text-gray-300 transition duration-300">Contact</a>
                    <Link to="/blogs" className="text-white hover:text-gray-300 transition duration-300">Blogs</Link>
                </div>
            </div>

           
            {isOpen && (
                <div className="lg:hidden mt-2">
                    <Link to="/" className="block py-2 text-white hover:bg-gray-800 transition duration-300">Home</Link>
                    <a href="#portfolio" className="block py-2 text-white hover:bg-gray-800 transition duration-300">Portfolio</a>
                    <a href="#about" className="block py-2 text-white hover:bg-gray-800 transition duration-300">About</a>
                    <a href="#contact" className="block py-2 text-white hover:bg-gray-800 transition duration-300">Contact</a>
                    <Link to="/blogs" className="block py-2 text-white hover:bg-gray-800 transition duration-300">Blogs</Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;