import 'tailwindcss/tailwind.css'
import '@/styles/styles.css'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider attribute="class">
				
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
