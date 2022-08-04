import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

type Props = {};

const Header = (props: Props) => {
    function handleClick(e: any){
        e.preventDefault()
        window.localStorage.removeItem('User')
    } 
  return (
    <div>
      <header className=" relative">
        <div className=" relative">
          <nav className="fixed z-50 delay-150 bg-white border-gray-200 px-2 sm:px-4 w-full pt-7 rounded">
            <div className=" container flex flex-wrap justify-between items-center h-20 mx-auto">
              <Link href="/" className="flex items-center">
                <a>
                  <img
                    src="https://i.ibb.co/txk1P2j/read.png"
                    className="w-20"
                    alt="Book store Logo"
                  />
                </a>
              </Link>

              <div
                className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                id="mobile-menu-3"
              >
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li>
                    <Link href="/">
                      <a
                        className="block text-base py-2 pr-4 pl-3 hover:translate-y-[-3px] ease-in-out transition-all md:hover:underline text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/product">
                      <a className="block text-base py-2 pr-4 pl-3 hover:translate-y-[-3px] ease-in-out transition-all text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        Product
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/post">
                      <a className="block text-base py-2 pr-4 pl-3 hover:translate-y-[-3px] ease-in-out transition-all text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        Post
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a className="block text-base py-2 pr-4 pl-3 hover:translate-y-[-3px] ease-in-out transition-all text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        About
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a className="block text-base py-2 pr-4 pl-3 hover:translate-y-[-3px] ease-in-out transition-all text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
                <form action="">
                  <div className=" pt-2 relative mx-auto  text-gray-600">
                    <input
                      className="border-2 border-gray-300 bg-white h-10 pr-10  px-2 rounded-lg text-sm focus:outline-none"
                      type="search"
                      name="search"
                      placeholder="Search"
                    />
                    <button
                      type="button"
                      className="absolute right-0 top-0 mt-5 mr-4"
                    >
                      <svg
                        className=" text-gray-600 h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 56.966 56.966"
                        width="512px"
                        height="512px"
                      >
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                      </svg>
                    </button>
                  </div>
                </form>

                <ul className="flex flex-col mt-5 mx-2 md:flex-row md:mt-0  ">
                  <li className="mx-2 ">
                    <Link href="/cart" className="p-2" aria-current="page">
                      <a>
                        <img
                          src="https://i.ibb.co/5x4WLYC/shopping-cart.png"
                          width="30px"
                          alt=""
                        />
                      </a>
                    </Link>
                  </li>
                  <li className="mx-2">
                    <div className={styles.dropdown}>
                      <button className={styles.dropbtn}>
                        <img
                          src="https://i.ibb.co/RbF9M4j/user.png"
                          width="30px"
                          alt=""
                        />
                      </button>
                      <div className={styles.dropdownContent}>
                        <Link href="/profile">
                          <a className="flex py-3 px-2">
                            <span className="inline-flex justify-between mr-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Layer_1"
                                data-name="Layer 1"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                              >
                                <path d="M16.043,14H7.957A4.963,4.963,0,0,0,3,18.957V24H21V18.957A4.963,4.963,0,0,0,16.043,14Z" />
                                <circle cx="12" cy="6" r="6" />
                              </svg>
                            </span>
                            <span>Profile</span>
                          </a>
                        </Link>
                        <Link href="#">
                          <a className="flex py-3 px-2">
                            <span className="inline-flex justify-between mr-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Layer_1"
                                data-name="Layer 1"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                              >
                                <path d="M21,12a9.143,9.143,0,0,0-.15-1.645L23.893,8.6l-3-5.2L17.849,5.159A9,9,0,0,0,15,3.513V0H9V3.513A9,9,0,0,0,6.151,5.159L3.107,3.4l-3,5.2L3.15,10.355a9.1,9.1,0,0,0,0,3.29L.107,15.4l3,5.2,3.044-1.758A9,9,0,0,0,9,20.487V24h6V20.487a9,9,0,0,0,2.849-1.646L20.893,20.6l3-5.2L20.85,13.645A9.143,9.143,0,0,0,21,12Zm-6,0a3,3,0,1,1-3-3A3,3,0,0,1,15,12Z" />
                              </svg>
                            </span>
                            <span className="mt-8">Go to admin</span>
                          </a>
                        </Link>
                            <button className="flex py-3 px-2 w-full" onClick={handleClick}>
                        <Link href="/signin">
                          <a  className="">
                            <span className="inline-flex justify-between mr-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                width="20"
                                height="20"
                              >
                                <g>
                                  <path d="M170.698,448H72.757c-4.814-0.012-8.714-3.911-8.725-8.725V72.725c0.012-4.814,3.911-8.714,8.725-8.725h97.941   c17.673,0,32-14.327,32-32s-14.327-32-32-32H72.757C32.611,0.047,0.079,32.58,0.032,72.725v366.549   C0.079,479.42,32.611,511.953,72.757,512h97.941c17.673,0,32-14.327,32-32S188.371,448,170.698,448z" />
                                  <path d="M483.914,188.117l-82.816-82.752c-12.501-12.495-32.764-12.49-45.259,0.011s-12.49,32.764,0.011,45.259l72.789,72.768   L138.698,224c-17.673,0-32,14.327-32,32s14.327,32,32,32l0,0l291.115-0.533l-73.963,73.963   c-12.042,12.936-11.317,33.184,1.618,45.226c12.295,11.445,31.346,11.436,43.63-0.021l82.752-82.752   c37.491-37.49,37.491-98.274,0.001-135.764c0,0-0.001-0.001-0.001-0.001L483.914,188.117z" />
                                </g>
                              </svg>
                            </span>
                            <span>Log out</span>
                          </a>
                        </Link>
                          </button>
                      </div>
                    </div>
                  </li>
                  <li className="mx-2 hover:translate-x-1  ease-in-out transition-all">
                    <Link href="" className="p-2" aria-current="page">
                      <a>
                        <img
                          src="https://i.ibb.co/tL4sN5s/login.png"
                          width="30px"
                          alt=""
                        />
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
  );
};

export default Header;
