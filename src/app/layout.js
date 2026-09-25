// layout.js
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// export const metadata = {
//   title: "Blindfold Villa — India's First Blindfold Reality Show",
//   description: "8 Strangers. Aankhein Band. Ek Villa. The Ultimate Test of Love.",
//   icons: {
//     icon: "/images/blindnewlogo.png"
//   },
// };

export const metadata = {
  title: "Harit Energy Mission | CBG, Renewable Energy & Sustainable Agriculture",
  description:
    "Harit Energy Mission is driving sustainable rural transformation through Compressed Biogas, renewable energy, smart agriculture, dairy solutions, and waste-to-energy initiatives.",
  icons: {
    icon: "/hemufooterlogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 👇 Apply Inter globally */}
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
