import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <header className='relative'>
                <div className='relative'>
                    <nav className=" delay-150 bg-white border-gray-200 px-2 sm:px-4 w-full pt-7 rounded">
                        <div className=" container flex flex-wrap justify-between items-center h-20 mx-auto">
                            <Link href="https://flowbite.com" className="flex items-center">
                                <img src="https://storagemaplebearnovo.blob.core.windows.net/maplebear-media/filer_public_thumbnails/filer_public/71/51/7151a441-bdfd-454a-ae61-08d967dbdc17/analitico.png__600x400_subsampling-2.png" className="sm:h-9" alt="Daniel Green Logo" />

                            </Link>

                            <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
                                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                                    <li>
                                        <Link href="/" >
                                            <a className="block text-base py-2 pr-4 pl-3 hover:translate-y-[-3px] ease-in-out transition-all md:hover:underline text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white" aria-current="page">Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" >
                                            <a className="block text-base py-2 pr-4 pl-3 hover:translate-y-[-3px] ease-in-out transition-all text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Product</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" >
                                            <a className="block text-base py-2 pr-4 pl-3 hover:translate-y-[-3px] ease-in-out transition-all text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Post</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" >
                                            <a className="block text-base py-2 pr-4 pl-3 hover:translate-y-[-3px] ease-in-out transition-all text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" >
                                            <a className="block text-base py-2 pr-4 pl-3 hover:translate-y-[-3px] ease-in-out transition-all text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>


                            <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">

                                <form action="">
                                    <div className=" pt-2 relative mx-auto  text-gray-600">
                                        <input className="border-2 border-gray-300 bg-white h-10 pr-10  px-2 rounded-lg text-sm focus:outline-none"
                                            type="search" name="search" placeholder="Search" />
                                        <button type="button" className="absolute right-0 top-0 mt-5 mr-4">
                                            <svg className=" text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                                version="1.1" id="Capa_1" x="0px" y="0px"
                                                viewBox="0 0 56.966 56.966"
                                                width="512px" height="512px">
                                                <path
                                                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>


                                <ul className="flex flex-col mt-4 mx-2 md:flex-row md:mt-0  ">
                                    <li className='mx-2 '>
                                        <Link href="" className="p-2" aria-current="page">
                                            <a >
                                                <img src="https://i.ibb.co/5x4WLYC/shopping-cart.png" width="30px" alt="" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='mx-2'>
                                        <Link href="" className="p-2" aria-current="page">
                                            <a >
                                                <img src="https://i.ibb.co/RbF9M4j/user.png" width="30px" alt="" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='mx-2 hover:translate-x-1  ease-in-out transition-all'>
                                        <Link href="" className="p-2" aria-current="page">
                                            <a >
                                                <img src="https://i.ibb.co/tL4sN5s/login.png" width="30px" alt="" />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>


                        </div>
                        <div className="h-0.5 bg-gray-200 w-full my-5"> </div>
                    </nav>
                </div>


            </header>

        </div>
    )
}

export default Header