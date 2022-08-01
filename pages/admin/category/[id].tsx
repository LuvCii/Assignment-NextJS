import React from 'react'
import LayoutAdmin from '../../../components/Layout/admin'

type Props = {}

const EditCate = (props: Props) => {
  return (
    <div>
     



     <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          
        </div>

        {/* Client Table */}
        <div className="mt-4 mx-4">
          <h1  className='text-center font-bold text-2xl'>SỬA DANH MỤC SẢN PHẨM</h1>
          <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <div className="w-full overflow-x-auto">
            <form className="w-full max-w-sm">
  <div className="flex items-center border-b border-teal-500 py-2">
    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Name" aria-label="Full name" />
   </div>
   
   <div className='pt-4'> <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
      Edit
    </button>
    
  </div>
  </form>






            </div>
            <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
              
              <span className="col-span-2" />
              {/* Pagination */}
             
            </div>
          </div>
        </div>
        {/* ./Client Table */}
      </div>







     


            
        
    </div>
  )
}
EditCate.Layout = LayoutAdmin

export default EditCate