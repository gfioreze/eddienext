import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Eddie Corteen',
  description: "Eddie Corteen's portfolio. Eddie is a graphic designer and videographer",
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
