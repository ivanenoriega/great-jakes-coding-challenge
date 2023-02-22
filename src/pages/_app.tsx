import Layout from '@/components/Layout';
import '@/styles/normalize.css'
import { createTheme, ThemeProvider } from '@mui/material';
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	const CustomFontTheme = createTheme({
		typography: {
			h1: {
				fontSize: '3rem',
				lineHeight: '3rem',
			}
		}
	});

	useEffect(() => {
		console.log('App Component', Component, pageProps)
	}, [Component, pageProps])

	return (
		<ThemeProvider theme={CustomFontTheme}>
			<LazyMotion features={domAnimation}>
				<Layout>
					<AnimatePresence initial={false}>
						<Component key={pageProps.page} {...pageProps} />
					</AnimatePresence>
				</Layout>
			</LazyMotion>
		</ThemeProvider>
	)
}
