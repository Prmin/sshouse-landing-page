// components/AboutSection.tsx
import React from 'react';

// ไอคอน SVG สำหรับใช้กับพันธกิจแต่ละข้อ (เพื่อความสวยงามและสื่อความหมาย)
const MissionIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
    {children}
  </div>
);

// ไอคอนตัวอย่าง (คุณสามารถเปลี่ยนเป็น SVG ที่ต้องการได้)
const EasyToUseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.311a7.5 7.5 0 0 1-7.5 0" /></svg>;
const StableFastIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>;
const FriendlyTalkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>;
const PracticalDesignIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>;

const missions = [
  {
    icon: <EasyToUseIcon />,
    text: "ทำให้เทคโนโลยีใช้งานง่าย เข้าใจได้โดยไม่ต้องเป็นสายเทค",
  },
  {
    icon: <StableFastIcon />,
    text: "สร้างระบบที่ 'เสถียรและเร็ว' จริง ไม่ให้ผู้ใช้ต้องหงุดหงิด",
  },
  {
    icon: <FriendlyTalkIcon />,
    text: "คุยกับผู้ใช้เหมือนเพื่อน ไม่มีศัพท์ยาก ไม่มีความรู้สึกว่า “เราโง่”",
  },
  {
    icon: <PracticalDesignIcon />,
    text: "ออกแบบทุกอย่างให้เหมาะกับการใช้งานจริงในชีวิตประจำวัน",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
          
          {/* Column 1: Brand Story & Image */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              SSHouse คืออะไร?
            </h2>
            <p className="text-lg text-blue-700 font-semibold">
              Sathian (เสถียร) + Software = SSHouse
            </p>
            <p className="text-xl text-gray-600">
              เราคือเพื่อนที่เก่งเรื่องเทคโนโลยี และคุยกับคุณแบบเข้าใจง่าย 
              เพราะเราเชื่อว่าเทคโนโลยีควรช่วยให้ชีวิตง่ายขึ้น ไม่ใช่ทำให้ใครรู้สึกแย่
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">ภาพลักษณ์ของแบรนด์</h3>
              <p className="text-gray-600">
                เหมือนมีเพื่อนที่ไว้ใจได้อยู่ข้างๆ ทำให้คุณมั่นใจ สบายใจ และใช้งานเทคโนโลยีได้อย่างมีประสิทธิภาพ น่าเชื่อถือ และง่ายดาย
              </p>
            </div>
          </div>

          {/* Column 2: Mission */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">
              พันธกิจของเรา
            </h3>
            <ul className="space-y-6">
              {missions.map((mission, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <MissionIcon>{mission.icon}</MissionIcon>
                  <p className="mt-1.5 text-lg text-gray-700">
                    {mission.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;