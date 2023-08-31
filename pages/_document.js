import Document, { Html, Head, Main, NextScript } from "next/document";
import packageInfo from "../package.json";
import stylesheet from "../styles/style.styl";

class SyntaxDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={packageInfo.description} />
          <meta name="theme-color" content="#FABF46" />
          <meta charSet="utf-8" />
          <meta property="og:description" content={packageInfo.description} />
          <meta
            property="og:image"
            content="https://guysinpants.com/static/syntax-banner.png"
          />
          {/* <link rel="icon" href="https://guysinpants.com/static/favicon.png" /> */}
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👖</text></svg>"
          />
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: stylesheet.replace(/\n/g, "") }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SyntaxDocument;
