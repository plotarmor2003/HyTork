
import React, { forwardRef } from 'react';

const Hero = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section 
            id="home" 
            ref={ref} 
            className="min-h-screen flex items-center bg-gradient-to-br from-[#f0f9f1] via-[#e8f5e9] to-[#d4edda] relative overflow-hidden pt-32 pb-16 px-[5%]"
        >

            
            <div className="container mx-auto z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#2c5f2d] leading-tight reveal opacity-0 translate-y-[30px] transition-all duration-1000 ease-out">
                            Revolutionizing Industrial Mobility
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-[#5a7c5a] font-normal reveal opacity-0 translate-y-[30px] transition-all duration-1000 ease-out delay-200">
                            HyTork Motors delivers autonomous, electric, and heavy-duty vehicles engineered for the future of industrial logistics.
                        </p>

                        {/* Key Highlights */}
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 mb-12 reveal opacity-0 translate-y-[30px] transition-all duration-1000 ease-out delay-[400ms]">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl"></span>
                                <span className="text-[#3d6b4a] font-semibold">Drive</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl"></span>
                                <span className="text-[#3d6b4a] font-semibold">Deliver</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl"></span>
                                <span className="text-[#3d6b4a] font-semibold">Dominate</span>
                            </div>
                        </div>

                        <a 
                            href="#features" 
                            className="inline-block py-4 px-12 bg-[#4a7c59] text-white no-underline rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-[#4a7c59]/30 hover:bg-[#3d6b4a] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4a7c59]/40 reveal opacity-0 translate-y-[30px] transition-all duration-1000 ease-out delay-[600ms]"
                        >
                            Explore Solutions
                        </a>
                    </div>

                    {/* Image Content */}
                    <div className="hidden lg:flex justify-center items-center reveal opacity-0 translate-y-[30px] transition-all duration-1000 ease-out delay-300">
                        <div className="relative w-full max-w-lg">
                             <div className="absolute -inset-4 bg-gradient-to-r from-green-200 to-green-300 rounded-full opacity-30 blur-2xl"></div>
                            <img 
                                src="atom_xl.jpg" 
                                alt="HyTork ATOM-iXL Autonomous Vehicle" 
                                className="relative w-full h-auto object-cover rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero;
