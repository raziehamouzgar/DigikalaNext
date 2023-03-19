import Image from 'next/image'
import Link from 'next/link'

import { useDispatch, useSelector } from 'react-redux'
import { SetSearchValue } from '../redux/searchStore'

import MenuLi from '@/components/menuLi'

import baner from '../../public/images/topheader.3192815f27f74b47f0d9.jpg'
import logo from '../layout/assets/images/logo.svg'
import Cart from './cart'
import SearchBox from './searchBox'
import { useState } from 'react'
import FakeMenu from './fakeMenu'

const FakeDataMobile = [
    'گوشی اپل',
    'گوشی سامسونگ',
    'گوشی شیائومی',
    'گوشی هوآوی',
    'نوکیا',
    'آنر',
    'موتورولا',
]
const FakeDataAbzar = ['فرز', 'دریل', 'پیچ گوشتی', 'اره برقی', 'چک کش']
const FakeDataLebas = ['لباس زنانه', 'لباس مردانه', 'کیف', 'کفش', 'چکمه']

const Header = () => {
    const [megaMenu, setMegaMenu] = useState(1)
    // console.log(megaMenu)
    const dispatch = useDispatch()
    const { cart } = useSelector((state: any) => state.cart)

    return (
        <>
            <header className='relative hidden md:grid grid grid-cols-1 border-b border-gray-400 z-30'>
                <Image src={baner} alt='' className='w-full h-8 object-cover' />
                <div className='container grid grid-cols-12 pb-2 pt-3 gap-3'>
                    <Link href={'#'} legacyBehavior>
                        <a className='col-span-1'>
                            <Image src={logo} alt='' className='w-full' />
                        </a>
                    </Link>
                    <div className='col-span-10 grid'>
                        <div className='group relative'>
                            <a className='absolute top-2 right-0'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='w-6 h-6 text-gray-400 pr-1'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                                    />
                                </svg>
                            </a>
                            <input
                                type='text'
                                // value={value}
                                className='group bg-gray-100 w-1/3 pl-1 pr-7 h-9 rounded-lg'
                                placeholder='جستجو'
                                onChange={() =>
                                    dispatch(
                                        SetSearchValue(event?.target.value),
                                    )
                                }
                            />
                            <SearchBox />
                        </div>
                    </div>
                    <div className='col-span-1 grid grid-cols-2 justify-end'>
                        <a className='flex justify-center items-center col-span-1 border-l'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-5 h-5'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                                />
                            </svg>
                        </a>
                        <a className='group relative flex justify-center items-center col-span-1'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-5 h-5'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                                />
                            </svg>
                            <span className='absolute bottom-0 right-1 bg-red-500 px-1 text-white rounded-md text-sm border border-white'>
                                {cart?.length}
                            </span>
                            <Cart />
                        </a>
                    </div>
                </div>
                <div className='relative container flex justify-between items-center'>
                    <ul className=' flex gap-1'>
                        <li className='group flex gap-1 items-center text-sm text-gray-700 cursor-pointer hover:border-b-2 hover:border-red-500 p-5'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-4 h-4'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z'
                                />
                            </svg>
                            <span>کالای دیجیتال</span>
                            <div className='hidden group-hover:grid absolute top-14 -right-28 w-screen h-screen bg-black/70 z-20'></div>
                            <div className='hidden group-hover:grid bg-white shadow-md grid-cols-10 w-full h-80 z-40 absolute top-14 right-0 rounded-b-lg p-3'>
                                <div className='col-span-1 h-full border-l border-gray-400'>
                                    <ul className='flex flex-col'>
                                        <li
                                            onMouseEnter={() => {
                                                setMegaMenu(1)
                                            }}
                                            className='flex gap-1 items-center text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-red-400 p-3'
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                strokeWidth={1.5}
                                                stroke='currentColor'
                                                className='w-4 h-4'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z'
                                                />
                                            </svg>
                                            <span>موبایل</span>
                                        </li>
                                        <li
                                            onMouseEnter={() => {
                                                setMegaMenu(2)
                                            }}
                                            className='flex gap-1 items-center text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-red-400 p-3'
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                strokeWidth={1.5}
                                                stroke='currentColor'
                                                className='w-4 h-4'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z'
                                                />
                                            </svg>
                                            <span>لپ تاپ</span>
                                        </li>
                                        <li
                                            onMouseEnter={() => {
                                                setMegaMenu(3)
                                            }}
                                            className='flex gap-1 items-center text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-red-400 p-3'
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                strokeWidth={1.5}
                                                stroke='currentColor'
                                                className='w-4 h-4'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z'
                                                />
                                            </svg>
                                            <span>کامپیوتر</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-span-8 grid grid-cols-4 h-full '>
                                    {megaMenu === 3 ? (
                                        <FakeMenu data={FakeDataAbzar} />
                                    ) : megaMenu === 2 ? (
                                        <FakeMenu data={FakeDataLebas} />
                                    ) : megaMenu === 1 ? (
                                        <FakeMenu data={FakeDataMobile} />
                                    ) : (
                                        <FakeMenu data={FakeDataMobile} />
                                    )}
                                </div>
                            </div>
                        </li>
                        <MenuLi title={'دسته بندی'} />
                        <MenuLi title={'سوپر مارکت'} />
                        <MenuLi title={'پرفروش ترین ها'} />
                        <MenuLi title={'تخفیف ها و پیشنهاد ها'} />
                        <MenuLi title={'شگفت انگیز ها'} />
                        <MenuLi title={'سوالی دارید؟'} />
                        <MenuLi title={'در دیجی کالا بفروشید!'} />
                    </ul>
                    <p className='flex text-sm gap-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-4 h-4'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                            />
                        </svg>
                        ارسال به کرمان، کرمان
                    </p>
                </div>
            </header>
            <header className='md:hidden grid grid-cols-1'>
                <Image src={baner} alt='' className='w-full h-8 object-cover' />

                <div className='container flex justify-between pb-2 pt-3 gap-3'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                        />
                    </svg>

                    <Link href={'#'} legacyBehavior>
                        <a className='w-1/4'>
                            <Image src={logo} alt='' className='w-full' />
                        </a>
                    </Link>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z'
                        />
                    </svg>
                </div>
                <div className='container grid grid-cols-4 p-2'>
                    <div className='col-span-3'>
                        <div className='group relative'>
                            <a className='absolute top-2 right-0'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='w-6 h-6 text-gray-400 pr-1'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                                    />
                                </svg>
                            </a>
                            <input
                                type='text'
                                className='bg-gray-200 w-full p-1 pr-7 h-10 rounded-md'
                                placeholder='جستجو'
                                onChange={() =>
                                    dispatch(
                                        SetSearchValue(event?.target.value),
                                    )
                                }
                            />
                            <SearchBox />
                        </div>
                    </div>
                    <div className='col-span-1 flex justify-center items-center gap-3'>
                        <a className='flex justify-center border-l'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-6 h-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                                />
                            </svg>
                        </a>

                        <a className='relative group flex justify-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-6 h-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                                />
                            </svg>
                            <span className='absolute -bottom-3 -right-1 bg-red-500 px-1 text-white rounded-md text-sm border border-white'>
                                {cart?.length}
                            </span>
                            <Cart />
                        </a>
                    </div>
                </div>
                <div className='container flex justify-between p-2 border'>
                    <p className='flex'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-5 h-5'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                            />
                        </svg>
                        ارسال به کرمان، کرمان
                    </p>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15.75 19.5L8.25 12l7.5-7.5'
                        />
                    </svg>
                </div>
            </header>
        </>
    )
}

export default Header
