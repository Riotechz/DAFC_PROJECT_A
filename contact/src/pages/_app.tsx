import { theme } from '@/utils';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { SWRConfig } from 'swr'
import axiosClient from '@/api-client/axios-client'

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;
    return (
        <AppCacheProvider {...props}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <ToastContainer />
                <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
                    <Component {...pageProps} />
                </SWRConfig>
            </ThemeProvider>
        </AppCacheProvider>
    );
}