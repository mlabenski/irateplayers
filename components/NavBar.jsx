import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css'

const Navbar = (props) => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('#e2e8f0');
    const [textColor, setTextColor] = useState('#e2e8f0');
    const [navbar, setNavbar] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false); // Added this line
    const [summonerName, setSummonerName] = useState(""); // Added this line
    const [finalSummonerName, setFinalSummonerName] = useState(""); // Added this line
    const [showMatchHistory, setShowMatchHistory] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, such as fetching the match history based on the summonerName
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#e2e8f0');
                setTextColor('#000000');
            } else {
                setColor('#e2e8f0');
                setTextColor('#ffffff');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);


    return (
        <nav className="w-full bg-gray-800 shadow">
            <div className="px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5">
                    <div className="flex items-center">
                        <a href="#" className="flex items-center">
                            <img src="../smaller-irate-logo-only-img.png" alt="Logo" className="w-10 h-10" />
                            <h2 className="text-2xl text-white font-bold ml-2">i Rate Players</h2>
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-white"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white ml-auto"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                <div
                    className={`flex-1 justify-self-end pb-3 mt-8 md:flex md:justify-end md:pb-0 md:mt-0 ${
                        navbar ? 'block' : 'hidden'
                    }`}
                >
                    <ul className="items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        <li className="text-white">
                            <Link href="/about">
                                <a>View Reports</a>
                            </Link>
                        </li>
                        <li className="text-white">
                            <Link href="/contact">
                                <a>Help</a>
                            </Link>
                        </li>
                    </ul>
                    {showSearchBar && (
                        <form onSubmit={(e) => props.handleSubmit(e, summonerName)} className="flex justify-center px-3">
                            <input
                                type="text"
                                value={summonerName}
                                onChange={(e) => setSummonerName(e.target.value)}
                                placeholder="Enter summoner name"
                                className="flex-grow rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Search</button>
                        </form>
                    )}
                    <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setShowSearchBar(!showSearchBar)}
                    >
                        <span className="text-white">&#128269;</span>
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;