import React from 'react';

import { ServerStyleSheets } from '@mui/styles';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const materialUISheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line react/display-name
        enhanceApp: (App) => (rest) =>
          materialUISheets.collect(<App {...rest} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        materialUISheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Enlace.com</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
