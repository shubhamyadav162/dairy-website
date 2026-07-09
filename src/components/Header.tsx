"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
          ? "bg-[#FAF6EE]/90 backdrop-blur-md border-b border-primary/5 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            {/* Official UDF Logo Monogram Container */}
            <div className="w-12 h-12 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center border border-gold/30 p-1.5 transition-transform group-hover:scale-105 overflow-hidden">
              <img
                src="/images/udf-logo.png"
                alt="United Dairy Farms Monogram Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg sm:text-xl font-heading font-extrabold text-primary tracking-tight leading-none">
                United Dairy Farms
              </span>
              <span className="text-[10px] text-gold font-bold uppercase tracking-widest leading-none mt-1.5">
                Pure Vedic Tradition
              </span>
            </div>
          </Link>

          {/* Desktop Nav (redirects back to home sections dynamically) */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/#products"
              className="text-primary/80 hover:text-gold font-medium text-sm transition-colors duration-200"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-primary/80 hover:text-gold font-medium text-sm transition-colors duration-200"
            >
              Our Story
            </Link>
            <Link
              href="/#testimonials"
              className="text-primary/80 hover:text-gold font-medium text-sm transition-colors duration-200"
            >
              Reviews
            </Link>
            <Link
              href="/#contact"
              className="text-primary/80 hover:text-gold font-medium text-sm transition-colors duration-200"
            >
              Contact Us
            </Link>
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
        <div className="md:hidden bg-[#FAF6EE] border-b border-primary/5 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-fade-in text-left">
          <Link
            href="/#products"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-primary/5 hover:text-gold"
          >
            Shop
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-primary/5 hover:text-gold"
          >
            Our Story
          </Link>
          <Link
            href="/#testimonials"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-primary/5 hover:text-gold"
          >
            Reviews
          </Link>
          <Link
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-primary/5 hover:text-gold"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
