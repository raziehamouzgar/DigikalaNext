import MenuLi from './menuLi'

const FakeMenu = ({ data }) => {
    return (
        <>
            <ul className='col-span-1 flex flex-col gap-5 p-3'>
                <div className='flex font-bold text-base border-r-2 border-red-500'>
                    <MenuLi title={data[0]} />
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-3 h-3'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15.75 19.5L8.25 12l7.5-7.5'
                        />
                    </svg>
                </div>
                {data.map((menuitem, index) => {
                    return <MenuLi key={index} title={menuitem} />
                })}
            </ul>
            <ul className='col-span-1 flex flex-col gap-5'>
                <div className='flex font-bold text-base border-r-2 border-red-500'>
                    <MenuLi title={data[0]} />
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-3 h-3'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15.75 19.5L8.25 12l7.5-7.5'
                        />
                    </svg>
                </div>
                {data.map((menuitem, index) => {
                    return <MenuLi key={index} title={menuitem} />
                })}
            </ul>
            <ul className='col-span-1 flex flex-col gap-5'>
                <div className='flex font-bold text-base border-r-2 border-red-500'>
                    <MenuLi title={data[0]} />
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-3 h-3'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15.75 19.5L8.25 12l7.5-7.5'
                        />
                    </svg>
                </div>
                {data.map((menuitem, index) => {
                    return <MenuLi key={index} title={menuitem} />
                })}
            </ul>
        </>
    )
}

export default FakeMenu
