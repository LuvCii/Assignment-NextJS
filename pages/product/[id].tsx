import Link from 'next/link'
import React from 'react'

type Props = {}

const ProductDetail = (props: Props) => {
  return (
    <div className='px-12 py-8'>
      <div className='grid grid-cols-12 gap-4 '>
           <div className='col-span-6 overflow-hidden'>
            <img className='transition-transform duration-500 transform hover:scale-75' src='https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book11-copyright.jpg' />
           </div>
           <div className='col-span-6'>
            <div className='text-2xl font-bold'>A Doctor in the House</div>
            <div className='grid grid-cols-6 gap-4 py-4'>
              <div className='col-span-3'>
                <strong>Status:</strong>Còn hàng
                
              </div>
              <div className='col-span-3'>
              <strong>Publisher:</strong>NXB Kim Đồng<br></br>
                <strong>Author:</strong>Kim Lân
              </div>
            </div>
            <hr></hr>



            <div className='price py-4'>
                <del className='pr-2'>780,000₫</del>
                <span className='pr-2 text-red-500 text-xl font-bold'>600,000₫</span>
                <span className='border rounded-md bg-yellow-300 px-2 py-1 font-bold'>Tiết kiệm 23%</span>
            </div>
            <hr></hr>

            <div className='py-8'>
              <h3 className='pb-2 text-2xl font-bold'>MÔ TẢ</h3>
              <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt.</p>
            </div>


            <div className='border border-dotted border-green-400 px-4 pt-4 pb-8'>

              <div className='grid grid-cols-12 gap-4 '>
                <div className='col-span-11'>
                  <h3 className='font-bold text-lg'>Các sản phẩm được tặng kèm</h3>
                <p>Chọn 1 trong các loại quà tặng</p>
                </div>
                <div className='col-span-1'>
                  <img src='https://file.hstatic.net/200000306687/file/giftbox_6b5f92d34ce24f29845b266c1aaafc26.png' width="50px" />
                </div>
                </div>

              <div className='p-2'>
                <div className='grid grid-cols-12'>
                  <div className='col-span-1'><input type="radio" className='border rounded-full' /></div>
                  <div className='col-span-1'><img src='https://product.hstatic.net/200000306687/product/10020417_001-3-650x650_4759bc5d04754b87b3038bd552ef5261.jpeg' width="60px" /></div>
                  <div className='col-span-5'>
                    <span>Khi mua</span> <strong className='text-red-500'>1</strong><span>Chuck Taylor All Star II Festival Knit</span><br></br>
                    <span>Tặng</span> <strong className='text-red-500'>1</strong><span> Converse Graphic Single Hidden</span>
                  </div>
                </div>

<div>
  
</div>
                <div className='grid grid-cols-12 '>
                  <div className='col-span-1'><input type="radio" className='border rounded-full' /></div>
                  <div className='col-span-1'><img src='https://product.hstatic.net/200000306687/product/10019514_102-1-650x650_4ed03e148ecd4f979e352008bbde1799.jpeg' width="60px" /></div>
                  <div className='col-span-5'>
                    <span>Khi mua</span> <strong className='text-red-500'>1</strong><span>Chuck Taylor All Star II Festival Knit</span><br></br>
                    <span>Tặng</span> <strong className='text-red-500'>1</strong><span> Converse Graphic Single Hidden</span>
                  </div>
                </div>
              </div>

            </div>



            <div>
              <div className='grid grid-cols-12 pt-4 pb-3 '>
                <div className='col-span-3'>
                  <form><input type="number" className=' text-center border-2 pl-8 border-gray-200 py-2 rounded-lg' placeholder='1' min="1"/></form>
                  
                </div>
                <div className='col-span-1'></div>
                <div className='col-span-8 pl-24'>
                  <button className='text-center py-2 px-44 border border-black rounded-lg hover:bg-black hover:text-white'>THÊM VÀO GIỎ HÀNG</button>
                </div>
              </div>
              <div className='grid grid-cols-10 py-2'>
                  <div className='col-span-5'>
                    <button className='border rounded-lg border-yellow-400 bg-yellow-400 hover:bg-yellow-300 text-center py-4 px-40 '>TÌM TẠI CỬA HÀNG</button>
                  </div>
                  <div className='col-span-5 pl-6'>
                    <button className='border rounded-lg border-orange-500 bg-orange-500 hover:bg-orange-400 text-white text-center py-4 px-44 '>MUA HÀNG</button>
                  </div>
              </div>
            </div>



            <div className='logo py-4 px-1'>
              <div className='grid grid-cols-12 gap-4'>
                  <div className='col-span-1 overflow-hidden'>
                    <img  className='transition-transform duration-500 transform hover:scale-125 border rounded-full border-gray-300 p-2' src='https://theme.hstatic.net/200000306687/1000886682/14/productShare_image_1.png?v=87' width="50px" />
                  </div>
                  <div className='col-span-1 overflow-hidden'>
                    <img className='transition-transform duration-500 transform hover:scale-125 border rounded-full border-gray-300 p-2' src='https://theme.hstatic.net/200000306687/1000886682/14/productShare_image_2.png?v=87' width="50px"/>
                  </div>
                  <div className='col-span-1 overflow-hidden'>
                    <img className='transition-transform duration-500 transform hover:scale-125 border rounded-full border-gray-300 p-2' src='https://theme.hstatic.net/200000306687/1000886682/14/productShare_image_3.png?v=87' width="50px" />
                  </div>
                  <div className='col-span-1 overflow-hidden'>
                    <img className='transition-transform duration-500 transform hover:scale-125 border rounded-full border-gray-300 p-2' src='https://theme.hstatic.net/200000306687/1000886682/14/productShare_image_4.png?v=87' width="50px"/>
                  </div>
                  <div className='col-span-1 overflow-hidden'>
                    <img className='transition-transform duration-500 transform hover:scale-125 border rounded-full border-gray-300 p-2' src='https://theme.hstatic.net/200000306687/1000886682/14/productShare_image_5.png?v=87'width="50px" />
                  </div>
                  <div className='col-span-1 overflow-hidden'>
                    <img className='transition-transform duration-500 transform hover:scale-125 border rounded-full border-gray-300 p-2' src='https://theme.hstatic.net/200000306687/1000886682/14/productShare_image_6.png?v=87'width="45px" />
                  </div>
              </div>
            </div>

           </div>
      </div>

      <div className='py-12' >
        <h3 className='text-2xl font-bold'>BÌNH LUẬN</h3>
        <div className='grid grid-cols-12'>
        <div className='col-span-1'></div>
          <div className='col-span-11'>
            <form>
            <input className='border border-black h-24 pr-96 px-2 rounded-lg ' type="text" placeholder='Viết bình luận vào đây' />
          </form>
          </div>
          
          
        </div>
      </div>


      <div>
        <h3 className='text-2xl font-bold'>SẢN PHẨM LIÊN QUAN</h3>
        <div className='grid grid-cols-12 gap-20'>
          <div className='col-span-3 text-center hover:border-4 hover:border-gray-100 hover:shadow-lg rounded-lg pb-2 px-3'>
              <div className='image overflow-hidden '>
                <img className='transition-transform duration-500 transform hover:scale-75' src='https://product.hstatic.net/200000306687/product/1u647v-4-650x650_96cd25246ecf4a82acb4e3c55608ad4b_grande.jpeg'  />
              </div>
              <div className='content'>
                <h4 className='text-lg font-bold'>Converse Chuck Taylor All Star SP OX</h4>
                <span className='text-red-500'>1.500.000đ</span>  <del>1.800.000đ</del><br></br>
                <div className='grid grid-cols-2 gap-1'>
                  <button className='border rounded-lg border-yellow-400 bg-yellow-400 hover:bg-yellow-300 text-center py-1 px-2'>Xem nhanh</button>
                  <button className='border rounded-lg border-orange-500 bg-orange-500 hover:bg-orange-400 text-white py-1 px-2'>Mua ngay</button>
                </div>
              </div>
          </div>
          <div className='col-span-3 text-center hover:border-4 hover:border-gray-100 hover:shadow-lg rounded-lg pb-2 px-3'>
              <div className='image overflow-hidden'>
                <img className='transition-transform duration-500 transform hover:scale-75' src='https://product.hstatic.net/200000306687/product/1u647v-4-650x650_96cd25246ecf4a82acb4e3c55608ad4b_grande.jpeg'  />
              </div>
              <div className='content'>
                <h4 className='text-lg font-bold'>Converse Chuck Taylor All Star SP OX</h4>
                <span className='text-red-500'>1.500.000đ</span>  <del>1.800.000đ</del><br></br>
                <div className='grid grid-cols-2 gap-1'>
                  <button className='border rounded-lg border-yellow-400 bg-yellow-400 hover:bg-yellow-300 text-center py-1 px-2'>Xem nhanh</button>
                  <button className='border rounded-lg border-orange-500 bg-orange-500 hover:bg-orange-400 text-white py-1 px-2'>Mua ngay</button>
                </div>
              </div>
          </div>
          <div className='col-span-3 text-center hover:border-4 hover:border-gray-100 hover:shadow-lg rounded-lg pb-2 px-3'>
              <div className='image overflow-hidden'>
                <img className='transition-transform duration-500 transform hover:scale-75' src='https://product.hstatic.net/200000306687/product/1u647v-4-650x650_96cd25246ecf4a82acb4e3c55608ad4b_grande.jpeg'  />
              </div>
              <div className='content'>
                <h4 className='text-lg font-bold'>Converse Chuck Taylor All Star SP OX</h4>
                <span className='text-red-500'>1.500.000đ</span>  <del>1.800.000đ</del><br></br>
                <div className='grid grid-cols-2 gap-1'>
                  <button className='border rounded-lg border-yellow-400 bg-yellow-400 hover:bg-yellow-300 text-center py-1 px-2'>Xem nhanh</button>
                  <button className='border rounded-lg border-orange-500 bg-orange-500 hover:bg-orange-400 text-white py-1 px-2'>Mua ngay</button>
                </div>
              </div>
          </div>
          <div className='col-span-3 text-center hover:border-4 hover:border-gray-100 hover:shadow-lg rounded-lg pb-2 px-3'>
              <div className='image overflow-hidden'>
                <img className='transition-transform duration-500 transform hover:scale-75' src='https://product.hstatic.net/200000306687/product/1u647v-4-650x650_96cd25246ecf4a82acb4e3c55608ad4b_grande.jpeg'  />
              </div>
              <div className='content'>
                <h4 className='text-lg font-bold'>Converse Chuck Taylor All Star SP OX</h4>
                <span className='text-red-500'>1.500.000đ</span>  <del>1.800.000đ</del><br></br>
                <div className='grid grid-cols-2 gap-1'>
                  <button className='border rounded-lg border-yellow-400 bg-yellow-400 hover:bg-yellow-300 text-center py-1 px-2'>Xem nhanh</button>
                  <button className='border rounded-lg border-orange-500 bg-orange-500 hover:bg-orange-400 text-white py-1 px-2'>Mua ngay</button>
                </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail