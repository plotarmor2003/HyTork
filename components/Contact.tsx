
import React, { forwardRef } from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-center text-3xl md:text-5xl mb-8 text-[#2c5f2d] font-semibold relative reveal opacity-0 translate-y-[30px] transition-all duration-700 ease-out after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-[#4a7c59] after:rounded-full">
        {children}
    </h2>
);

const Contact = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="contact" ref={ref} className="py-32 px-[5%] text-center bg-white">
            <SectionTitle>GET IN TOUCH</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl reveal opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-200">
                    <h3 className="text-xl font-bold text-[#2c5f2d] mb-2">John Smith</h3>
                    <p className="text-[#5a7c5a] font-medium mb-2">Chief Technology Officer</p>
                    <a href="mailto:john.smith@hytorkmotors.com" className="text-[#4a7c59] hover:text-[#3d6b4a] transition-colors duration-300">
                        john.smith@hytorkmotors.com
                    </a>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl reveal opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-[400ms]">
                    <h3 className="text-xl font-bold text-[#2c5f2d] mb-2">Sarah Johnson</h3>
                    <p className="text-[#5a7c5a] font-medium mb-2">Head of Engineering</p>
                    <a href="mailto:sarah.johnson@hytorkmotors.com" className="text-[#4a7c59] hover:text-[#3d6b4a] transition-colors duration-300">
                        sarah.johnson@hytorkmotors.com
                    </a>
                </div>
            </div>
        </section>
    );
});

Contact.displayName = 'Contact';

export default Contact;
