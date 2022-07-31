import React from 'react'
import LayoutAdmin from '../../../components/Layout/admin'

type Props = {}

const AdminPageUser = (props: Props) => {
  return (
    <div>
    <div className="mt-4 mx-4">
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">NAME</th>
                <th className="px-4 py-3">EMAIL</th>
                <th className="px-4 py-3">IMAGE</th>
                <th className="px-4 py-3">ROLE</th>
                <th className="px-4 py-3">STATUS</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                <td className="px-4 py-3">
                    <td className="px-4 py-3 text-sm">12345678</td>
                </td>
                <td><p className="font-semibold">ADMIN 1</p></td>
                <td className="px-4 py-3 text-sm">admin1@gmail.com</td>
                <td className="px-4 py-3 text-sm"><img src='https://picsum.photos/80/80'/></td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                    1
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">vẫn độc toàn thân</td>
                <td><button className='border px-4 py-2 border-black  text-black hover:bg-black hover:text-white rounded-full'>Xóa</button></td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </div></div>
  )
}
AdminPageUser.Layout = LayoutAdmin
export default AdminPageUser