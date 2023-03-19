import Image from 'next/image'

import story1 from '../../public/images/In-Story.cover-1677669277.jpeg'
import story2 from '../../public/images/In-Story.Cover-1678127799.jpeg'
import story3 from '../../public/images/In-Story.Cover-1678361753.jpeg'
import story4 from '../../public/images/In-Story.Cover-copy-1675866246.jpeg'
import story5 from '../../public/images/In-Story.cover.AX-تمپلیت-زمستان-1678178298.jpeg'
import story6 from '../../public/images/In-Story.Cover.henkel-1678355715.jpeg'
import story7 from '../../public/images/In-Story9477-1678127455.jpeg'

const data = [story1, story2, story3, story6, story4, story5, story6, story2, story7]

const Story = () => {
    return (
        <section className='container grid grid-cols-4 place-items-center md:grid-cols-9 gap-5 md:gap-10 py-6 p-3 md:px-28'>
            {data.map((item, index) => {
                return (
                    <a className='rounded-full overflow-hidden w-16 h-16 md:w-16 md:h-16 ring ring-pink-500 ring-offset-4' key={index}>
                        <Image src={item} alt='' className='w-full' />
                    </a>
                )
            })}
        </section>
    )
}

export default Story
