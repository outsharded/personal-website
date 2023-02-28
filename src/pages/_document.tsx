import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class WebsiteDocument extends Document {
	override render() {
		return (
			<Html>
				<Head>
				<link rel="icon" type="image/png" href="https://tec-kids.co.uk/in-mac.png" />
				</Head>
				<body className="bg-[#f7f2f2] dark:bg-zinc-800">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}