import React from 'react';
import { Link } from 'react-router-dom'; 
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  
  // Product Data (Same as Header)
  const productCategories = [
    {
      title: "Smart Toilet",
      items: [
        { name: "AquaSky", link: "/aquasky" },
        { name: "AquaBreeze", link: "/aquabreeze" },
        { name: "AquaLite", link: "/aqualite" },
        { name: "PureOne", link: "/pureone" },
      ]
    },
    {
      title: "Concealed Cistern",
      items: [
        { name: "AquaHide", link: "/aquahide" },
      ]
    },
    {
      title: "Bidet",
      items: [
        { name: "Non Electric Toilet Bidet", link: "/bidet" },
      ]
    }
  ];

  return (
    <footer className="bg-[#232323] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Section: Grid Layout (Changed to 4 Columns for better fit) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* --- Column 1: Brand Info --- */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">CLEANLL</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing innovation to your doorstep. We create seamless digital experiences with modern technology.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* --- Column 2: Smart Toilets (Category 1) --- */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">{productCategories[0].title}</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {productCategories[0].items.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 3: Other Products & Quick Links --- */}
          <div>
            {/* Cisterns */}
            <h3 className="text-lg font-semibold mb-4 text-white">{productCategories[1].title}</h3>
            <ul className="space-y-3 text-gray-400 text-sm mb-6">
              {productCategories[1].items.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Bidets */}
            <h3 className="text-lg font-semibold mb-4 text-white">{productCategories[2].title}</h3>
            <ul className="space-y-3 text-gray-400 text-sm mb-6">
              {productCategories[2].items.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick Links (Merged here to save space) */}
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
               <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
               <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* --- Column 4: Contact Info --- */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-white shrink-0" />
                <span>123 Innovation Drive, Tech City, India 201301</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-white shrink-0" />
                <span>+91 9811099841</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-white shrink-0" />
                <span>contact@cleanll.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2025 Cleanll. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;