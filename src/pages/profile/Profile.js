import React, { useContext, useState } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { AiFillShopping } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Person from './Person';

function Profile() {
    const [activeTab, setActiveTab] = useState('products');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const context = useContext(myContext)
    const { fooditem, edithandle, deleteFooditem, user } = context

    return (
        <Layout>
            <div>
            <Person/>
                <div className="container mx-auto">
                    <div className="md:flex md:space-x-8 bg-gray-200 dark:bg-gray-800 grid grid-cols-3 text-center gap-4 md:justify-center mb-10">
                        <button
                            className={`inline-block rounded-md border border-transparent ${activeTab === 'products' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'} px-8 py-3 font-medium hover:bg-indigo-700`}
                            onClick={() => handleTabChange('products')}
                        >
                            <div className="flex gap-2 items-center">
                                <MdOutlineProductionQuantityLimits /> Products
                            </div>
                        </button>
                        <button
                            className={`inline-block rounded-md border border-transparent ${activeTab === 'orders' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'} px-8 py-3 font-medium hover:bg-indigo-700`}
                            onClick={() => handleTabChange('orders')}
                        >
                            <div className="flex gap-2 items-center">
                                <AiFillShopping /> Orders
                            </div>
                        </button>
                        <button
                            className={`inline-block rounded-md border border-transparent ${activeTab === 'users' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'} px-8 py-3 font-medium hover:bg-indigo-700`}
                            onClick={() => handleTabChange('users')}
                        >
                            <div className="flex gap-2 items-center">
                                <FaUser /> Users
                            </div>
                        </button>
                    </div>

                    {/* Render content based on activeTab */}
                    {activeTab === 'products' && (
                        <div>
                            {/* Product content goes here */}
                            <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
                                <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
                                    {/* <!-- Start coding here --> */}
                                    <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                                        <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                            <div class="w-full md:w-1/2">
                                                <form class="flex items-center">
                                                    <label for="simple-search" class="sr-only">Search</label>
                                                    <div class="relative w-full">
                                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                                            </svg>
                                                        </div>
                                                        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                                <Link to={'/addfooditem'}>
                                                    <button type="button" class="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                        </svg>
                                                        Add Food Items
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div class="overflow-x-auto">
                                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" class="px-4 py-3">Sr. No.</th>
                                                        <th scope="col" class="px-4 py-3">Food Name</th>
                                                        <th scope="col" class="px-4 py-3">Image</th>
                                                        <th scope="col" class="px-4 py-3">Price</th>
                                                        <th scope="col" class="px-4 py-3">Category</th>
                                                        <th scope="col" class="px-4 py-3">Cooking Time</th>
                                                        <th scope="col" class="px-4 py-3">Date</th>
                                                        <th scope="col" class="px-4 py-3">
                                                            <span class="sr-only">Actions</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                {fooditem?.map((item, index) => {
                                                    //console.log(fooditem)
                                                    const { name, price, imageUrl, category, cookingtime, date } = item;
                                                    return (
                                                        <tbody>
                                                            <tr class="border-b dark:border-gray-700">
                                                                <td class="px-4 py-3">{index + 1}</td>
                                                                <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{name}</th>
                                                                <td class="px-4 py-3">
                                                                    <img src={imageUrl} className='w-5 md:w-32 max-w-full h-10 md:h-32' alt='img' /></td>
                                                                <td class="px-4 py-3">₹{price}</td>
                                                                <td class="px-4 py-3">{category}</td>
                                                                <td class="px-4 py-3">{cookingtime}</td>
                                                                <td class="px-4 py-3">{date}</td>
                                                                <td className="px-4 py-3 flex items-center justify-end">
                                                                    <button
                                                                        id="apple-imac-27-dropdown-button"
                                                                        onClick={toggleDropdown}
                                                                        className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                                                        type="button"
                                                                    >
                                                                        <svg
                                                                            className="w-5 h-5"
                                                                            aria-hidden="true"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 20 20"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                                                        </svg>
                                                                    </button>
                                                                    {isOpen && (
                                                                        <div
                                                                            id="apple-imac-27-dropdown"
                                                                            className="absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                                                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                                                                <li>
                                                                                    <Link to={'/updatefooditem'}>
                                                                                        <p onClick={() => edithandle(item)}
                                                                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</p>
                                                                                    </Link>
                                                                                </li>
                                                                            </ul>
                                                                            <div className="py-1" onClick={() => deleteFooditem(item)}>
                                                                                <p className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</p>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    )
                                                })}

                                            </table>
                                        </div>
                                        <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                                            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                Showing
                                                <span class="font-semibold text-gray-900 dark:text-white"> 1-10 </span>
                                                of
                                                <span class="font-semibold text-gray-900 dark:text-white"> 1000</span>
                                            </span>
                                            <ul class="inline-flex items-stretch -space-x-px">
                                                <li>
                                                    <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                        <span class="sr-only">Previous</span>
                                                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                                </li>
                                                <li>
                                                    <a href="#" aria-current="page" class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                        <span class="sr-only">Next</span>
                                                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}
                    {activeTab === 'orders' && (
                        <div>
                            {/* Order content goes here */}
                            <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
                                <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
                                    {/* <!-- Start coding here --> */}
                                    <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                                        <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                            <div class="w-full md:w-1/2">
                                                <form class="flex items-center">
                                                    <label for="simple-search" class="sr-only">Search</label>
                                                    <div class="relative w-full">
                                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                                            </svg>
                                                        </div>
                                                        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                        <div class="overflow-x-auto">
                                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" class="px-4 py-3">Sr. No.</th>
                                                        <th scope="col" class="px-4 py-3">Food Name</th>
                                                        <th scope="col" class="px-4 py-3">Email</th>
                                                        <th scope="col" class="px-4 py-3">Pid</th>
                                                        <th scope="col" class="px-4 py-3">Description</th>
                                                        <th scope="col" class="px-4 py-3">totalAmount</th>
                                                        <th scope="col" class="px-4 py-3">totalAmount</th>
                                                        <th scope="col" class="px-4 py-3">
                                                            <span class="sr-only">Actions</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="border-b dark:border-gray-700">
                                                        <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"></th>
                                                        <td class="px-4 py-3"></td>
                                                        <td class="px-4 py-3"></td>
                                                        <td class="px-4 py-3"></td>
                                                        <td class="px-4 py-3"></td>
                                                        <td class="px-4 py-3"></td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                        <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                                            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                Showing
                                                <span class="font-semibold text-gray-900 dark:text-white"> 1-10 </span>
                                                of
                                                <span class="font-semibold text-gray-900 dark:text-white"> 1000</span>
                                            </span>
                                            <ul class="inline-flex items-stretch -space-x-px">
                                                <li>
                                                    <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                        <span class="sr-only">Previous</span>
                                                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                                </li>
                                                <li>
                                                    <a href="#" aria-current="page" class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                        <span class="sr-only">Next</span>
                                                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}
                    {activeTab === 'users' && (
                        <div>
                            {/* Users content goes here */}
                            <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
                                <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
                                    {/* <!-- Start coding here --> */}
                                    <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                                        <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                            <div class="w-full md:w-1/2">
                                                <form class="flex items-center">
                                                    <label for="simple-search" class="sr-only">Search</label>
                                                    <div class="relative w-full">
                                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                                            </svg>
                                                        </div>
                                                        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                        <div class="overflow-x-auto">
                                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" class="px-4 py-3">Product name</th>
                                                        <th scope="col" class="px-4 py-3">Category</th>
                                                        <th scope="col" class="px-4 py-3">Brand</th>
                                                        <th scope="col" class="px-4 py-3">Description</th>
                                                        <th scope="col" class="px-4 py-3">Price</th>
                                                        <th scope="col" class="px-4 py-3">
                                                            <span class="sr-only">Actions</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="border-b dark:border-gray-700">
                                                        <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"></th>
                                                        <td class="px-4 py-3"></td>
                                                        <td class="px-4 py-3"></td>
                                                        <td class="px-4 py-3"></td>
                                                        <td class="px-4 py-3"></td>
                                                        <td class="px-4 py-3"></td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                        <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                                            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                Showing
                                                <span class="font-semibold text-gray-900 dark:text-white"> 1-10 </span>
                                                of
                                                <span class="font-semibold text-gray-900 dark:text-white"> 1000</span>
                                            </span>
                                            <ul class="inline-flex items-stretch -space-x-px">
                                                <li>
                                                    <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                        <span class="sr-only">Previous</span>
                                                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                                </li>
                                                <li>
                                                    <a href="#" aria-current="page" class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                        <span class="sr-only">Next</span>
                                                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}
                </div>
            </div>
        </Layout>

    )
}

export default Profile