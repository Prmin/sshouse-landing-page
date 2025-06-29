import type { Metadata } from "next";
import { Inter  } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sathian Software House",
  description: "เพื่อนที่เก่งเรื่องเทคโนโลยี คุยกับคุณแบบเข้าใจง่าย",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* เรียกใช้งาน Navbar ที่นี่ */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
