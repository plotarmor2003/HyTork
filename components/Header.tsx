
import React, { useState, useEffect } from 'react';

interface HeaderProps {
    activeSection: string;
    onNavClick: (sectionId: string) => void;
}

const NavLink: React.FC<{ 
    href: string; 
    label: string; 
    isActive: boolean;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}> = ({ href, label, isActive, onClick }) => (
    <li>
        <a 
            href={href} 
            onClick={(e) => onClick(e, href.slice(1))}
            className={`
                text-[#333] decoration-none font-medium transition-all duration-300 relative py-2 cursor-pointer
                hover:text-[#4a7c59]
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                after:bg-[#4a7c59] after:transition-all after:duration-300
                hover:after:w-full
                ${isActive ? 'text-[#4a7c59] after:w-full' : ''}
            `}
        >
            {label}
        </a>
    </li>
);

const Header: React.FC<HeaderProps> = ({ activeSection, onNavClick }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        onNavClick(sectionId);
    };

    const navLinks = [
        { href: '#home', label: 'HOME' },
        { href: '#features', label: 'FEATURES' },
        { href: '#products', label: 'PRODUCTS' },
        { href: '#about', label: 'ABOUT US' },
        { href: '#contact', label: 'CONTACT' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-[1000] flex justify-between items-center bg-white/95 backdrop-blur-md transition-all duration-300 ${scrolled ? 'py-4 px-[5%] shadow-lg' : 'py-5 px-[5%] shadow-md'}`}>
            <div className="flex items-center">
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="inline-block">
                    <img 
                        src="logotm.png" 
                        alt="Hytork Motors" 
                        className="h-12 md:h-14 lg:h-16 w-auto object-contain transition-transform hover:scale-105"
                    />
                </a>
            </div>
            <ul className="hidden md:flex gap-10 list-none">
                {navLinks.map(link => (
                    <NavLink 
                        key={link.href} 
                        href={link.href} 
                        label={link.label} 
                        isActive={activeSection === link.href.slice(1)} 
                        onClick={handleLinkClick}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default Header;
