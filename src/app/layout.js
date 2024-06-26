import { Inter } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";


const inter = Inter({ subsets: ["latin"] });

const clash = localfont({
  src: [
    {
      path:"../../public/fonts/ClashDisplay-Variable.ttf",
      weight: "700 , 500 , 600",
    },
  ],
  variable: "--font-clash"
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${clash.variable}`}>{children}</body>
    </html>
  );
}
