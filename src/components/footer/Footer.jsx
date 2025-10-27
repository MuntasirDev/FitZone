import React from "react";
import {
  Dumbbell,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="Sora bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 border-t border-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Dumbbell size={30} className="text-green-400" />
            <h3 className="text-2xl font-extrabold text-green-400">
              Fit<span className="text-green-300">Zone</span>
            </h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Push your limits, sculpt your strength, and live fit every day.
            FitZone — where motivation meets transformation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-green-400 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <FooterLink text="Home" />
            <FooterLink text="About" />
            <FooterLink text="Services" />
            <FooterLink text="Blogs" />
            <FooterLink text="Contact" />
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-green-400 mb-4">
            Our Programs
          </h4>
          <ul className="space-y-2">
            <FooterLink text="Personal Training" />
            <FooterLink text="Cardio Classes" />
            <FooterLink text="Strength Building" />
            <FooterLink text="Nutrition Plans" />
            <FooterLink text="Yoga & Meditation" />
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold text-green-400 mb-4">
            Follow Us
          </h4>
          <div className="flex items-center gap-4 mb-5">
            <SocialIcon Icon={Facebook} href="#" />
            <SocialIcon Icon={Instagram} href="#" />
            <SocialIcon Icon={Youtube} href="#" />
            
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 FitZone. All rights reserved.
          </p>
        </div>
      </div>

    
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        Developed by{" "}
        <a
          href="https://github.com/MuntasirDev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline hover:text-green-300 transition-colors duration-300 font-semibold"
        >
          MuntasirDev
        </a>
      </div>
    </footer>
  );
};

export default Footer;


const FooterLink = ({ text }) => (
  <li>
    <a
      href="#"
      className="hover:text-green-400 transition-colors duration-200"
    >
      {text}
    </a>
  </li>
);

const SocialIcon = ({ Icon, href }) => {
  const IconComponent = Icon; 

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-gray-700 hover:border-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300 p-2 rounded-full"
    >
      <IconComponent size={18} />  
    </a>
  );
};
