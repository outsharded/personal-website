import 'tailwindcss/tailwind.css'
import '@/styles/styles.css'
import { ThemeProvider } from 'next-themes'
import type {AppProps} from 'next/app';
import Head from 'next/head';



export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<title>tectrainguy</title>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link rel="icon" href="../images/favicon.ico" />
			</Head>
			<ThemeProvider attribute="class">
			<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
