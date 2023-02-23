import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html className="">
			<Head>
				<title>tectrainguy</title>
				<link rel="icon" type="image/png" href="../images/favicon.png" />
				<meta name="title" content="tectrainguy" />
				{/* facebook  / open graph */}

				{/* twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://www.anahoward.me" />
				<meta property="twitter:title" content="tectrainguy" />
				<meta property="twitter:description" content="" />
				<meta property="twitter:image" content="https://anahoward.me/images/preview.png"></meta>

				{/* <!-- Google tag (gtag.js) --> */}

			</Head>
			<body className="bg-[#f7f2f2] dark:bg-gray-800">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
