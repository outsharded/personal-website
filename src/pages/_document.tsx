import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class WebsiteDocument extends Document {
	override render() {
		return (
			<Html>
				<Head>
				<link rel="icon" type="image/x-icon" href="@images/favicon.ico" />
				</Head>
				<body className="bg-[#f7f2f2] dark:bg-gray-800">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}