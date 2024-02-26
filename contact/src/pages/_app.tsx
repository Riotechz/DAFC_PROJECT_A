import { EmptyLayout } from '@/layouts'
import { createEmotionCache, theme } from '@/utils';
import { AppPropsWithLayout } from '@/models'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { SWRConfig } from 'swr'
import axiosClient from '@/api-client/axios-client'

const clientSideEmotionCache = createEmotionCache()


export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.Layout ?? EmptyLayout
    return (
        <CacheProvider value={clientSideEmotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <ToastContainer />
                <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SWRConfig>
            </ThemeProvider>
        </CacheProvider>
    );
}