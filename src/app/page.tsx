import React from "react";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import ProcessSection from "../components/ProcessSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
    </div>
  );
}

