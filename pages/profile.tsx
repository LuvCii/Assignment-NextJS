import Link from 'next/link'
import React from 'react'
import useAuth from '../hooks/use-auth'

type Inputs = {
    name: string,
    email: string,
    phone : string,
    role: number,

}

const Profile = () => {
    const {data, error} = useAuth();
    if(error) return <div>Fail to load</div>
    if(!data) return <div>Loading...</div>
    return (
        <>
            <div>
                {data.map((item :any) => {
                    return(
                    <div className="pt-28 bg-gray-100 w-4/6 mx-auto" key={item._id}>
                    <div className="container mx-auto my-5 p-5">
                        <div className="md:flex no-wrap md:-mx-2 ">
                            <div className="w-full md:w-3/12 md:mx-2">
                                <div className="bg-white p-3 border-t-4">
                                    <div className="mb-[13px] overflow-hidden">
                                        <img className="h-auto w-full mx-auto"
                                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                            alt="" />
                                    </div>
                                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{item.name}</h1>
                                    <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                                    <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit.
                                        Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                                    <ul
                                        className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                        <li className="flex items-center py-3">
                                            <span>Status</span>
                                            <span className="ml-auto"><span
                                                className="bg-green-500 py-1 px-2 rounded text-white text-sm">Admin</span></span>
                                        </li>
                                        <li className="flex items-center py-3">
                                            <span>Member since</span>
                                            <span className="ml-auto">Nov 07, 2016</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="my-4"></div>

                            </div>
                            <div className="w-full md:w-9/12 mx-2 h-64">
                                <div className="bg-white p-3 shadow-sm rounded-sm">
                                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                        <span className="tracking-wide text-3xl mb-2">About</span>
                                    </div>
                                    <div className="h-[1px] bg-gray-300 w-4/5 mb-[11px]"> </div>
                                    <div className="text-gray-700">
                                        <div className=" text-sm">
                                            <div className="grid grid-cols-3">
                                                <div>
                                                    <div className="px-4 py-2 font-semibold text-xl">Name</div>
                                                </div>
                                                <div className='flex'>
                                                    <div className="px-4 py-2 text-base">{item.name}</div>

                                                    <div className="">
                                                        <Link href="/editProfile/editName">
                                                            <button className=' px-3 py-2'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="22" height="22"><path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z" /><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z" />
                                                                </svg>

                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3">
                                                <div>
                                                    <div className="px-4 py-2 font-semibold text-xl">Email</div>
                                                </div>
                                                <div className='flex'>
                                                    <div className="px-4 py-2 text-base">
                                                        <a className="text-blue-800" href="mailto:jane@example.com">{item.email}</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3">
                                                <div>
                                                    <div className="px-4 py-2 font-semibold text-xl">Address</div>
                                                </div>
                                                <div className='flex'>
                                                    <div className="px-4 py-2 text-base">Hà Nội</div>

                                                    <div className="">
                                                        <Link href="">
                                                            <button className=' px-3 py-2'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="22" height="22"><path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z" /><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z" />
                                                                </svg>

                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="grid grid-cols-3">
                                                <div>
                                                    <div className="px-4 py-2 font-semibold text-xl">Phone</div>
                                                </div>
                                                <div className='flex'>
                                                    <div className="px-4 py-2 text-base">{item.phone}</div>


                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                     
                                    <button
                                        className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"><Link href={`/editProfile/${item._id}`}>Change Profile</Link></button>
                                </div>

                                <div className="my-4"></div>

                                {/* <div className="bg-white p-3 shadow-sm rounded-sm">

                                    <div className="grid grid-cols-2">
                                        <div>
                                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                                <span className="text-green-500">
                                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </span>
                                                <span className="tracking-wide">Experience</span>
                                            </div>
                                            <ul className="list-inside space-y-2">
                                                <li>
                                                    <div className="text-teal-600">Owner at Her Company Inc.</div>
                                                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                                </li>
                                                <li>
                                                    <div className="text-teal-600">Owner at Her Company Inc.</div>
                                                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                                </li>
                                                <li>
                                                    <div className="text-teal-600">Owner at Her Company Inc.</div>
                                                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                                </li>
                                                <li>
                                                    <div className="text-teal-600">Owner at Her Company Inc.</div>
                                                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                                <span className="text-green-500">
                                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                        <path fill="#fff"
                                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                    </svg>
                                                </span>
                                                <span className="tracking-wide">Education</span>
                                            </div>
                                            <ul className="list-inside space-y-2">
                                                <li>
                                                    <div className="text-teal-600">Masters Degree in Oxford</div>
                                                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                                </li>
                                                <li>
                                                    <div className="text-teal-600">Bachelors Degreen in LPU</div>
                                                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div >
                )})}
                
            </div>
        </>
    )
}

export default Profile