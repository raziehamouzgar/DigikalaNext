import { useEffect } from 'react'
import axios from 'axios'

import Image from 'next/image'
import Link from 'next/link'

import { useSelector, useDispatch } from 'react-redux'
import { GetProduct } from '@/redux/productStore'

import Header from '@/components/header'
import Story from '@/components/storySection'
import Slider from '@/components/slider'
import Servises from '@/components/servises'
import Product from '@/components/product'

const index = ({ data }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetProduct())
    }, [])

    return (
        <>
            <Header />
            <Story />
            <Slider />
            <Servises />
            <Product data={data} />
        </>
    )
}

export async function getStaticProps(){
    const data = await axios
        .get(`${process.env.NEXT_PUBLIC_URL}/api/product`)
        .then(res => res.data)
        .catch(err => {
            console.log('error:', err)
            return err
        })
        
    if (data?.response?.status === 404) {
        return {
            notFound: true,
        }
    }

    return { props: { data, loading: false }, revalidate: 60 }
}

export default index
