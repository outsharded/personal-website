import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
	return (
		<Html className="">
			<Head>
				<title>tectrainguy</title>
				<link rel="icon" type="image/png" href="../images/favicon.png" />
				<meta name="title" content="tectrainguy" />
			</Head>
			<body className="bg-[#f7f2f2] dark:bg-gray-800">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
