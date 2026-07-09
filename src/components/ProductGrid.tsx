"use client";

import React from "react";
import Link from "next/link";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { useCart, Product } from "../context/CartContext";

// 11 Detailed products catalog including subscriptions, bundles and combinations
export const PRODUCTS: Product[] = [
  {
    id: "udf-a2-milk-glass",
    name: "Ultra Pure A2 Cow Milk (Glass Bottle)",
    price: 100,
    rating: 4.9,
    reviews: 312,
    image: "/images/WhatsApp Image 2026-07-09 at 2.19.22 PM (2).jpeg",
    tag: "Best Seller",
    description: "Raw, unadulterated, and pasteurized farm-fresh whole A2 cow milk delivered in sterilized, eco-friendly glass bottles within 12 hours of milking.",
    benefits: [
      "Pure A2 beta-casein protein",
      "Delivered in premium glass bottles",
      "Sourced from grass-fed Gir & Rathi cows",
      "Rigorous 40+ parameter lab testing"
    ],
    sizes: ["1 Litre"]
  },
  {
    id: "udf-a2-ghee",
    name: "Ultra Premium A2 Desi Cow Ghee (Bilona)",
    price: 1499,
    rating: 4.9,
    reviews: 248,
    image: "/images/WhatsApp Image 2026-07-09 at 2.19.22 PM.jpeg",
    tag: "Vedic Bilona Churned",
    description: "Prepared using traditional clay pot bilona churning of A2 cow milk curds. Simmered on slow woodfire for rich granularity and authentic aroma.",
    benefits: [
      "Traditional A2 Vedic Bilona method",
      "Lactose & gluten-free",
      "Improves digestion & gut health",
      "Rich source of Vitamins A, D, E, K"
    ],
    sizes: ["1 Litre", "500ml"]
  },
  {
    id: "udf-ghee-combo-3l",
    name: "Ultimate Vedic Ghee Storage Pack (3 Litres)",
    price: 4299,
    rating: 4.9,
    reviews: 96,
    image: "/images/WhatsApp Image 2026-07-09 at 2.19.20 PM (3).jpeg",
    tag: "Bulk Combo Saving",
    description: "Get a value pack of 3 bottles of 1 Litre A2 Desi Cow Bilona Ghee. Save money on bulk shipping and secure your family's health for months.",
    benefits: [
      "Pack of 3 Glass Jars (1L each)",
      "Flat discount of ₹200 included",
      "Perfect shelf life up to 12 months",
      "Free premium delivery all over India"
    ],
    sizes: ["3 Litres Pack"]
  },
  {
    id: "udf-a2-milk-sub",
    name: "Ultra Fresh A2 Cow Milk (30 Days Subscription)",
    price: 2700,
    rating: 4.8,
    reviews: 185,
    image: "/images/WhatsApp Image 2026-07-09 at 2.19.21 PM.jpeg",
    tag: "Prepaid Subscription",
    description: "Enjoy daily morning delivery of fresh A2 Cow Milk directly to your doorstep in Mumbai. Includes a 30 Litre prepaid delivery card.",
    benefits: [
      "30 Litres fresh A2 milk total",
      "Delivered daily (1 Litre per morning)",
      "Pause / resume delivery anytime via phone",
      "Rich in premium digestible A2 protein"
    ],
    sizes: ["30 Days Plan (30L)"]
  },
  {
    id: "udf-premium-milk-sub",
    name: "Ultra Fresh Premium Cow Milk (30 Days Subscription)",
    price: 2250,
    rating: 4.8,
    reviews: 320,
    image: "/images/WhatsApp Image 2026-07-09 at 2.19.22 PM (1).jpeg",
    tag: "Prepaid Subscription",
    description: "Daily fresh whole cow milk pasteurized hygienically and delivered before 8:00 AM. Includes 30 Litres prepaid delivery card.",
    benefits: [
      "30 Litres whole cow milk total",
      "Daily fresh morning doorstep delivery",
      "No delivery charges included",
      "Rich in natural fat and vitamins"
    ],
    sizes: ["30 Days Plan (30L)"]
  },
  {
    id: "udf-buffalo-milk-sub",
    name: "Ultra Thick Buffalo Milk (30 Days Subscription)",
    price: 3300,
    rating: 4.7,
    reviews: 110,
    image: "/images/WhatsApp Image 2026-07-09 at 2.19.16 PM (1).jpeg",
    tag: "Prepaid Subscription",
    description: "Rich, creamy, high-fat buffalo milk ideal for paneer, curd, tea, and traditional sweets. Includes 30 Litres prepaid delivery card.",
    benefits: [
      "30 Litres pure thick buffalo milk",
      "Morning delivery (1L daily)",
      "High natural fat content (7%+)",
      "No added preservatives or chemicals"
    ],
    sizes: ["30 Days Plan (30L)"]
  },
  {
    id: "udf-ghee-storage-5l",
    name: "Vedic Ghee Grand Storage Pack (5 Litres)",
    price: 6999,
    rating: 4.9,
    reviews: 74,
    image: "/images/WhatsApp Image 2026-07-09 at 2.19.20 PM (2).jpeg",
    tag: "Grand Bulk Saving",
    description: "Bulk package containing 5 bottles of 1 Litre A2 Desi Cow Bilona Ghee. Designed for large families and celebratory cooking.",
    benefits: [
      "Pack of 5 Glass Jars (1L each)",
      "Save ₹500 compared to individual purchases",
      "Vedic curd-churned traditional quality",
      "Free express doorstep shipping"
    ],
    sizes: ["5 Litres Pack"]
  },
  {
    id: "udf-buffalo-ghee",
    name: "Ultra Premium Buffalo Ghee (Pure Danedar)",
    price: 850,
    rating: 4.7,
    reviews: 142,
    image: "/images/WhatsApp Image 2026-07-09 at 2.19.20 PM.jpeg",
    tag: "Rich & Danedar",
    description: "Granular white buffalo ghee, pure, aromatic, and rich. Prepared using traditional slow heat skimming of curd-churned butter.",
    benefits: [
      "Granular (danedar) texture and white color",
      "High smoke point, perfect for frying",
      "Boosts energy and physical stamina",
      "100% natural, preservative-free"
    ],
    sizes: ["1 Litre", "500ml"]
  },
  {
    id: "udf-family-hamper",
    name: "Grand UDF Family Dairy Hamper",
    price: 3200,
    rating: 4.9,
    reviews: 84,
    image: "/images/WhatsApp Image 2026-07-09 at 2.19.22 PM (3).jpeg",
    tag: "Gift / Combo Pack",
    description: "Perfect compilation of health. Renders 1L A2 Cow Ghee, 1kg Organic White Butter, 500g Fresh Vedic Paneer, and 500g Raw Wild Honey.",
    benefits: [
      "Includes premium ghee, butter, paneer, honey",
      "Packed in a secure, hand-crafted gift carton",
      "Save ₹350 on checkout",
      "Same-day cold-chain delivery in Mumbai"
    ],
    sizes: ["1 Hamper Box"]
  },
  {
    id: "udf-white-butter",
    name: "Ultra Fresh Organic White Butter (Makhan)",
    price: 299,
    rating: 4.9,
    reviews: 98,
    image: "/images/WhatsApp Image 2026-07-09 at 2.19.21 PM (1).jpeg",
    tag: "Freshly Churned",
    description: "Unsalted, fresh white butter hand-churned directly from milk cream. Super creamy, soft, and completely chemical-free.",
    benefits: [
      "No added salt, coloring or chemicals",
      "Churned fresh on order placement",
      "Melt-in-mouth traditional texture",
      "Contains fat-soluble essential vitamins"
    ],
    sizes: ["500g", "250g"]
  },
  {
    id: "udf-a1-milk-sub",
    name: "Ultra Fresh A1 Pure Milk (30 Days Subscription)",
    price: 2040,
    rating: 4.6,
    reviews: 112,
    image: "/images/WhatsApp Image 2026-07-09 at 2.19.22 PM (2).jpeg",
    tag: "A1 Milk Subscription",
    description: "Regular high-quality A1 cow milk pasteurized and chilled. Sourced from local farms. Includes a 30 Litre prepaid delivery card.",
    benefits: [
      "30 Litres pure A1 milk total",
      "Daily doorstep delivery (1L morning)",
      "Hygienically packed and sealed",
      "Wholesome nutrition for everyday use"
    ],
    sizes: ["30 Days Plan (30L)"]
  }
];

