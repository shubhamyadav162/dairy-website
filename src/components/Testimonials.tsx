"use client";

import React from "react";
import { Star, Quote, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Anjali Deshmukh",
      role: "Verified Buyer",
      location: "Chembur, Mumbai",
      rating: 5,
      title: "Best Ghee in Mumbai!",
      content: "I have been looking for authentic bilona ghee for a long time. Ultra Dairy Farms' A2 Ghee is absolute perfection. The grains are prominent, the aroma takes me back to my grandmother's kitchen, and my digestion has improved significantly."
    },
    {
      name: "Vikram Malhotra",
      role: "Verified Subscriber",
      location: "Bandra West, Mumbai",
      rating: 5,
      title: "Super fresh milk everyday",
      content: "We subscribed to their A2 Cow Milk daily delivery. The milk is incredibly fresh, sweet, and has a rich cream layer. My kids love drinking it plain! Very happy with their punctual delivery team in Chembur/Bandra."
    },
    {
      name: "Dr. Sunita Rao",
      role: "Verified Buyer",
      location: "Juhu, Mumbai",
      rating: 5,
      title: "Highly recommended for health",
      content: "As a nutritionist, I am very picky about fats. The traditional curd-churned Vedic Bilona Ghee from UDF is full of good butyric acids and fat-soluble vitamins. It is clean, pure, and has zero chemical smells."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-cream/30 border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-xs font-bold uppercase tracking-widest">
            Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary mt-2">
            Loved by Health-Conscious Families
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-primary/70 text-sm mt-4">
            Hear from our verified customers across Mumbai who have switched to the pure taste of Ultra Dairy Farms.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-primary/5 shadow-xs relative flex flex-col justify-between text-left group hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Large decorative quotation mark */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/10 shrink-0" />

                {/* Rating Stars */}
                <div className="flex text-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 fill-current ${
                        i < review.rating ? "text-gold" : "text-primary/20"
                      }`}
                    />
                  ))}
                </div>

                <h3 className="text-base font-heading font-extrabold text-primary mb-2 leading-tight">
                  "{review.title}"
                </h3>
                
                <p className="text-xs text-primary/75 leading-relaxed font-light mb-6">
                  {review.content}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-3 pt-4 border-t border-primary/5">
                <div className="w-10 h-10 bg-cream border border-gold/10 rounded-full flex items-center justify-center font-heading font-bold text-primary text-sm shadow-inner uppercase">
                  {review.name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-primary flex items-center gap-1 leading-none">
                    {review.name}
                    <span className="text-forest" title="Verified Purchase">
                      <ShieldCheck className="w-3.5 h-3.5 fill-current" />
                    </span>
                  </h4>
                  <p className="text-[10px] text-primary/50 mt-1 font-medium">
                    {review.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
