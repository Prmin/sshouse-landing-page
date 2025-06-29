// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ไอคอนสำหรับ Dropdown (ใช้ SVG เพื่อความคมชัดและยืดหยุ่น)
const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 ml-1 transition-transform duration-200"
  >
    <path
      fillRule="evenodd"
      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const Navbar = () => {
  return (
    // Background เต็มความกว้างเพื่อโชว์เงาและทำให้ Navbar ลอยเด่น
    <div className="w-full bg-gradient-to-r from-[#001E4C] to-[#003B7D] p-4 flex justify-center">
      <nav 
        // Container หลักของ Navbar
        className="w-full max-w-6xl bg-white rounded-full shadow-xl px-8 py-3"
      >
        <div className="flex items-center justify-between">
          
          {/* ส่วนของ Logo */}
          <Link href="/" className="flex items-center">
              <Image
                src="/Logo.svg" // **สำคัญ:** คุณต้องสร้างไฟล์ logo นี้ไว้ในโฟลเดอร์ public
                alt="Logo"
                width={110}
                height={40}
                priority // โหลด logo ก่อนเพื่อประสิทธิภาพ
              />
          </Link>

          {/* ส่วนของเมนู */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link href="/" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">
                Home
              </Link>
            </li>
            {/* เมนูแบบมี Dropdown */}
            <li className="flex items-center cursor-pointer text-blue-700 hover:text-blue-900 font-medium transition-colors">
              Solution
              <ChevronDownIcon />
            </li>
            <li className="flex items-center cursor-pointer text-blue-700 hover:text-blue-900 font-medium transition-colors">
              Company
              <ChevronDownIcon />
            </li>
            <li>
              <Link href="/about" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">
                About us
              </Link>
            </li>
          </ul>
          
          {/* (Optional) Hamburger Menu for Mobile */}
          <div className="md:hidden">
            {/* ใส่ปุ่ม Hamburger Icon ที่นี่ */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;