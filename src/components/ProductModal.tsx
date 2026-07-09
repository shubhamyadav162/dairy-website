"use client";

import React, { useState, useEffect } from "react";
import { X, Minus, Plus, ShoppingCart, ShieldCheck } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ProductModal() {
  const { selectedProduct, setSelectedProduct, addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Set default size when product changes
  useEffect(() => {
    if (selectedProduct) {
      setSelectedSize(selectedProduct.sizes[0]);
      setQuantity(1);
    }
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  // Calculate dynamic price based on size variant selection
  const getDynamicPrice = () => {
    let basePrice = selectedProduct.price;
    if (selectedProduct.id === "udf-a2-ghee") {
      return selectedSize === "500ml" ? 799 : 1499;
    }
    if (selectedProduct.id === "udf-buffalo-ghee") {
      return selectedSize === "500ml" ? 450 : 850;
    }
    if (selectedProduct.id === "udf-white-butter") {
      return selectedSize === "250g" ? 169 : 299;
    }
    return basePrice;
  };

  const currentPrice = getDynamicPrice();

  const handleAddToCart = () => {
    addToCart(
      {
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: currentPrice,
        image: selectedProduct.image,
      },
      quantity,
      selectedSize
    );
    setSelectedProduct(null); // Close modal
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        {/* Backdrop overlay */}
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 bg-primary/40 backdrop-blur-sm transition-opacity duration-300"
          aria-hidden="true"
        />

        {/* Trick to center modal content */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        {/* Modal content box */}
        <div className="inline-block align-bottom bg-cream rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full border border-primary/5 animate-scale-in">
          
          {/* Close button */}
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 p-2 text-primary/60 hover:text-primary bg-white/60 hover:bg-white rounded-full z-10 transition-colors duration-200"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Image display */}
            <div className="relative pt-[100%] md:pt-0 md:h-full min-h-[300px] bg-cream/40">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=600&auto=format&fit=crop";
                }}
              />
            </div>

            {/* Product description details */}
            <div className="p-6 sm:p-8 flex flex-col justify-between text-left">
              <div>
                <span className="text-gold text-[10px] font-bold uppercase tracking-wider bg-white px-2.5 py-1 rounded-full border border-gold/10 inline-block">
                  {selectedProduct.tag}
                </span>

                <h3 className="text-2xl font-heading font-extrabold text-primary mt-3 leading-tight">
                  {selectedProduct.name}
                </h3>

                <p className="text-xs text-primary/70 mt-3 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Size configuration selection */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2.5">
                    Select Pack Size:
                  </h4>
                  <div className="flex gap-2.5">
                    {selectedProduct.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                          selectedSize === size
                            ? "bg-gold text-white border-gold shadow-sm"
                            : "bg-white text-primary border-primary/10 hover:border-gold hover:text-gold"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Benefits checklist */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    Key Health Benefits:
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProduct.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start space-x-2 text-[11px] text-primary/80">
                        <ShieldCheck className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price & Quantity actions */}
              <div className="mt-8 pt-6 border-t border-primary/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-primary/50 font-semibold uppercase tracking-wider">TotalPrice</span>
                    <span className="text-2xl font-heading font-extrabold text-primary">
                      ₹{currentPrice * quantity}
                    </span>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-primary/10 rounded-full bg-white p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1.5 hover:text-gold text-primary/60 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3.5 text-sm font-bold text-primary">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1.5 hover:text-gold text-primary/60 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart button */}
                <button
                  onClick={handleAddToCart}
                  className="w-full premium-btn-gold py-3 flex items-center justify-center gap-2.5 font-bold"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Shopping Cart
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
