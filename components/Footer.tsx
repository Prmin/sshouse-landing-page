// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // สมมติว่าใช้โลโก้เดียวกับ Navbar

// ไอคอนสำหรับ Social Media (คุณสามารถเพิ่มหรือเปลี่ยนได้ตามต้องการ)
const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
    {children}
  </a>
);

const FacebookIcon = () => <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.602 0 0 .602 0 1.335v21.33C0 23.398.602 24 1.325 24H12.82v-9.29h-3.128V11.41h3.128V9.03c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.142v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.29h-3.12V24h5.698c.722 0 1.325-.602 1.325-1.335V1.335C24 .602 23.398 0 22.675 0z"></path></svg>;
const GithubIcon = () => <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path></svg>;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Sathian Software House</h3>
            <p className="text-gray-400">
              เพื่อนที่เก่งเรื่องเทคโนโลยี คุยกับคุณแบบเข้าใจง่าย
            </p>
            <div className="flex space-x-4 mt-4">
              <SocialIcon href="https://facebook.com"><FacebookIcon /></SocialIcon>
              <SocialIcon href="https://github.com"><GithubIcon /></SocialIcon>
              {/* เพิ่มไอคอนอื่นๆ ที่นี่ เช่น LinkedIn, LINE */}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wider uppercase">ลิงก์ด่วน</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">หน้าหลัก</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">บริการ</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">ผลงาน</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wider uppercase">ติดต่อเรา</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span>[เลขที่] ถนน [ชื่อถนน] ตำบลโพธิ์ทอง อำเภอเมืองร้อยเอ็ด จังหวัดร้อยเอ็ด 45000</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">📧</span>
                <a href="mailto:contact@sshouse.tech" className="hover:text-white transition-colors">contact@sshouse.tech</a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">📞</span>
                <a href="tel:+66812345678" className="hover:text-white transition-colors">081-234-5678</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} Sathian Software House. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;