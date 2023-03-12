import { useSelector, useDispatch } from 'react-redux'
import { AddToCart } from '@/redux/cartStore'

import Image from 'next/image'
import star from '../layout/assets/icons/star.png'

function Product({ data }) {
    const dispatch = useDispatch()
    const { searchvalue } = useSelector((state: any) => state.search)
    return (
        <div className='container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5'>
            {searchvalue !== ''
                ? data?.products
                      .filter((item: any) => {
                          const searchvaluelower = searchvalue.toLowerCase()
                          const titlelower = item.title.toLowerCase()
                          return titlelower.indexOf(searchvaluelower) > -1
                      })

                      .map((item: any) => {
                          return (
                              <div
                                  className='grid grid-cols-2 md:grid-cols-1 hover:shadow-2xl hover:z-20 p-2 border'
                                  key={item.id}
                              >
                                  <div className='object-fill w-full'>
                                      <img
                                          src={item.pic}
                                          alt='productPic'
                                          className='w-full'
                                      />
                                  </div>
                                  <div className='flex flex-col'>
                                      <p className='text-sm '>{item.title}</p>
                                      <div className='grid justify-items-end m-2'>
                                          <div className='flex m-2 items-center	'>
                                              {item.rating}
                                              <Image
                                                  src={star}
                                                  className='m-2'
                                                  alt=''
                                              />
                                          </div>

                                          <div className='font-bold'>
                                              {parseInt(
                                                  item.price,
                                              ).toLocaleString()}
                                          </div>
                                          <button
                                              className=' w-7 h-7 rounded-full font-bold
                       text-green-700 hover:bg-green-500 hover:text-white text-center text-lg '
                                              onClick={() =>
                                                  dispatch(AddToCart(item.id))
                                              }
                                          >
                                              +
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          )
                      })
                : data?.products?.map(item => {
                      return (
                          <div
                              className='grid grid-cols-2 md:grid-cols-1 hover:shadow-2xl hover:z-20 p-2 border'
                              key={item.id}
                          >
                              <div className='object-fill w-full'>
                                  <img
                                      src={item.pic}
                                      alt='productPic'
                                      className='w-full'
                                  />
                              </div>
                              <div className='flex flex-col'>
                                  <p className='text-sm '>{item.title}</p>
                                  <div className='grid justify-items-end m-2'>
                                      <div className='flex m-2 items-center	'>
                                          {item.rating}
                                          <Image
                                              src={star}
                                              className='m-2'
                                              alt=''
                                          />
                                      </div>

                                      <div className='font-bold'>
                                          {parseInt(
                                              item.price,
                                          ).toLocaleString()}
                                      </div>
                                      <button
                                          className=' w-7 h-7 rounded-full font-bold
                       text-green-700 hover:bg-green-500 hover:text-white text-center text-lg '
                                          onClick={() =>
                                              dispatch(AddToCart(item.id))
                                          }
                                      >
                                          +
                                      </button>
                                  </div>
                              </div>
                          </div>
                      )
                  })}
        </div>
    )
}

export default Product
