import Image from 'next/image'

import story1 from '../layout/assets/images/11.png'
import story2 from '../layout/assets/images/22.png'
import story3 from '../layout/assets/images/33.png'
import story4 from '../layout/assets/images/44.png'
import story5 from '../layout/assets/images/55.png'
import story6 from '../layout/assets/images/66.png'
import story7 from '../layout/assets/images/77.png'

const data = [
    story1,
    story2,
    story3,
    story6,
    story4,
    story5,
    story2,
    story7,
]

const Servises = () => {
    return (
        <section className='container grid grid-cols-4 place-items-center md:grid-cols-10 gap-5 md:gap-10 py-6 md:px-32'>
            {data.map((item, index) => {
                return (
                    <a className='overflow-hidden w-14 h-14' key={index}>
                        <Image src={item} alt='' className='w-full' />
                    </a>
                )
            })}
            <a className='flex items-center justify-center col-start-2 md:col-start-auto rounded-full w-14 h-14 bg-slate-300 text-gray-700 text-3xl overflow-hidden'>
                ...
            </a>
        </section>
    )
}

export default Servises
