"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Star, ShieldCheck, Heart, Truck, HelpCircle, ArrowLeft, Plus, Minus, ShoppingBag } from "lucide-react";
import { PRODUCTS } from "../../../components/ProductGrid";
import { useCart, Product } from "../../../context/CartContext";
import Footer from "../../../components/Footer";

export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params;
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState("");
  const [isSubscription, setIsSubscription] = useState(false);
  const [activeTab, setActiveTab] = useState("benefits");

  useEffect(() => {
    if (id) {
      const foundProduct = PRODUCTS.find((p) => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedSize(foundProduct.sizes[0]);
        setActiveImage(foundProduct.image);
        setQuantity(1);
        setIsSubscription(foundProduct.tag.toLowerCase().includes("subscription"));
      }
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center pt-24 text-primary">
        <p className="text-lg font-bold">Loading product details...</p>
        <Link href="/" className="premium-btn-gold text-xs mt-4">
          Back to Shop
        </Link>
      </div>
    );
  }

  // Gallery images array
  const galleryImages = product.gallery || [product.image];

  // Dynamic price mapping based on selection
  const getDynamicPrice = () => {
    let basePrice = product.price;
    if (product.id === "udf-a2-ghee") {
      return selectedSize === "500ml" ? 799 : 1499;
    }
    if (product.id === "udf-buffalo-ghee") {
      return selectedSize === "500ml" ? 450 : 850;
    }
    if (product.id === "udf-white-butter") {
      return selectedSize === "250g" ? 169 : 299;
    }
    return basePrice;
  };

  const currentPrice = getDynamicPrice();

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name + (isSubscription ? " (Monthly Sub)" : ""),
        price: currentPrice,
        image: product.image,
      },
      quantity,
      selectedSize
    );
  };

  // Filter out current product for related items list
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-cream/35 pt-28 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-gold hover:text-gold-hover text-sm font-semibold transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </Link>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-3xl border border-primary/5 p-6 sm:p-10 shadow-lg">
          
          {/* Left Column: Image Gallery (Thumbs left, main image right) */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
            
            {/* Gallery Thumbnails (Desktop) */}
            <div className="hidden md:flex flex-col gap-3 shrink-0 order-2 md:order-1">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden border-2 bg-cream/40 transition-all ${
                    activeImage === img ? "border-gold shadow-md" : "border-primary/5 hover:border-gold/50"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumb ${idx}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=200&auto=format&fit=crop";
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Main Featured Image */}
            <div className="flex-1 relative pt-[100%] md:pt-0 md:h-[500px] rounded-2xl overflow-hidden bg-cream/40 border border-primary/5 order-1 md:order-2">
              <img
                src={activeImage}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=600&auto=format&fit=crop";
                }}
              />
            </div>
            
            {/* Gallery Thumbnails (Mobile layout) */}
            <div className="flex md:hidden gap-2 overflow-x-auto py-2 order-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 ${
                    activeImage === img ? "border-gold" : "border-primary/5"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Checkout Config details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-5">
              
              {/* Product Badge & rating */}
              <div className="flex items-center justify-between">
                <span className="text-gold text-[10px] font-bold uppercase tracking-wider bg-gold/10 px-3 py-1 rounded-full border border-gold/10">
                  {product.tag}
                </span>
                
                <div className="flex items-center space-x-1">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-primary/60">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary leading-tight">
                {product.name}
              </h1>

              {/* Price Tag */}
              <div className="py-2 border-y border-primary/5 flex items-baseline space-x-2">
                <span className="text-3xl font-heading font-bold text-primary">
                  ₹{currentPrice}
                </span>
                {isSubscription && (
                  <span className="text-xs text-primary/60 font-medium">/ 30 Litres Prepaid Card</span>
                )}
                {!isSubscription && product.id.includes("milk") && (
                  <span className="text-xs text-primary/60 font-medium">/ Litre</span>
                )}
              </div>

              <p className="text-sm text-primary/80 font-light leading-relaxed">
                {product.description}
              </p>

              {/* Size Configuration Selector */}
              <div>
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2.5">
                  Select Pack Size:
                </h4>
                <div className="flex gap-2.5">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
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

              {/* Purchase Mode Toggle (For milk subscription packs) */}
              {product.id.includes("milk") && (
                <div className="bg-cream/40 border border-primary/5 rounded-2xl p-4 space-y-3">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider">
                    Select Delivery Plan:
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setIsSubscription(true)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all flex flex-col items-center justify-center ${
                        isSubscription
                          ? "bg-forest text-cream border-forest shadow-sm"
                          : "bg-white text-primary border-primary/10 hover:border-forest/50"
                      }`}
                    >
                      <span>Monthly Subscription</span>
                      <span className="text-[9px] opacity-80 font-light mt-0.5">Deliver Everyday</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsSubscription(false)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all flex flex-col items-center justify-center ${
                        !isSubscription
                          ? "bg-forest text-cream border-forest shadow-sm"
                          : "bg-white text-primary border-primary/10 hover:border-forest/50"
                      }`}
                    >
                      <span>One-Time Order</span>
                      <span className="text-[9px] opacity-80 font-light mt-0.5">Flexible trial packs</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Organic benefits bullet items */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider">
                  Product Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-primary/80">
                      <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Quantity select & Add to Cart */}
            <div className="mt-8 pt-6 border-t border-primary/10">
              <div className="flex items-center justify-between mb-5">
                <div className="flex flex-col">
                  <span className="text-[10px] text-primary/50 font-bold uppercase tracking-wider">Total Amount</span>
                  <span className="text-3xl font-heading font-extrabold text-primary">
                    ₹{currentPrice * quantity}
                  </span>
                </div>

                {/* Quantity Editor */}
                <div className="flex items-center border border-primary/10 rounded-full bg-white p-1.5 shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 hover:text-gold text-primary/60 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-5 text-sm font-bold text-primary">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 hover:text-gold text-primary/60 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full premium-btn-gold py-4 flex items-center justify-center gap-3 font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Delivery Cart
              </button>
            </div>

          </div>
        </div>

        {/* Detailed Copywriting Section (inspired by the layout in the screenshot) */}
        <div className="mt-16 bg-white rounded-3xl border border-primary/5 p-6 sm:p-10 shadow-lg text-left">
          {/* Tab Selector Header */}
          <div className="flex border-b border-primary/10 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab("benefits")}
              className={`pb-4 px-6 text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${
                activeTab === "benefits" ? "border-gold text-gold" : "border-transparent text-primary/50 hover:text-primary"
              }`}
            >
              Why UDF Milk & Ghee?
            </button>
            <button
              onClick={() => setActiveTab("process")}
              className={`pb-4 px-6 text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${
                activeTab === "process" ? "border-gold text-gold" : "border-transparent text-primary/50 hover:text-primary"
              }`}
            >
              Traditional Vedic Sourcing
            </button>
            <button
              onClick={() => setActiveTab("faqs")}
              className={`pb-4 px-6 text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${
                activeTab === "faqs" ? "border-gold text-gold" : "border-transparent text-primary/50 hover:text-primary"
              }`}
            >
              FAQs & Delivery Slots
            </button>
          </div>

          {/* Tab Contents */}
          <div className="pt-8 space-y-6 text-sm text-primary/80 leading-relaxed font-light">
            {activeTab === "benefits" && (
              <div className="space-y-6">
                <p>
                  At **United Dairy Farms (UDF)**, we do not treat milk as a factory commodity. Our **Ultra Pure A2 Cow Milk** is fresh whole milk sourced from native Indian breeds like Gir, Sahiwal, and Rathi cows grazing in clean organic pastures.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="bg-cream/40 border border-primary/5 rounded-2xl p-5 space-y-2">
                    <h3 className="font-heading font-extrabold text-primary text-base">Glass Bottle Packaging</h3>
                    <p className="text-xs text-primary/70">
                      Plastics leak chemicals (phthalates & bisphenol) into milk. We package our milk in food-grade, sterilized glass bottles to preserve absolute fresh taste and hygiene.
                    </p>
                  </div>
                  <div className="bg-cream/40 border border-primary/5 rounded-2xl p-5 space-y-2">
                    <h3 className="font-heading font-extrabold text-primary text-base">40+ Quality Lab Tests</h3>
                    <p className="text-xs text-primary/70">
                      Every batch is tested in labs for fat, solid-not-fats (SNF), water dilution, detergents, urea, and antibiotics. Zero adulteration guaranteed.
                    </p>
                  </div>
                  <div className="bg-cream/40 border border-primary/5 rounded-2xl p-5 space-y-2">
                    <h3 className="font-heading font-extrabold text-primary text-base">12-Hour Cold Chain</h3>
                    <p className="text-xs text-primary/70">
                      Milk is chilled immediately after milking in bio-secure farms, pasteurized hygienically, and delivered to Chembur & Mumbai homes under 12 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "process" && (
              <div className="space-y-4">
                <p className="font-semibold text-primary">
                  Industrial vs. Traditional Curd Churning (Vedic Bilona Method)
                </p>
                <p>
                  Most brands extract cream from raw milk using centrifugal machines to make butter, and then boil it immediately. This strips away essential proteins. We follow the 5000-year-old Vedic Bilona method: converting whole milk to curd, churning it back-and-forth using wooden churners, and simmering the white butter in copper pots over slow firewood heat. This produces the golden granular structure, butterscotch aroma, and medicinal properties.
                </p>
                <table className="w-full border-collapse mt-4 text-xs">
                  <thead>
                    <tr className="bg-primary/5 border-y border-primary/10">
                      <th className="p-3 text-left font-bold text-primary">Method Parameters</th>
                      <th className="p-3 text-left font-bold text-primary">Industrial Process</th>
                      <th className="p-3 text-left font-bold text-forest">United Dairy Farms Bilona</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary/5">
                    <tr>
                      <td className="p-3 font-semibold">Raw Material</td>
                      <td className="p-3">Raw Milk Cream / Fat separation</td>
                      <td className="p-3 text-forest font-semibold">Whole Milk Curd</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Churning Device</td>
                      <td className="p-3">Steel high-speed spinners</td>
                      <td className="p-3 text-forest font-semibold">Wooden manual Bilona</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Boiling Vessel</td>
                      <td className="p-3">Large industrial steam boilers</td>
                      <td className="p-3 text-forest font-semibold">Traditional copper pots</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Texture & Aroma</td>
                      <td className="p-3">Flat texture, synthetic aroma</td>
                      <td className="p-3 text-forest font-semibold">Granulated (Danedar), Nutty sweet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "faqs" && (
              <div className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-bold text-primary">Q: Why is A2 milk easier to digest?</h4>
                  <p className="text-xs">
                    Standard milk contains A1 beta-casein protein, which breaks down into BCM-7 during digestion, causing bloating and stomach discomfort. A2 milk contains only A2 protein (similar to human breast milk), which digests smoothly.
                  </p>
                </div>
                <div className="space-y-3 border-t border-primary/5 pt-4">
                  <h4 className="font-bold text-primary">Q: How do subscription pauses and cancellations work?</h4>
                  <p className="text-xs">
                    You can pause or cancel deliveries easily by calling or messaging our Chembur support line at +91 8422950000. Pauses requested before 8:00 PM take effect from the next morning.
                  </p>
                </div>
                <div className="space-y-3 border-t border-primary/5 pt-4">
                  <h4 className="font-bold text-primary">Q: Do we need to return the glass bottles?</h4>
                  <p className="text-xs">
                    Yes, we follow an eco-friendly circular model. Our delivery agent collects the empty, rinsed glass bottle from your previous delivery when placing the fresh one. This keeps the environment clean.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recommended Related Products */}
        <div className="mt-16 pb-20">
          <h2 className="text-2xl font-heading font-extrabold text-primary mb-8 text-left">
            Frequently Bought Together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-3xl border border-primary/5 p-5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="relative pt-[80%] rounded-2xl overflow-hidden bg-cream/40">
                  <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="mt-4 text-left">
                  <h4 className="font-heading font-extrabold text-primary text-sm line-clamp-1">{p.name}</h4>
                  <p className="text-xs text-primary/50 font-bold mt-1">₹{p.price}</p>
                </div>
                <Link href={`/product/${p.id}`} className="premium-btn-gold text-xs py-2 mt-4 text-center block font-bold">
                  View Detail
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
