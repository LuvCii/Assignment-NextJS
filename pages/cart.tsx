import React from 'react'
import Link from 'next/link'
type Props = {}

const Shopping_Cart = (props: Props) => {
  return (
    <div>
      
        <div className='text-center px-24 py-24'>
          <h2 className='text-lime-800 text-3xl italic'>GIỎ HÀNG</h2>
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
              <Link href="/" >
              <a className="block text-base py-2 pr-4 pl-3 hover:translate-y-[-3px] ease-in-out transition-all md:hover:underline text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white" aria-current="page">Home</a>
              </Link>
              </li>
            
                <li>/</li>
                <li>
                  <Link href="/shopping_cart">
                  <a className="block text-base py-2 pr-4 pl-3 hover:translate-y-[-3px] ease-in-out transition-all md:hover:underline text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white" aria-current="page">Giỏ hàng</a>
                  </Link>
                </li>
            </ul>
        </div>
        <div className='px-96 py-24'>


          <table className="w-2/3 text-center ">
            <thead className="border-b bg-gray-600">
              <tr>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Tên sản phẩm
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Ảnh
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Giá
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Số lượng
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Tổng tiền
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Xóa
                </th>
                <th></th>

              </tr>
            </thead>
           
              <tbody>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Người nam châm</td>
                  <td><img src='https://sachnendoc.com/wp-content/uploads/2019/04/nguoi-nam-cham-bi-mat-cua-luat-hap-dan-sach-nen-doc.png'/></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                   32.000VND
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <input type="number" className=' text-center border-2 pl-8 border-gray-200 py-2 rounded-lg' placeholder='1' min="0"/>
                  </td>
                  <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    32.000VND
                  </td>
                  <td className="text-sm text-red-500 font-medium px-6 py-4 whitespace-nowrap">
                    <button>Delete</button>
                  </td>
                  <td>
                  <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  </span>
                       Thanh toán
                  </button>

                  </td>

                </tr>

              </tbody>
          
          </table>




        </div>
    </div>
    
  )
}

export default Shopping_Cart