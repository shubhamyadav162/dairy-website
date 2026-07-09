"use client";

import React from "react";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { useCart, Product } from "../context/CartContext";

// Detailed products catalog aligned with UDF capabilities
export const PRODUCTS: Product[] = [
  {
    id: "udf-a2-ghee",
    name: "Ultra Premium A2 Desi Cow Ghee (Bilona)",
    price: 1499,
    rating: 4.9,
    reviews: 248,
    image: "/images/WhatsApp Image 2026-07-09 at 2.19.22 PM.jpeg",
    tag: "Vedic Bilona Churned",
    description: "Our crown jewel. Made from the milk of grass-fed desi cows, curdled, and then hand-churned using traditional wooden bilona in clay pots. Simmered over low firewood to achieve the golden, granulated texture and rich nutty aroma.",
    benefits: [
      "Traditional A2 Vedic Bilona method",
      "Lactose and gluten-free",
      "Improves digestion & gut health",
      "Rich source of Vitamins A, D, E, and K"
    ],
    sizes: ["1 Litre", "500ml"]
  },
  {
    id: "udf-a2-milk",
    name: "Ultra Fresh A2 Cow Milk (Whole)",
    price: 90,
    rating: 4.8,
    reviews: 185,
    image: "/images/WhatsApp Image 2026-07-09 at 2.19.21 PM.jpeg",
    tag: "100% Organic A2",
    description: "Fresh, premium A2 cow milk sourced directly from select organic pastures in the morning and delivered chilled. Zero adulteration, zero preservatives, and full of natural nutrients.",
    benefits: [
      "Rich in premium A2 beta-casein protein",
      "Direct from farm to home within 12 hours",
      "Highly digestible for all age groups",
      "Packed with bone-strengthening calcium"
    ],
    sizes: ["1 Litre"]
  },
  {
    id: "udf-buffalo-ghee",
    name: "Ultra Premium Buffalo Ghee (Pure Danedar)",
    price: 850,
    rating: 4.7,
    reviews: 142,
    image: "/images/WhatsApp Image 2026-07-09 at 2.19.20 PM.jpeg",
    tag: "Rich & Danedar",
    description: "Pure, thick white buffalo ghee prepared using ancient simmering techniques. Famously granular (danedar), with a rich, inviting aroma. Perfect for traditional Indian cooking and sweets.",
    benefits: [
      "High smoke point - ideal for frying & tempering",
      "Provides rapid energy and stamina",
      "Rich, creamy flavor profile",
      "100% natural, no additives"
    ],
    sizes: ["1 Litre", "500ml"]
  },
  {
    id: "udf-white-butter",
    name: "Ultra Fresh Organic White Butter (Makhan)",
    price: 299,
    rating: 4.9,
    reviews: 98,
    image: "/images/WhatsApp Image 2026-07-09 at 2.19.21 PM (1).jpeg",
    tag: "Freshly Churned",
    description: "Unsalted, fresh white butter hand-churned from organic cow milk cream. Brings back the pure taste of home-churned butter, soft, creamy, and free of toxic artificial colorings or salt.",
    benefits: [
      "Unsalted and 100% coloring-free",
      "Extremely soft and melt-in-mouth texture",
      "Excellent source of healthy fats",
      "Freshly prepared on order"
    ],
    sizes: ["500g", "250g"]
  },
  {
    id: "udf-cow-milk",
    name: "Ultra Fresh Premium Cow Milk",
    price: 75,
    rating: 4.8,
    reviews: 320,
    image: "/images/WhatsApp Image 2026-07-09 at 2.19.22 PM (1).jpeg",
    tag: "Daily Essential",
    description: "Daily fresh whole cow milk pasteurized under strict hygienic conditions. Ideal for children, breakfast cereals, milkshakes, and standard family cooking.",
    benefits: [
      "Rich in natural fat and solids-not-fat (SNF)",
      "Adulteration and chemical-free",
      "A wholesome balance of protein and minerals",
      "Flexible daily subscription options"
    ],
    sizes: ["1 Litre"]
  }
];

export default function ProductGrid() {
  const { addToCart, setSelectedProduct } = useCart();

  return (
    <section id="products" className="py-24 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs font-bold uppercase tracking-widest">
            Our Organic Range
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary mt-2">
            Farm-Fresh Dairy & Pure Ghee
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-primary/70 text-sm mt-4">
            Directly from pasture-fed cows in clean eco-systems to your kitchen in Mumbai. No chemical treatments, just absolute purity.
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
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="p-3 bg-cream text-primary rounded-full hover:bg-gold hover:text-white transition-colors duration-200 shadow-md"
                    title="Quick View"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
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

                  <h3
                    onClick={() => setSelectedProduct(product)}
                    className="text-lg font-heading font-extrabold text-primary hover:text-gold cursor-pointer transition-colors duration-200 line-clamp-1"
                  >
                    {product.name}
                  </h3>
                  
                  <p className="text-xs text-primary/70 mt-2 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-primary/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-primary/50 font-medium">Price starting at</span>
                    <span className="text-xl font-heading font-bold text-primary">
                      ₹{product.price}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="premium-btn-gold text-xs px-4 py-2 font-bold"
                  >
                    Configure & Buy
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
