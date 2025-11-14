
import React, { useEffect } from 'react';
import { Product } from '../data/products';

interface ProductModalProps {
    product: Product | null;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (product) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [product, onClose]);

    if (!product) return null;

    return (
        <div 
            className="fixed inset-0 z-[10000] bg-black/70 flex items-center justify-center p-4 animate-fadeIn"
            onClick={onClose}
        >
            <div 
                className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-lg shadow-2xl overflow-hidden flex flex-col animate-slideIn"
                onClick={e => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute right-6 top-6 text-4xl font-bold text-[#2c5f2d] cursor-pointer transition-transform duration-300 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:rotate-90 hover:bg-[#e8f5e9]"
                    aria-label="Close product details"
                >
                    &times;
                </button>
                
                <div className="w-full h-80 flex items-center justify-center bg-gray-100 p-6 border-b border-gray-200 shrink-0">
                    <img src={product.image} alt={product.title} className="max-w-full max-h-full object-contain" />
                </div>

                <div className="p-10 overflow-y-auto flex-1">
                    <div className="pb-6 border-b-2 border-[#e8f5e9] mb-8">
                        <h2 className="text-3xl font-bold text-[#2c5f2d] mb-2">{product.title}</h2>
                        <p className="text-sm font-semibold text-[#4a7c59] uppercase tracking-widest">{product.modalCategory}</p>
                    </div>

                    <div className="pr-2 custom-scrollbar">
                        <p className="text-lg leading-relaxed text-gray-700 mb-10">{product.longDescription}</p>
                        
                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-[#2c5f2d] mb-5 pb-2 border-b-2 border-[#e8f5e9]">Key Features</h3>
                            <ul className="list-none p-0 space-y-3">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="p-4 bg-gray-50 border-l-4 border-[#4a7c59] rounded-r-md text-gray-600 transition-all duration-300 hover:bg-[#e8f5e9] hover:translate-x-1">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-bold text-[#2c5f2d] mb-5 pb-2 border-b-2 border-[#e8f5e9]">Technical Specifications</h3>
                            <ul className="list-none p-0 space-y-3">
                                {product.specs.map((spec, index) => (
                                    <li key={index} className="p-4 bg-gray-50 border-l-4 border-[#4a7c59] rounded-r-md text-gray-600 transition-all duration-300 hover:bg-[#e8f5e9] hover:translate-x-1">
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideIn { from { opacity: 0; transform: translateY(-20px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
                .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
                .animate-slideIn { animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
                .custom-scrollbar::-webkit-scrollbar { width: 8px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #f5f5f5; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #4a7c59; border-radius: 4px; }
            `}</style>
        </div>
    );
};

export default ProductModal;
