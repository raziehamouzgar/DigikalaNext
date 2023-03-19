import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import recyclebin from '../layout/assets/icons/recycle-bin.png'
import {
    decrementQuantity,
    incrementQuantity,
    removeItem,
} from '@/redux/cartStore'

function Cart() {
    const dispatch = useDispatch()
    const { cart, total } = useSelector((state: any) => state.cart)

    const { product } = useSelector((state: any) => state.product)

    const cartsId = cart.map(item => item.id)

    const selectedProduct = product?.products?.filter(item =>
        cartsId.includes(item.id),
    )
    // console.log(cart)

    const sum = () => {
        // return selectedProduct?.map(item => parseInt(item.price))
    }
    console.log(selectedProduct)
    console.log(sum())

    return (
        <div
            className='hidden group-hover:flex flex-col py-4 absolute  z-10 bg-white rounded-lg shadow-md border-[1px] border-slate-300
        shadow-slate-600 w-[25rem] h-[32rem] top-[2rem] left-0 md:left-[1.7rem] md:left-[1rem] overflow-hidden'
        >
            <div className='flex justify-center w-full items-center mb-4 px-3'>
                <p className='text-center'>
                    {selectedProduct?.length} کالا در سبد خرید شما موجود است
                </p>
            </div>
            <div className='flex flex-col overflow-y-auto h-[25rem] '>
                {selectedProduct?.map(item => {
                    return (
                        <div
                            className='grid grid-cols-3 border-b px-2 h-fit'
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
                                <p className='text-sm  mt-2'>{item.title}</p>
                                <div className='flex items-center justify-between m-2'>
                                    <div className='flex border-2 rounded w-24 justify-between px-2 text-red-500 text-xl items-center '>
                                        <button
                                            className='text-2xl'
                                            onClick={() => {
                                                dispatch(
                                                    incrementQuantity([
                                                        item.id,
                                                        item.price,
                                                    ]),
                                                )
                                            }}
                                        >
                                            +
                                        </button>
                                        <div className=' '>
                                            {
                                                cart.find(
                                                    caitem =>
                                                        caitem.id === item.id,
                                                ).quantity
                                            }
                                        </div>
                                        <div className='flex items-center'>
                                            {cart.find(
                                                caitem =>
                                                    caitem.id === item.id &&
                                                    caitem.quantity === 1,
                                            ) ? (
                                                <button
                                                    onClick={() =>
                                                        dispatch(
                                                            removeItem([
                                                                item.id,
                                                                item.price,
                                                            ]),
                                                        )
                                                    }
                                                >
                                                    <Image
                                                        src={recyclebin}
                                                        className='w-4 cursor-pointer'
                                                        alt=''
                                                    />
                                                </button>
                                            ) : (
                                                <button
                                                    className='text-2xl'
                                                    onClick={() => {
                                                        dispatch(
                                                            decrementQuantity([
                                                                item.id,
                                                                item.price,
                                                            ]),
                                                        )
                                                    }}
                                                >
                                                    -
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <div className='font-bold'>
                                        {parseInt(item.price).toLocaleString()}
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
                        <span className='text-xs font-light'>مبلغ قابل پرداخت:</span>
                        <br />
                        {total.toLocaleString()} <span className='text-sm font-light'>تومان</span>
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
