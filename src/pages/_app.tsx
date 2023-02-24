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
				<link rel="icon" type="image/png" href="https://i.ibb.co/cx8T0L2/in-mac.png" />
			</Head>
			<ThemeProvider attribute="class">
			<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
