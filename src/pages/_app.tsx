import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'

import { Provider } from 'react-redux'
import {store} from '../redux/store'

const irsans = localFont({
    src: [
        {
            path: '../layout/assets/fonts/Woff2/IRANSansXFaNum-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../layout/assets/fonts/Woff2/IRANSansXFaNum-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
})
export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <main className={`${irsans.className} pb-80`}>
                <Component {...pageProps} />
            </main>
        </Provider>
    )
}
