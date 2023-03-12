import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import recyclebin from '../layout/assets/icons/recycle-bin.png'
import { RemoveCart } from '@/redux/cartStore'

function SearchBox() {
    const dispatch = useDispatch()
    const { searchvalue } = useSelector((state: any) => state.search)

    const { product } = useSelector((state: any) => state.product)

    return searchvalue !== ''
        ? (
            <div
                className='hidden group-hover:flex flex-col py-4 px-3 absolute  z-10 bg-white rounded-lg shadow-md
  border-[1px] border-slate-300
shadow-slate-600 w-full md:w-2/4 max-h-80 top-10 right-0 md:left-[1.7rem] md:left-[1rem] overflow-y-scroll'
            >
            {product?.products
            .filter((item: any) => {
                // {post title}
                const searchvaluelower = searchvalue.toLowerCase()
                const titlelower = item.title.toLowerCase()

                return titlelower.indexOf(searchvaluelower) > -1
            })
            .map((item: any) => {
                return (
                        <div
                            className='grid grid-cols-5 p-2 border'
                            key={item.id}
                        >
                            <div className='object-fill col-span-1 w-full'>
                                <img
                                    src={item.pic}
                                    alt='productPic'
                                    className='w-full'
                                />
                            </div>
                            <div className='flex items-center col-span-4'>
                                <p className='text-sm '>{item.title}</p>
                            </div>
                        </div>
                )
            })}
            </div>
            )
        : null
}

export default SearchBox
