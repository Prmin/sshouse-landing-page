// components/VisionSection.tsx
import React from 'react';

// ไอคอนสำหรับคำพูด (เพื่อเพิ่มความสวยงาม)
const QuoteIcon = () => (
  <svg className="w-12 h-12 mx-auto mb-6 text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
);


const VisionSection = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-24 sm:py-32 text-center">

        {/* ไอคอนตกแต่ง */}
        <QuoteIcon />

        {/* ข้อความ Vision หลัก */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-100">
          ผู้สร้างสรรค์นวัตกรรมที่ยกระดับคุณภาพชีวิตและพัฒนาสังคมให้ดีขึ้น
        </h2>

          <QuoteIcon />

      </div>
    </section>
  );
};

export default VisionSection;
