
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import { Product } from './data/products';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const sectionRefs = {
        home: useRef<HTMLElement>(null),
        features: useRef<HTMLElement>(null),
        products: useRef<HTMLElement>(null),
        about: useRef<HTMLElement>(null),
        contact: useRef<HTMLElement>(null),
    };

    const handleNavClick = (sectionId: string) => {
        const section = sectionRefs[sectionId as keyof typeof sectionRefs]?.current;
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        const revealOnScroll = () => {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 80) {
                    element.classList.add('opacity-100', 'translate-y-0');
                    element.classList.remove('opacity-0', 'translate-y-[30px]');
                }
            });
        };

        const handleScroll = () => {
            revealOnScroll();

            let current = 'home';
            Object.entries(sectionRefs).forEach(([id, ref]) => {
                const section = ref.current;
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (window.pageYOffset >= sectionTop - 200) {
                        current = id;
                    }
                }
            });
            setActiveSection(current);
        };
        
        window.addEventListener('scroll', handleScroll);
        revealOnScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="bg-white text-[#333] overflow-x-hidden">
            <Header activeSection={activeSection} onNavClick={handleNavClick} />
            <main>
                <Hero ref={sectionRefs.home} />
                <Features ref={sectionRefs.features} />
                <Products ref={sectionRefs.products} onProductClick={setSelectedProduct} />
                <About ref={sectionRefs.about} />
                <Contact ref={sectionRefs.contact} />
            </main>
            <Footer />
            <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </div>
    );
};

export default App;
