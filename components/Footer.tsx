import React from 'react';
import Image from 'next/image'; // สมมติว่าใช้โลโก้เดียวกับ Navbar

// ไอคอนสำหรับ Social Media (คุณสามารถเพิ่มหรือเปลี่ยนได้ตามต้องการ)
const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
    {children}
  </a>
);

const FacebookIcon = () => <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.602 0 0 .602 0 1.335v21.33C0 23.398.602 24 1.325 24H12.82v-9.29h-3.128V11.41h3.128V9.03c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.142v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.29h-3.12V24h5.698c.722 0 1.325-.602 1.325-1.335V1.335C24 .602 23.398 0 22.675 0z"></path></svg>;

const Footer = () => {

  return (
      <footer className="bg-gradient-to-r from-[#001E4C] to-[#003B7D]">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              {/* Responsive Columns */}
              <div className="grid grid-cols-1 md:flex md:justify-between gap-8">
                  {/* Column 1 */}
                  <div className="space-y-4 md:max-w-md">
                      {/* <Image
                          src="/" // **สำคัญ:** คุณต้องสร้างไฟล์ logo นี้ไว้ในโฟลเดอร์ public
                          alt="Logo-white"
                          width={200}
                          height={0}
                          priority // โหลด logo ก่อนเพื่อประสิทธิภาพ
                      /> */}
                      <p className="text-gray-400">นวัตกรรมที่สร้างรรค์ตอบสนองด้วยความเข้าใจ</p>
                  </div>

                  {/* Column 2 */}
                  {/*<div className="space-y-4 md:max-w-md">*/}
                  {/*    <h4 className="font-semibold text-white tracking-wider uppercase">ติดต่อเรา</h4>*/}
                  {/*    <ul className="space-y-2 text-gray-400">*/}
                  {/*        <li className="flex items-start">*/}
                  {/*            <span className="mr-2 mt-1">📍</span>*/}
                  {/*            <span>[เลขที่] ถนน [ชื่อถนน] ตำบลโพธิ์ทอง อำเภอเมืองร้อยเอ็ด จังหวัดร้อยเอ็ด 45000</span>*/}
                  {/*        </li>*/}
                  {/*        <li className="flex items-start">*/}
                  {/*            <span className="mr-2 mt-1">📧</span>*/}
                  {/*            <a href="mailto:contact@sshouse.tech" className="hover:text-white transition-colors">*/}
                  {/*                contact@sshouse.tech*/}
                  {/*            </a>*/}
                  {/*        </li>*/}
                  {/*        <li className="flex items-start">*/}
                  {/*            <span className="mr-2 mt-1">📞</span>*/}
                  {/*            <a href="tel:+66812345678" className="hover:text-white transition-colors">*/}
                  {/*                081-234-5678*/}
                  {/*            </a>*/}
                  {/*        </li>*/}
                  {/*    </ul>*/}
                  {/*</div>*/}
              </div>

              {/* Bottom Bar */}
              <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 md:flex md:justify-between">
                  <p>&copy; 2025 Sathian Software House. All Rights Reserved.</p>
                  <div className="flex ">
                      <SocialIcon href="/">
                          <FacebookIcon/>
                      </SocialIcon>
                      {/* Add more icons here */}
                  </div>
              </div>
          </div>
      </footer>
  );
};

export default Footer;
