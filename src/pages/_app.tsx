import '@/styles/normalize.css'
import { createTheme, ThemeProvider } from '@mui/material';
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
	const CustomFontTheme = createTheme({
		typography: {
			h1: {
				fontSize: '3rem',
				lineHeight: '3rem',
			}
		}
	});
	
	return (
		<ThemeProvider theme={CustomFontTheme}>
			<LazyMotion features={domAnimation}>
				<AnimatePresence initial={false}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</AnimatePresence>
			</LazyMotion>
		</ThemeProvider>
	)
}
