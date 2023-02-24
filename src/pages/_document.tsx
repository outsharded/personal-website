import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class WebsiteDocument extends Document {
	override render() {
		return (
			<Html>
				<Head>
				<link rel="icon" type="image/png" href="https://i.ibb.co/cx8T0L2/in-mac.png" />
				</Head>
				<body className="bg-[#f7f2f2] dark:bg-gray-800">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}