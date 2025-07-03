// components/CoreValuesSection.tsx
import React from 'react';

// ข้อมูลค่านิยมหลัก
const coreValues = [
  {
    name: "Stable",
    description: "มุ่งเน้นพัฒนานวัตกรรมที่มีความเสถียร",
    color: "text-blue-600"
  },
  {
    name: "Superior",
    description: "มุ่งเน้นพัฒนานวัตกรรมที่ยกระดับคุณภาพชีวิต",
    color: "text-green-600"
  },
  {
    name: "Support",
    description: "เน้นการออกแบบนวัตกรรมเพื่อตอบโจทย์ความหลากหลายของสังคม",
    color: "text-red-600"
  }
];

// ไอคอนตกแต่ง (จากตัวอย่าง)
const CrownIcon = () => <svg className="w-12 h-12 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19.1 6.3C18.8 6.1 18.5 6 18.1 6h-1.3l-3-4.9c-.2-.3-.5-.5-.9-.5s-.7.2-.9.5l-3 4.9H7.8c-.4 0-.7.1-1 .3s-.5.5-.5.9c0 .1.1.3.2.4l3.5 2.5-1.3 4.1c-.1.3 0 .7.2 1 .2.3.5.4.8.4.2 0 .4-.1.6-.2l3.6-2.6 3.6 2.6c.2.1.4.2.6.2.3 0 .6-.1.8-.4.2-.3.3-.7.2-1l-1.3-4.1 3.5-2.5c.1-.1.2-.2.2-.4 0-.4-.2-.7-.5-.9zM12 12.3l-2.7 1.9.5-3.1-2.2-1.6h2.8L12 6.4l1.1 3.1h2.8l-2.2 1.6.5 3.1L12 12.3z" /></svg>;
const SmileyIcon = () => <svg className="w-16 h-16 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-4.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm5 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-5.01-5.5c-1.48 0-2.75 1.09-2.96 2.5h5.93c-.21-1.41-1.48-2.5-2.97-2.5z" /></svg>;


const CoreValuesSection = () => {
  return (
    <section className="bg-slate-50 py-24 sm:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ไอคอนตกแต่ง */}
        <div className="absolute top-0 -right-4 hidden lg:block"><CrownIcon /></div>
        <div className="absolute bottom-12 -right-8 hidden lg:block"><SmileyIcon /></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Column 1: Heading */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <p className="font-semibold text-gray-500">Our Culture</p>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-gray-800">
              ค่านิยมหลัก
              <span className="mt-2 block bg-blue-100 text-blue-700 px-2 transform -skew-x-12">3S</span>
            </h2>
          </div>

          {/* Column 2: Value Cards */}
          <div className="lg:col-span-8 space-y-4">
            {coreValues.map((value) => (
              <div 
                key={value.name}
                // แก้ไขการจัดวางเล็กน้อยเพื่อให้ตัวอักษรที่ขนาดไม่เท่ากันยังดูสวยงาม
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6 flex items-baseline space-x-4"
              >
                <h3 className={`text-2xl font-bold ${value.color}`}>
                  {/* ทำให้ตัว S ใหญ่ขึ้น และที่เหลือขนาดปกติ */}
                  <span className="text-4xl">{value.name.charAt(0)}</span>
                  {value.name.slice(1)}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;