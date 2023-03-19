import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    products: any
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    res.status(200).json({
        products: [
            {
                id: '1',
                title: 'لپتاپ 13 اینچی اپل مدل MacBook Air MGN63 2020',
                price: '54890000',
                pic: 'https://dkstatics-public.digikala.com/digikala-products/b2c0eb53f0eeacdefb8771155bf5e4887222a654_1672051046.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
                rating: '4 ',
            },
            {
                id: '2',
                title: 'لپتاپ 13.6 اینچی اپل مدل MacBook Air-B M2 2022',
                price: '68800000',
                pic: 'https://dkstatics-public.digikala.com/digikala-products/0453261f5778b624dae7dda88a414fe8fcf8d109_1671472045.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
                rating: '4.5',
            },
            { 
                id: '3',
                title: 'لپتاپ 14.2 اینچی اپل مدل MacBook MKGP3 M1 Pro 2021',
                price: '100900000',
                pic: 'https://dkstatics-public.digikala.com/digikala-products/0453261f5778b624dae7dda88a414fe8fcf8d109_1671472045.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
                rating: '5',
            },
            {
                id: '4',
                title: 'لپتاپ 13 اینچی اپل مدل MacBook Air MGN93 2020',
                price: '53970000',
                pic: 'https://dkstatics-public.digikala.com/digikala-products/d96e5acf05f0b91c283fdf2816945fdd0b0e6673_1671296658.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
                rating: '3',
            },
            {
                id: '5',
                title: 'لپتاپ 13.6 اینچی اپل مدل MacBook Air-A M2 2022',
                price: '77000000',
                pic: 'https://dkstatics-public.digikala.com/digikala-products/e860fbe53fa70894ed9d8ab11d73f68b6cc0b7e1_1672051160.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
                rating: '3.5',
            },
            {
                id: '6',
                title: 'لپتاپ 13.3 اینچی اپل مدل MacBook Pro MNEH3 2022',
                price: '78920000',
                pic: 'https://dkstatics-public.digikala.com/digikala-products/e08f7d8700a3183616dd6708d8e1042ba280889b_1671471980.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
                rating: '5',
            },
            {
                id: '7',
                title: 'لپتاپ 13.3 اینچی اپل مدل MacBook Air MGND3 2020',
                price: '78990000',
                pic: 'https://dkstatics-public.digikala.com/digikala-products/837d3b93c562ae5448f3f3bcedddd3e531f0b064_1672051144.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
                rating: '1',
            },
            {
                id: '8',
                title: 'لپتاپ 16.2 اینچی اپل مدل MacBook Pro MK193 2021',
                price: '54600000',
                pic: 'https://dkstatics-public.digikala.com/digikala-products/2015ef7e789f650a0a80c00ca3c7b13a6de2693a_1671293972.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
                rating: '3',
            },
            {
                id: '9',
                title: 'لپتاپ 13.3 اینچی اپل مدل MacBook Pro MNEQ3 2022',
                price: '115000000',
                pic: 'https://dkstatics-public.digikala.com/digikala-products/1d78ec5aafad5680905f6147b07b691fa06c7a69_1671473041.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
                rating: '5',
            },
            {
                id: '10',
                title: 'لپتاپ 16.2 اینچی اپل مدل MacBook Pro MK183 2021',
                price: '82500000',
                pic: 'https://dkstatics-public.digikala.com/digikala-products/1103d366e8d73bc155a7e1be7f926f0d2bfca503_1671475208.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
                rating: '5',
            },
        ],
    })
}
