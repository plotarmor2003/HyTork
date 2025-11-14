
import React, { forwardRef } from 'react';
import { productsData, Product } from '../data/products';

const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <h2 className={`text-center text-3xl md:text-5xl text-[#2c5f2d] font-semibold relative reveal opacity-0 translate-y-[30px] transition-all duration-700 ease-out after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-[#4a7c59] after:rounded-full ${className}`}>
        {children}
    </h2>
);

interface ProductCardProps {
    product: Product;
    onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => (
    <div 
        className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ease-in-out flex flex-col group h-full hover:-translate-y-2 hover:shadow-2xl"
        onClick={onClick}
    >
        <div className="w-full h-72 flex items-center justify-center bg-gray-100 p-8 overflow-hidden">
            <img src={product.image} alt={product.title} className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="p-7 flex-1 flex flex-col">
            <div className="flex-1">
                <h4 className="text-xl font-bold text-[#2c5f2d] mb-3">{product.title}</h4>
                <p className="text-base text-gray-600 leading-relaxed mb-4">{product.shortDescription}</p>
            </div>
            <span className="inline-block py-1.5 px-4 bg-[#e8f5e9] rounded-full text-xs text-[#2c5f2d] font-bold uppercase tracking-wider self-start mt-4">
                {product.category}
            </span>
        </div>
    </div>
);

interface ProductsProps {
    onProductClick: (product: Product) => void;
}

const Products = forwardRef<HTMLElement, ProductsProps>(({ onProductClick }, ref) => {
    return (
        <section id="products" ref={ref}>
            <div className="pt-40 pb-16 px-[5%] bg-gradient-to-br from-[#f0f9f1] via-[#e8f5e9] to-[#d4edda] text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-[#2c5f2d] mb-4 reveal opacity-0 translate-y-[30px] transition-all duration-700 ease-out">Our Products</h1>
                <p className="text-xl text-[#5a7c5a] max-w-3xl mx-auto reveal opacity-0 translate-y-[30px] transition-all duration-700 ease-out delay-200">Innovative electric mobility solutions designed for efficiency, sustainability, and performance</p>
            </div>
            <div className="py-24 px-[5%] bg-white">
                <SectionTitle className="mb-16">Explore Our Product Range</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {productsData.map((product, index) => (
                        <div key={product.id} className="reveal opacity-0 translate-y-[30px] transition-all duration-700 ease-out" style={{transitionDelay: `${index * 100}ms`}}>
                             <ProductCard 
                                product={product}
                                onClick={() => onProductClick(product)} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

Products.displayName = 'Products';

export default Products;
