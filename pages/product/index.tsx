import Link from 'next/link'
import React from 'react'

type Props = {}

const ProductPage = (props: Props) => {
  return (
    <div className='pt-28 bg-gray-100'>
      <div className='w-4/6 mx-auto grid grid-cols-12 px-12 py-24 gap-4'>
        <div className='col-span-3 bg-white border border-gray-100 p-4'>
          <div className=''>
            <div className='flex justify-between'>
              <div className='col-span-2'> 
                <h1 className='text-2xl font-bold font-serif'>CATEGORY</h1>
              </div>
              <div className='col-span-2'> 
                <img src='https://cdn-icons-png.flaticon.com/512/134/134210.png' width="16px"/>
              </div>
            </div>
            <hr className='py-2'></hr>
            
            <nav className='w-3/4'>
              <li className='inline-block font-bold font-sans hover:text-red-700'><Link  href="">Drama</Link></li><br></br>
              <li className='inline-block font-bold font-sans hover:text-red-700'><Link href="">Mystery</Link></li><br></br>
              <li className='inline-block font-bold font-sans hover:text-red-700'><Link href="">Novels</Link></li><br></br>
              <li className='inline-block font-bold font-sans hover:text-red-700'><Link href="">Recipe Books</Link></li><br></br>
              <li className='inline-block font-bold font-sans hover:text-red-700'><Link href="">Uncategorized</Link></li>
            </nav>
          </div>
          <div className='py-8'>
            <div className='flex justify-between'>
            <div className='col-span-2'> 
            <h1 className='text-2xl font-bold font-serif'>AUTHOR</h1>
            </div>
            <div className='col-span-2'>
               <img src='https://cdn-icons-png.flaticon.com/512/134/134210.png' width="16px"/>
               </div>
               </div>
            <hr className='py-2'></hr>
            <nav className=''>
              <li className='inline-block font-bold font-sans hover:text-red-700'><input className='border rounded-lg border-black p-1' type="checkbox" /> <Link  href="">Drama</Link></li><br></br>
              <li className='inline-block font-bold font-sans hover:text-red-700'><input className='border rounded-lg border-black p-1' type="checkbox" /> <Link href="">Mystery</Link></li><br></br>
              <li className='inline-block font-bold font-sans hover:text-red-700'><input className='border rounded-lg border-black p-1' type="checkbox" /> <Link href="">Novels</Link></li><br></br>
              <li className='inline-block font-bold font-sans hover:text-red-700'><input className='border rounded-lg border-black p-1' type="checkbox" /> <Link href="">Recipe</Link></li><br></br>
              <li className='inline-block font-bold font-sans hover:text-red-700'><input className='border rounded-lg border-black p-1' type="checkbox" /> <Link href="">Uncatego</Link></li>
            </nav>
           
          
          
          </div>
          <div className=''>
            <div className='flex justify-between'>
            <div className='col-span-2'> 
            <h1 className='text-2xl font-bold font-serif'>PRICE</h1>
            </div>
            <div className='col-span-2'> 
            <img src='https://cdn-icons-png.flaticon.com/512/134/134210.png' width="16px"/>
            </div>
            </div>
            <hr className='py-2'></hr>
            <nav className=''>
              <li className='inline-block font-bold font-sans hover:text-red-700'><input className='border rounded-lg border-black p-1' type="checkbox" /> <Link  href="">50-100</Link></li><br></br>
              <li className='inline-block font-bold font-sans hover:text-red-700'><input className='border rounded-lg border-black p-1' type="checkbox" /> <Link href="">100-150</Link></li><br></br>
              <li className='inline-block font-bold font-sans hover:text-red-700'><input className='border rounded-lg border-black p-1' type="checkbox" /> <Link href="">150-200</Link></li><br></br>
              <li className='inline-block font-bold font-sans hover:text-red-700'><input className='border rounded-lg border-black p-1' type="checkbox" /> <Link href="">200-300</Link></li><br></br>
              <li className='inline-block font-bold font-sans hover:text-red-700'><input className='border rounded-lg border-black p-1' type="checkbox" /> <Link href="">300-500</Link></li>
            </nav>
           
          
          
          </div>

          
          
        </div>
        <div className='col-span-9 grid grid-cols-8 gap-2'>
          <div className='col-span-2 text-center pb-2 px-3'>
          <div className='image overflow-hidden '>
                <img className='transition-transform duration-500 transform hover:scale-125' src='https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book12-copyright-400x600.jpg'  />
              </div>
              <div className='content'>
                <h4 className='text-2xl font-bold hover:text-red-500'>Converse Chuck Taylor All Star SP OX</h4>
                <p className='text-xl font-serif'>Burt Geller</p>
                <span className='text-red-500 text-2xl font-bold'>1.500.000đ</span>  <del>1.800.000đ</del><br></br>
                
              </div>
          </div>
          <div className='col-span-2 text-center pb-2 px-3'>
          <div className='image overflow-hidden '>
                <img className='transition-transform duration-500 transform hover:scale-125' src='https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book12-copyright-400x600.jpg'  />
              </div>
              <div className='content'>
                <h4 className='text-2xl font-bold hover:text-red-500'>Converse Chuck Taylor All Star SP OX</h4>
                <p className='text-xl font-serif'>Burt Geller</p>
                <span className='text-red-500 text-2xl font-bold'>1.500.000đ</span>  <del>1.800.000đ</del><br></br>
                
              </div>
          </div>
          <div className='col-span-2 text-center pb-2 px-3'>
          <div className='image overflow-hidden '>
                <img className='transition-transform duration-500 transform hover:scale-125' src='https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book12-copyright-400x600.jpg'  />
              </div>
              <div className='content'>
                <h4 className='text-2xl font-bold hover:text-red-500'>Converse Chuck Taylor All Star SP OX</h4>
                <p className='text-xl font-serif'>Burt Geller</p>
                <span className='text-red-500 text-2xl font-bold'>1.500.000đ</span>  <del>1.800.000đ</del><br></br>
                
              </div>
          </div>
          <div className='col-span-2 text-center pb-2 px-3'>
          <div className='image overflow-hidden '>
                <img className='transition-transform duration-500 transform hover:scale-125' src='https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book12-copyright-400x600.jpg'  />
              </div>
              <div className='content'>
                <h4 className='text-2xl font-bold hover:text-red-500'>Converse Chuck Taylor All Star SP OX</h4>
                <p className='text-xl font-serif'>Burt Geller</p>
                <span className='text-red-500 text-2xl font-bold'>1.500.000đ</span>  <del>1.800.000đ</del><br></br>
                
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage