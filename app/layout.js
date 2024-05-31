import { Lato, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./CartContext";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon/favicon.ico'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'mask-icon',
      color: '#46668e',
      url: '/favicon/safari-pinned-tab.svg',
    },
  ],
  msTileColor: '#46668e',
  manifest: 'favicon/site.webmanifest',
  openGraph: {
    title: 'Photographe à Rouen | Animalier et Automobile',
    description: 'Photographe à Rouen, spécialiste de la photographie animalière et automobile.',
    url: "https://www.myogiphotographie.fr/",
    image:"https://github.com/AlexisPennel/myogi/blob/main/opengraph-image.jpg"
  }
}

const SourceFont = Source_Sans_3({
  weight: ['200', '300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source',
});

const LatoFont = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${LatoFont.variable} ${SourceFont.variable}`}>
        <Analytics />
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
