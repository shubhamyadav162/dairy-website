"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, User } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { setIsCartOpen, cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/80 backdrop-blur-md border-b border-primary/5 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            {/* SVG monogram based on UDF letterhead */}
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border border-gold/30 p-1.5 transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-secondary"
              >
                {/* Stylized monogram U-D-F from the PDF */}
                <path
                  d="M20,20 C30,35 30,65 30,80 C30,85 70,85 70,80 C70,65 70,35 80,20 C60,10 40,10 20,20 Z"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38,40 C45,45 55,45 62,40 C62,55 62,65 50,72 C38,65 38,55 38,40 Z"
                  fill="currentColor"
                  opacity="0.8"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-heading font-bold text-primary tracking-tight leading-none">
                Ultra Dairy Farms
              </span>
              <span className="text-[10px] text-gold font-medium uppercase tracking-widest leading-none mt-1">
                United Dairy Farms
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#products"
              className="text-primary/80 hover:text-gold font-medium text-sm transition-colors duration-200"
            >
              Shop
            </a>
            <a
              href="#process"
              className="text-primary/80 hover:text-gold font-medium text-sm transition-colors duration-200"
            >
              Our Process
            </a>
            <a
              href="#testimonials"
              className="text-primary/80 hover:text-gold font-medium text-sm transition-colors duration-200"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-primary/80 hover:text-gold font-medium text-sm transition-colors duration-200"
            >
              Contact Us
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              className="p-2 text-primary hover:text-gold transition-colors duration-200 rounded-full hover:bg-primary/5"
              aria-label="User account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-primary hover:text-gold transition-colors duration-200 rounded-full hover:bg-primary/5"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-forest text-cream text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-primary hover:text-gold transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream border-b border-primary/5 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-fade-in">
          <a
            href="#products"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-primary/5 hover:text-gold"
          >
            Shop
          </a>
          <a
            href="#process"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-primary/5 hover:text-gold"
          >
            Our Process
          </a>
          <a
            href="#testimonials"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-primary/5 hover:text-gold"
          >
            Reviews
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-primary/5 hover:text-gold"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
