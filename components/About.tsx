
import React, { forwardRef } from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-center text-3xl md:text-5xl mb-20 text-[#2c5f2d] font-semibold relative reveal opacity-0 translate-y-[30px] transition-all duration-700 ease-out after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-[#4a7c59] after:rounded-full">
        {children}
    </h2>
);

const timelineData = [
    { year: "2020", event: "HyTork Motors founded — startup roots backed by experienced professionals." },
    { year: "2021-2022", event: "Capability building across design, engineering & manufacturing." },
    { year: "2023", event: "Portfolio expansion; strategic partnerships established." },
    { year: "2024", event: "Market strengthening; multiple solutions matured." },
    { year: "2025", event: "Global presence established — Chennai HQ, Detroit & Liechtenstein." },
    { year: "2026 & Beyond", event: "Scaling manufacturing and product ecosystem expansion." },
];

const About = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="about" ref={ref} className="py-32 px-[5%] bg-gradient-to-br from-[#f0f9f1] via-[#e8f5e9] to-[#d4edda]">
            <SectionTitle>OUR JOURNEY</SectionTitle>
            <div className="max-w-7xl mx-auto space-y-20">
                
                <div className="grid md:grid-cols-2 gap-12 items-center reveal opacity-0 translate-y-[30px] transition-all duration-700 ease-out">
                    <div>
                        <h3 className="text-3xl font-bold text-[#2c5f2d] mb-4">Our Story</h3>
                        <p className="text-[#5a7c5a] text-lg leading-relaxed">
                            Every meaningful innovation starts with a simple idea — a better way to move forward. At HyTork, that idea became a mission: reinvent mobility to be cleaner, smarter, and more efficient. We are a team of passionate builders, thinkers, and doers — engineers and leaders who have witnessed the evolution of mobility and know what the future demands. We are driven by curiosity, fueled by technology, and committed to sustainability. We don’t just develop mobility solutions — we accelerate the transition to a greener tomorrow.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-[#2c5f2d] mb-4">Who We Are</h3>
                        <p className="text-[#5a7c5a] text-lg leading-relaxed">
                            We are HyTork Motors — a new-age engineering and mobility company built by innovators and technologists who share one goal: to make mobility efficient, intelligent, and sustainable for everyone. Founded in 2020, HyTork is a startup strengthened by decades of global experience across powertrain design, advanced engineering, and scalable manufacturing operations. With headquarters in Chennai and a growing global presence in Detroit and Liechtenstein, we collaborate worldwide to bring breakthrough mobility technologies to market.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start reveal opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-200">
                     <div className="bg-white/50 p-8 rounded-lg shadow-md border border-green-200">
                        <h3 className="text-3xl font-bold text-[#2c5f2d] mb-4">Mission</h3>
                        <p className="text-[#5a7c5a] text-lg leading-relaxed">
                            To accelerate the transition to clean and efficient mobility through intelligent engineering, sustainable innovation, and high-quality execution — creating a better way for the world to move.
                        </p>
                    </div>
                    <div className="bg-white/50 p-8 rounded-lg shadow-md border border-green-200">
                        <h3 className="text-3xl font-bold text-[#2c5f2d] mb-4">Vision</h3>
                        <p className="text-[#5a7c5a] text-lg leading-relaxed">
                            "Efficient Drive Towards a Green Future" is our commitment. We strive to deliver eco-friendly and future-ready mobility solutions that reduce environmental impact, enhance energy efficiency, and make technology accessible across industries and communities.
                        </p>
                    </div>
                </div>

                <div className="reveal opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-[400ms]">
                    <h3 className="text-3xl font-bold text-[#2c5f2d] mb-10 text-center">Company Evolution Timeline</h3>
                    <div className="relative pl-10 border-l-2 border-[#4a7c59]/50">
                        {timelineData.map((item, index) => (
                            <div key={index} className="mb-10 relative">
                                <div className="absolute -left-[49px] top-1 w-6 h-6 bg-[#4a7c59] rounded-full border-4 border-white"></div>
                                <p className="text-lg font-bold text-[#2c5f2d]">{item.year}</p>
                                <p className="text-[#5a7c5a]">{item.event}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
});

About.displayName = 'About';

export default About;
