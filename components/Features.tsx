
import React, { forwardRef } from 'react';

interface FeatureCardProps {
    icon: string;
    title: string;
    subtitle?: string;
    description: string;
    delay?: string;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-center text-3xl md:text-5xl mb-20 text-[#2c5f2d] font-semibold relative reveal opacity-0 translate-y-[30px] transition-all duration-700 ease-out after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-[#4a7c59] after:rounded-full">
        {children}
    </h2>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, subtitle, description, delay = '0ms' }) => (
    <div className={`bg-white p-10 rounded-xl text-center transition-all duration-300 ease-in-out border border-[#e8f5e9] shadow-lg hover:-translate-y-2 hover:shadow-2xl hover:border-[#4a7c59] reveal opacity-0 translate-y-[30px]`} style={{transitionDelay: delay}}>
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#4a7c59] to-[#2c5f2d] rounded-full flex items-center justify-center text-4xl transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-[#4a7c59]/30">
            {icon}
        </div>
        <h3 className="text-2xl mb-4 text-[#2c5f2d] font-semibold">{title}</h3>
        {subtitle && <h4 className="text-lg mb-3 text-[#2c5f2d] font-medium">{subtitle}</h4>}
        <p className="text-[#666] leading-relaxed text-base">{description}</p>
    </div>
);

const featuresData = [
    {
        icon: '⚡',
        title: 'Maximum Efficiency',
        subtitle: 'Optimized Energy • Superior Output',
        description: 'Engineered for peak performance with intelligent energy use and consistent operational stability.'
    },
    {
        icon: '🛡️',
        title: 'Adaptive Durability',
        subtitle: 'Built Tough • Made to Last',
        description: 'Rugged design and precision engineering ensure reliability under continuous, high-demand operation.'
    },
    {
        icon: '🔧',
        title: 'Modular Architecture',
        subtitle: 'Smart Design • Quick Maintenance',
        description: 'Easily serviceable components and plug-and-play upgrades reduce downtime and boost productivity.'
    },
    {
        icon: '🎯',
        title: 'Precision Engineering',
        subtitle: 'Accurate Motion • Perfect Control',
        description: 'Advanced control systems deliver smooth, millimeter-level precision for complex applications.'
    },
    {
        icon: '📡',
        title: 'IoT Integration',
        subtitle: 'Connected Intelligence • Smart Insights',
        description: 'Real-time data, predictive analytics, and remote monitoring enable proactive system optimization.'
    },
    {
        icon: '🚀',
        title: 'High Performance',
        subtitle: 'Power • Speed • Excellence',
        description: 'Cutting-edge technology delivering superior power output and exceptional speed for demanding industrial applications.'
    },
];

const Features = forwardRef<HTMLElement>((props, ref) => {
    return (
        <section id="features" ref={ref} className="py-32 px-[5%] bg-white">
            <SectionTitle>ADVANCED CAPABILITIES</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {featuresData.map((feature, index) => (
                    <FeatureCard 
                        key={feature.title} 
                        icon={feature.icon} 
                        title={feature.title} 
                        subtitle={feature.subtitle}
                        description={feature.description}
                        delay={`${index * 100}ms`}
                    />
                ))}
            </div>
        </section>
    );
});

Features.displayName = 'Features';

export default Features;
