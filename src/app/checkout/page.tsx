"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, CreditCard, CheckCircle2, ChevronRight, MapPin, Phone, User, FileText, Truck } from "lucide-react";
import { useCart } from "../../context/CartContext";
import Footer from "../../components/Footer";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [isPlacing, setIsPlacing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsPlacing(true);

    // Simulate placing order
    setTimeout(() => {
      const generatedId = "UDF-" + Math.floor(100000 + Math.random() * 900000);
      setOrderId(generatedId);
      setIsPlacing(false);
      setIsOrderPlaced(true);
      clearCart();
    }, 1500);
  };

  if (isOrderPlaced) {
    return (
      <main className="min-h-screen bg-cream/35 pt-32 pb-20 text-left">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white border border-primary/5 rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-20 h-20 bg-forest/10 text-forest rounded-full flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-3xl font-heading font-extrabold text-primary">Order Confirmed!</h1>
              <p className="text-sm text-primary/70 max-w-md mx-auto leading-relaxed">
                Thank you for shopping with **United Dairy Farms**. Your pure, farm-fresh dairy items are being processed and will be delivered during our next morning slot.
              </p>
            </div>

            <div className="bg-cream/40 border border-primary/5 rounded-2xl p-6 w-full text-left space-y-3.5">
              <div className="flex justify-between text-xs border-b border-primary/5 pb-2">
                <span className="text-primary/50 font-bold uppercase tracking-wider">Order ID</span>
                <span className="font-extrabold text-primary">{orderId}</span>
              </div>
              <div className="flex justify-between text-xs border-b border-primary/5 pb-2">
                <span className="text-primary/50 font-bold uppercase tracking-wider">Payment Mode</span>
                <span className="font-extrabold text-forest uppercase tracking-wider">{paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-primary/50 font-bold uppercase tracking-wider">Estimate Delivery</span>
                <span className="font-bold text-primary">Tomorrow (6:00 AM - 8:00 AM)</span>
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-4 pt-4">
              <Link href="/" className="premium-btn-outline py-3.5 text-xs font-bold text-center block">
                Continue Shopping
              </Link>
              <a href="tel:+918422950000" className="premium-btn-gold py-3.5 text-xs font-bold text-center block">
                Track Delivery
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream/35 pt-32 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-primary/50 uppercase font-bold tracking-wider mb-8">
          <Link href="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary">Checkout</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary mb-12">
          Secure Checkout
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white border border-primary/5 rounded-3xl p-12 text-center max-w-md mx-auto space-y-6 shadow-md">
            <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary">Your basket is empty</h3>
              <p className="text-xs text-primary/60 mt-2 leading-relaxed">
                Add some fresh milk or authentic bilona ghee to your basket before proceeding.
              </p>
            </div>
            <Link href="/" className="premium-btn-gold py-3 text-xs font-bold block">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Form Details */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">
              
              <div className="bg-white border border-primary/5 rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
                <h3 className="text-lg font-heading font-extrabold text-primary border-b border-primary/5 pb-4">
                  1. Delivery Details
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="name" className="text-[10px] font-bold text-primary/60 uppercase tracking-wider flex items-center gap-1">
                        <User className="w-3 h-3 text-gold" /> Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full bg-cream/30 border border-primary/10 rounded-xl px-4 py-3 text-sm focus:border-gold focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label htmlFor="phone" className="text-[10px] font-bold text-primary/60 uppercase tracking-wider flex items-center gap-1">
                        <Phone className="w-3 h-3 text-gold" /> Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 9876543210"
                        className="w-full bg-cream/30 border border-primary/10 rounded-xl px-4 py-3 text-sm focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="address" className="text-[10px] font-bold text-primary/60 uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gold" /> Delivery Address *
                    </label>
                    <textarea
                      id="address"
                      required
                      rows={3}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Shop/Flat No., Building Name, Street, Landmark, Chembur, Mumbai"
                      className="w-full bg-cream/30 border border-primary/10 rounded-xl px-4 py-3 text-sm focus:border-gold focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="notes" className="text-[10px] font-bold text-primary/60 uppercase tracking-wider flex items-center gap-1">
                      <FileText className="w-3 h-3 text-gold" /> Delivery Note (Optional)
                    </label>
                    <input
                      type="text"
                      id="notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Ring bell, leave with security guard"
                      className="w-full bg-cream/30 border border-primary/10 rounded-xl px-4 py-3 text-sm focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Details */}
              <div className="bg-white border border-primary/5 rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
                <h3 className="text-lg font-heading font-extrabold text-primary border-b border-primary/5 pb-4">
                  2. Payment Method
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cod")}
                    className={`p-5 rounded-2xl border text-left flex items-start space-x-3 transition-all ${
                      paymentMethod === "cod"
                        ? "border-forest bg-forest/5 shadow-sm"
                        : "border-primary/10 bg-white hover:border-forest/50"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${
                      paymentMethod === "cod" ? "border-forest" : "border-primary/20"
                    }`}>
                      {paymentMethod === "cod" && <div className="w-2.5 h-2.5 bg-forest rounded-full" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Cash on Delivery (COD)</h4>
                      <p className="text-xs text-primary/60 mt-1 font-light">Pay at your doorstep with Cash, UPI, or Card upon delivery.</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("online")}
                    className={`p-5 rounded-2xl border text-left flex items-start space-x-3 transition-all ${
                      paymentMethod === "online"
                        ? "border-forest bg-forest/5 shadow-sm"
                        : "border-primary/10 bg-white hover:border-forest/50"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 shrink-0 ${
                      paymentMethod === "online" ? "border-forest" : "border-primary/20"
                    }`}>
                      {paymentMethod === "online" && <div className="w-2.5 h-2.5 bg-forest rounded-full" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Online Prepayment</h4>
                      <p className="text-xs text-primary/60 mt-1 font-light">Pay securely using PhonePe, UPI, GPay, Credit/Debit Cards.</p>
                    </div>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isPlacing}
                className="w-full premium-btn-gold py-4 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50"
              >
                {isPlacing ? "Processing Order..." : "Confirm & Place Order"}
              </button>

            </form>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-5 bg-white border border-primary/5 rounded-3xl p-6 sm:p-8 shadow-md space-y-6 text-left">
              <h3 className="text-lg font-heading font-extrabold text-primary border-b border-primary/5 pb-4">
                Order Summary ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)
              </h3>

              {/* Items List */}
              <div className="divide-y divide-primary/5 max-h-[300px] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="py-3 flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-xl object-cover bg-cream/40"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-primary truncate">{item.name}</h4>
                      <p className="text-[10px] text-gold font-semibold mt-0.5">Size: {item.size} × {item.quantity}</p>
                    </div>
                    <span className="text-xs font-bold text-primary">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              {/* Invoice Breakdown */}
              <div className="bg-cream/45 border border-primary/5 rounded-2xl p-4 space-y-2.5">
                <div className="flex justify-between text-xs text-primary/70">
                  <span>Cart Items Total</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-xs text-primary/70">
                  <span>Delivery Charges</span>
                  <span className="text-forest font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-primary pt-2 border-t border-primary/5">
                  <span>Total Payable Amount</span>
                  <span>₹{cartTotal}</span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="space-y-3 pt-2 text-xs font-light text-primary/70">
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-4 h-4 text-gold" />
                  <span>Secure 256-bit encrypted transactions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-gold" />
                  <span>Fresh morning slots (delivered under 12 hours)</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
      
      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}
