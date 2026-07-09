"use client";

import React, { useState } from "react";
import { X, Trash2, Minus, Plus, ShoppingBag, ArrowRight, CheckCircle2, Truck } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    clearCart
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");
  
  // Checkout Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  if (!isCartOpen) return null;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) return;

    // Simulate order placement
    const randomOrderId = "UDF-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomOrderId);
    setIsOrderPlaced(true);
    setIsCheckingOut(false);
    clearCart();
  };

  const resetCartStates = () => {
    setIsCartOpen(false);
    setIsCheckingOut(false);
    setIsOrderPlaced(false);
    setName("");
    setPhone("");
    setAddress("");
    setNotes("");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Backdrop overlay */}
        <div
          onClick={resetCartStates}
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
                  <span>{isCheckingOut ? "Secure Checkout" : isOrderPlaced ? "Order Success" : "Your Basket"}</span>
                </h2>
                <button
                  onClick={resetCartStates}
                  className="rounded-full p-1.5 text-primary/60 hover:bg-primary/5 hover:text-primary transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                
                {/* STATE 1: Order Placed Successfully */}
                {isOrderPlaced && (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-6 py-8">
                    <div className="w-16 h-16 bg-forest/10 text-forest rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-heading font-extrabold text-primary">Order Confirmed!</h3>
                      <p className="text-xs text-primary/70 max-w-sm leading-relaxed">
                        Thank you for shopping with United Dairy Farms. Your fresh products are being processed.
                      </p>
                    </div>

                    <div className="bg-white border border-primary/5 rounded-2xl p-5 w-full text-left space-y-2.5">
                      <div className="flex justify-between text-xs border-b border-primary/5 pb-2">
                        <span className="text-primary/50 font-medium">Order ID</span>
                        <span className="font-bold text-primary">{orderId}</span>
                      </div>
                      <div className="flex justify-between text-xs border-b border-primary/5 pb-2">
                        <span className="text-primary/50 font-medium">Payment Mode</span>
                        <span className="font-semibold text-forest">Cash on Delivery (COD)</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-primary/50 font-medium">Estimate Delivery</span>
                        <span className="font-semibold text-primary flex items-center gap-1">
                          <Truck className="w-3.5 h-3.5 text-gold" />
                          Same day (Mumbai)
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={resetCartStates}
                      className="premium-btn-gold w-full py-3 text-sm font-bold"
                    >
                      Continue Shopping
                    </button>
                  </div>
                )}

                {/* STATE 2: Checkout Form */}
                {!isOrderPlaced && isCheckingOut && (
                  <form onSubmit={handleCheckoutSubmit} className="space-y-5 py-2">
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider border-b border-primary/5 pb-1">
                      Delivery Details (Mumbai Area)
                    </h3>
                    
                    <div className="space-y-1">
                      <label htmlFor="checkout-name" className="text-[11px] font-bold text-primary/60 uppercase">Full Name *</label>
                      <input
                        id="checkout-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-white border border-primary/10 rounded-xl px-4 py-2.5 text-xs text-primary focus:border-gold focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="checkout-phone" className="text-[11px] font-bold text-primary/60 uppercase">Phone Number *</label>
                      <input
                        id="checkout-phone"
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9876543210 (10 digits)"
                        className="w-full bg-white border border-primary/10 rounded-xl px-4 py-2.5 text-xs text-primary focus:border-gold focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="checkout-address" className="text-[11px] font-bold text-primary/60 uppercase">Delivery Address *</label>
                      <textarea
                        id="checkout-address"
                        required
                        rows={3}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="e.g. flat no, building name, Chembur, Mumbai"
                        className="w-full bg-white border border-primary/10 rounded-xl px-4 py-2.5 text-xs text-primary focus:border-gold focus:outline-none resize-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="checkout-notes" className="text-[11px] font-bold text-primary/60 uppercase font-light">Delivery Note (Optional)</label>
                      <input
                        id="checkout-notes"
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. Leave with security, ring bell"
                        className="w-full bg-white border border-primary/10 rounded-xl px-4 py-2.5 text-xs text-primary focus:border-gold focus:outline-none"
                      />
                    </div>

                    <div className="bg-white border border-primary/5 rounded-2xl p-4 space-y-2 mt-6">
                      <div className="flex justify-between text-xs text-primary/70">
                        <span>Items Subtotal</span>
                        <span>₹{cartTotal}</span>
                      </div>
                      <div className="flex justify-between text-xs text-primary/70">
                        <span>Delivery Fee</span>
                        <span className="text-forest font-semibold">FREE Delivery</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold text-primary pt-2 border-t border-primary/5">
                        <span>Total Payable</span>
                        <span>₹{cartTotal}</span>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setIsCheckingOut(false)}
                        className="flex-1 border border-primary/10 hover:border-primary/30 rounded-full py-3 text-xs font-bold text-primary/80 transition-colors"
                      >
                        Back to Basket
                      </button>
                      <button
                        type="submit"
                        className="flex-2 premium-btn-gold py-3 text-xs font-bold"
                      >
                        Place COD Order
                      </button>
                    </div>
                  </form>
                )}

                {/* STATE 3: Standard Cart Drawer Content */}
                {!isOrderPlaced && !isCheckingOut && (
                  <>
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
                              className="w-16 h-16 rounded-xl object-cover bg-cream/40"
                              onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=600&auto=format&fit=crop";
                              }}
                            />
                            
                            <div className="flex-1 text-left">
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
                              className="p-2 text-primary/40 hover:text-destructive transition-colors rounded-full hover:bg-destructive/5"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

              </div>

              {/* Footer */}
              {!isOrderPlaced && !isCheckingOut && cart.length > 0 && (
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

                  <button
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full premium-btn-gold py-3.5 flex items-center justify-center gap-2 font-bold"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