export default function ProductGrid() {
  const { addToCart } = useCart();

  return (
    <section id="products" className="py-24 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs font-bold uppercase tracking-widest">
            Our Organic Range
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary mt-2">
            Farm-Fresh Dairy & Prepaid Subscriptions
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-primary/70 text-sm mt-4">
            Browse our premium selection of traditional ghee, white butter, and prepaid monthly milk cards. Safe payment validation and free doorstep delivery in Mumbai.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Product Image Overlay */}
              <div className="relative pt-[100%] overflow-hidden bg-cream/40">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=600&auto=format&fit=crop";
                  }}
                />
                
                {/* Floating Category Tag */}
                <span className="absolute top-4 left-4 bg-forest text-cream text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
                  {product.tag}
                </span>

                {/* Quick actions overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 z-10">
                  <Link
                    href={`/product/${product.id}`}
                    className="p-3 bg-cream text-primary rounded-full hover:bg-gold hover:text-white transition-colors duration-200 shadow-md"
                    title="View Details"
                  >
                    <Eye className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => addToCart(product, 1, product.sizes[0])}
                    className="p-3 bg-cream text-primary rounded-full hover:bg-gold hover:text-white transition-colors duration-200 shadow-md"
                    title="Add directly to cart"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  {/* Reviews & Star Rating */}
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="flex text-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 fill-current ${
                            i < Math.floor(product.rating) ? "text-gold" : "text-primary/20"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-primary/60">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-lg font-heading font-extrabold text-primary hover:text-gold cursor-pointer transition-colors duration-200 line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <p className="text-xs text-primary/70 mt-2 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-primary/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-primary/50 font-medium">Price</span>
                    <span className="text-xl font-heading font-bold text-primary">
                      ₹{product.price}
                    </span>
                  </div>
                  <Link
                    href={`/product/${product.id}`}
                    className="premium-btn-gold text-xs px-4 py-2 font-bold flex items-center justify-center"
                  >
                    Configure & Buy
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

