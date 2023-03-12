import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import recyclebin from '../layout/assets/icons/recycle-bin.png'
import { RemoveCart } from '@/redux/cartStore'

function Cart() {
    const dispatch = useDispatch()
    const { carts } = useSelector((state: any) => state.cart)
    
    const { product } = useSelector((state: any) => state.product)
  

    const selectedProduct = product?.products?.filter(item =>
        carts.includes(item.id),
    )


    const sum = () => {
        return selectedProduct?.map(item => parseInt(item.price))
    }
  

    return (
        <div
            className='hidden group-hover:flex flex-col py-4 px-3 absolute  z-10 bg-white rounded-lg shadow-md border-[1px] border-slate-300
        shadow-slate-600 w-[25rem] h-[28rem] top-[2rem] left-0 md:left-[1.7rem] md:left-[1rem] overflow-hidden'
        >
            <div className='flex justify-center font-bold w-full items-center mb-4 px-3'>
                <p className='text-center'>
                    {selectedProduct?.length} کالا در سبد خرید شما موجود است
                </p>
               
            </div>
            <div className='grid overflow-y-scroll'>
                {selectedProduct?.map(item => {
                    return (
                        <div
                            className='grid grid-cols-3 hover:border border-b'
                            key={item.id}
                        >
                            <div className='col-span-1 object-fill w-full'>
                                <img
                                    src={item.pic}
                                    alt='productPic'
                                    className='w-full'
                                />
                            </div>
                            <div className='col-span-2 flex flex-col'>
                                <p className='text-sm '>{item.title}</p>
                                <div className='grid justify-items-end m-2'>
                                    <div className='font-bold'>
                                        {parseInt(item.price).toLocaleString()}
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <button
                                            className=''
                                            onClick={() =>
                                                dispatch(RemoveCart(item.id))
                                            }
                                        >
                                            <Image
                                                src={recyclebin}
                                                className='w-5 cursor-pointer'
                                                alt=''
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='absolute left-0 w-full bottom-0 flex items-center justify-between font-bold p-3 bg-white'>
                <div>
                    <p>
                        مبلغ قابل پرداخت:{' '}
                        {sum()
                            ?.reduce((partialSum, a) => partialSum + a, 0)
                            .toLocaleString()}
                    </p>
                </div>
                <div>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                        ثبت سفارش
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart
