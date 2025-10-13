import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lights in the Heights",
  description: "Lights in the Heights - Fort Worth holiday lighting installers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen w-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen`}
      >
        <div className="flex max-w-screen w-screen  h-screen bg-[#034f20]/30">
          
          <div className="flex flex-col w-[100%] text-shadow-md/5 text-[#c30f16]">{children}          </div>


          
          <Header />

        </div>
      </body>
    </html>
  );
}
