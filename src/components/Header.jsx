import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileProductsOpen(false);
  };

  // 1. MAIN HEADER LINK STYLE (Underline Effect)
  const linkStyle = "h-full flex items-center text-gray-900 font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-[20px] after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full cursor-pointer";

  // 2. DROPDOWN ITEM STYLE (Underline Effect - No Blue)
  // 'w-fit' zaroori hai taaki underline sirf text ke neeche aaye, poore dabba ke neeche nahi
  const dropdownLinkStyle = "text-gray-600 hover:text-gray-900 text-sm font-medium w-fit relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full";

  const mobileLinkStyle = "text-xl font-semibold text-gray-900 hover:text-gray-600 transition-colors";
  
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
    <header className="sticky top-0 z-50 w-full h-20 bg-white shadow-sm flex items-center justify-between border-b border-gray-200">
      
      {/* 1. Left Side (Logo) */}
      <div className="flex-1 flex justify-start items-center gap-3 ml-4 md:ml-8">
        <Link to="/" onClick={closeMenu}> 
          <img 
            src="/L2.png" 
            alt="Cleanll Logo" 
            className="h-10 md:h-12 w-auto object-contain cursor-pointer" 
          />
        </Link>
      </div>

      {/* 2. DESKTOP CENTER (Navigation) */}
      <nav className="hidden md:flex flex-1 justify-center items-center gap-10 h-full">
        <Link to="/" className={linkStyle}>Home</Link>
        <Link to="/about" className={linkStyle}>About</Link>
        
        {/* --- MEGA MENU START --- */}
        <div className="group h-full flex items-center">
          <Link to="#" className={`${linkStyle} flex gap-1 items-center`}>
            Products <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300"/>
          </Link>

          {/* Full Width Dropdown */}
          <div className="fixed top-20 left-0 w-full bg-white border-t border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10 group-hover:z-50">
            <div className="max-w-7xl mx-auto px-8 py-10">
              <div className="grid grid-cols-3 gap-12">
                
                {productCategories.map((category, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
                      {category.title}
                    </h3>
                    
                    <div className="flex flex-col gap-3">
                      {category.items.map((item, idx) => (
                        <Link 
                          key={idx} 
                          to={item.link} 
                          // Modified Style Applied Here
                          className={dropdownLinkStyle}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-100 text-right">
                 
              </div>
            </div>
          </div>
        </div>
        {/* --- MEGA MENU END --- */}

      </nav>

      {/* 3. RIGHT SIDE SPACER */}
      <div className="hidden md:flex flex-1"></div>

      {/* 4. MOBILE MENU BUTTON */}
      <div className="md:hidden mr-4">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-900 focus:outline-none"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* 5. MOBILE DROPDOWN MENU */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-white shadow-lg border-t border-gray-100 flex flex-col px-8 py-10 md:hidden overflow-y-auto">
          
          <Link to="/" onClick={closeMenu} className={`${mobileLinkStyle} mb-6`}>Home</Link>
          <Link to="/about" onClick={closeMenu} className={`${mobileLinkStyle} mb-6`}>About</Link>
          
          {/* Mobile Products Accordion */}
          <div className="mb-6">
            <button 
              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              className="flex items-center justify-between w-full text-xl font-semibold text-gray-900"
            >
              Products <ChevronDown size={20} className={`transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`}/>
            </button>

            {isMobileProductsOpen && (
              <div className="mt-4 ml-2 pl-4 border-l-2 border-gray-100 flex flex-col gap-4">
                {productCategories.map((cat, i) => (
                  <div key={i}>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{cat.title}</p>
                    {cat.items.map((item, j) => (
                       <Link 
                         key={j} 
                         to={item.link} 
                         onClick={closeMenu} 
                         className="block text-gray-800 py-1 hover:text-gray-500 font-medium"
                       >
                         {item.name}
                       </Link>
                    ))}
                  </div>
                ))}
                
              </div>
            )}
          </div>

        </div>
      )}

    </header>
  );
};

export default Header;