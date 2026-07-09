"use client";

import React from "react";
import { CartProvider } from "../context/CartContext";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import ProcessSection from "../components/ProcessSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import CartDrawer from "../components/CartDrawer";

export default function Home() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        {/* Sticky Header */}
        <Header />

        {/* Hero Section */}
        <Hero />

        {/* Product Catalog */}
        <ProductGrid />

        {/* Vedic Process */}
        <ProcessSection />

        {/* Customer Reviews */}
        <Testimonials />

        {/* Trust Footer */}
        <Footer />

        {/* Overlay Modals & Drawers */}
        <ProductModal />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
