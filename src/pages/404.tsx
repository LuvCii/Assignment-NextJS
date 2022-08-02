import Link from 'next/link'
import React from 'react'
import LayoutEmpty from '../components/Layout/empty'

type Props = {}

const NotFound = (props: Props) => {
    return (
        <div>
            <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
                <div className='flex'>
                    <h2 className="text-9xl font-extrabold text-white tracking-widest">4</h2>
                    <h2 className="text-9xl animate-bounce font-extrabold text-white tracking-widest">0</h2>
                    <h2 className="text-9xl font-extrabold text-white tracking-widest">4</h2>
                </div>
                <div className=" animate-ping bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>
                <button className="mt-5">
                    <a
                        className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                    >
                        <span
                            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                        ></span>

                        <span className=" relative block px-8 py-3 bg-[#1A2238] border border-current">
                            <Link href="/"><a>Go Home</a></Link>
                        </span>
                    </a>
                </button>
            </div>
        </div>
    )
}
NotFound.Layout = LayoutEmpty
export default NotFound