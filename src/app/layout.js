import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reaction Lights",
  description: "Test your reactions!",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/F1_chequered_flag.svg/1024px-F1_chequered_flag.svg.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <title>Reaction Lights</title>
          <meta name="description" content="Test your reactions!" />

          {/* Facebook Meta Tags */}
          <meta
            property="og:url"
            content="https://reaction-lights.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Reaction Lights" />
          <meta property="og:description" content="Test your reactions!" />
          <meta
            property="og:image"
            content="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/F1_chequered_flag.svg/1024px-F1_chequered_flag.svg.png"
          />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:domain"
            content="reaction-lights.vercel.app"
          />
          <meta
            property="twitter:url"
            content="https://reaction-lights.vercel.app/"
          />
          <meta name="twitter:title" content="Reaction Lights" />
          <meta name="twitter:description" content="Test your reactions!" />
          <meta
            name="twitter:image"
            content="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/F1_chequered_flag.svg/1024px-F1_chequered_flag.svg.png"
          />
        </Head>
        {children}
      </body>
    </html>
  );
}
