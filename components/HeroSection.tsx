// components/HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <section 
      // Container หลักที่กำหนดพื้นหลังและความสูง
      // หมายเหตุ: ผมใช้สี Gradient เป็นพื้นหลังชั่วคราว คุณสามารถเปลี่ยนเป็นรูปภาพได้ง่ายๆ
      // โดยการเพิ่มคลาส `bg-[url('/path-to-your-image.jpg')] bg-cover bg-center`
      className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-[#001E4C] text-white"
    >
      {/* Overlay สีดำโปร่งแสงเพื่อให้ตัวหนังสืออ่านง่ายขึ้นบนพื้นหลังรูปภาพ */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          // จัดเนื้อหาให้อยู่ตรงกลางแนวตั้งและแนวนอน และกำหนดความสูงขั้นต่ำให้เกือบเต็มจอ
          className="min-h-screen flex flex-col items-center justify-center text-center py-24"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
            ซอฟต์แวร์ที่ 'เสถียร' และ 'ใช้ง่าย'
            <span className="block mt-2 sm:mt-4">เหมือนมีเพื่อนช่วยคิด</span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-300">
            เราสร้างสรรค์เทคโนโลยีที่เข้าใจคุณอย่างแท้จริง ลืมศัพท์เทคนิคยากๆ และความหงุดหงิดไปได้เลย 
            เราพร้อมเป็นเพื่อนคู่คิดด้านดิจิทัลให้ธุรกิจของคุณ
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact" // ควรลิงก์ไปยัง Section ติดต่อ
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              ปรึกษาโปรเจกต์ของคุณ
            </a>
            <a
              href="#portfolio" // ควรลิงก์ไปยัง Section ผลงาน
              className="px-8 py-3 border border-gray-400 hover:bg-gray-800 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              ดูผลงานของเรา
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;