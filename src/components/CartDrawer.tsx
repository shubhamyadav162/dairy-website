"use client";

import React from "react";
import Link from "next/link";
import { X, Trash2, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Backdrop overlay */}
        <div
          onClick={() => setIsCartOpen(false)}
          className="absolute inset-0 bg-primary/40 backdrop-blur-xs transition-opacity"
          aria-hidden="true"
        />

        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          
          {/* Cart Panel Container */}
          <div className="pointer-events-auto w-screen max-w-md transform transition-all duration-300 ease-in-out">
            <div className="flex h-full flex-col bg-cream shadow-2xl border-l border-primary/5 text-left">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-primary/5 px-6 py-5 bg-white">
                <h2 className="text-xl font-heading font-extrabold text-primary flex items-center space-x-2">
                  <ShoppingBag className="w-5 h-5 text-gold" />
                  <span>Your Basket</span>
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="rounded-full p-1.5 text-primary/60 hover:bg-primary/5 hover:text-primary transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12">
                    <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-primary">Your basket is empty</h3>
                      <p className="text-xs text-primary/60 mt-1 max-w-[200px] mx-auto leading-relaxed">
                        Looks like you haven't added any fresh dairy products yet.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="premium-btn-gold text-xs px-5 py-2 mt-2 font-bold"
                    >
                      Browse Products
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={`${item.id}-${item.size}`}
                        className="bg-white rounded-2xl p-4 border border-primary/5 flex items-center space-x-4 shadow-sm"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-xl object-cover bg-cream/40 shrink-0"
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=600&auto=format&fit=crop";
                          }}
                        />
                        
                        <div className="flex-1 text-left min-w-0">
                          <h4 className="text-xs font-bold text-primary leading-tight line-clamp-1">
                            {item.name}
                          </h4>
                          <p className="text-[10px] text-gold font-bold mt-0.5">
                            Size: {item.size}
                          </p>
                          
                          <div className="flex items-center justify-between mt-3">
                            {/* Quantity editor */}
                            <div className="flex items-center border border-primary/10 rounded-full bg-cream/30 px-1 py-0.5">
                              <button
                                onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                className="p-1 hover:text-gold text-primary/60 transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2.5 text-xs font-bold text-primary">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                className="p-1 hover:text-gold text-primary/60 transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <span className="text-xs font-bold text-primary">
                              ₹{item.price * item.quantity}
                            </span>
                          </div>
                        </div>

                        {/* Remove button */}
                        <button
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="p-2 text-primary/40 hover:text-destructive transition-colors rounded-full hover:bg-destructive/5 shrink-0"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="border-t border-primary/5 bg-white px-6 py-6 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-primary/70">
                      <span>Subtotal</span>
                      <span className="font-semibold">₹{cartTotal}</span>
                    </div>
                    <div className="flex justify-between text-xs text-primary/70">
                      <span>Delivery</span>
                      <span className="text-forest font-semibold">FREE Delivery</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-primary pt-2 border-t border-primary/5">
                      <span>Estimated Total</span>
                      <span>₹{cartTotal}</span>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="w-full premium-btn-gold py-3.5 flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-xs"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
