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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
