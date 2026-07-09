"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-cream text-primary py-20 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-3xl mx-auto bg-white border border-primary/5 rounded-3xl p-8 sm:p-12 shadow-xl">
        <Link href="/" className="inline-flex items-center space-x-2 text-gold hover:text-gold-hover text-sm font-semibold transition-colors duration-200 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gold/10 text-gold rounded-2xl">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary">
            Terms of Service
          </h1>
        </div>
        <p className="text-xs text-primary/50 mb-8 uppercase tracking-widest font-bold">
          Last Updated: July 2026
        </p>

        <div className="space-y-6 text-sm text-primary/80 leading-relaxed font-light">
          <p>
            Welcome to **United Dairy Farms**. These Terms of Service govern your use of our website located at `www.uniteddairyfarms.com` and your purchase of our milk, ghee, and other dairy products.
          </p>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing or using our website, placing an order, or subscribing to our daily milk deliveries, you agree to be bound by these Terms. If you do not agree to all of these Terms, you are prohibited from using this site and purchasing our products.
          </p>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            2. Customer Account & Subscriptions
          </h2>
          <p>
            To subscribe to our milk deliveries, you must create a customer account. You agree to provide accurate, current, and complete information during registration. You are responsible for safeguarding your account login credentials and agree not to disclose them to any third party.
          </p>
          <p>
            We reserve the right to suspend or terminate accounts that violate our terms or engage in fraudulent activities.
          </p>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            3. Pricing & Billing
          </h2>
          <p>
            Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue products or subscription packages.
            All payments made online through credit cards, debit cards, UPI, or net banking are processed securely. In the event of a payment failure, we reserve the right to pause deliveries until outstanding dues are resolved.
          </p>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            4. Limitation of Liability
          </h2>
          <p>
            United Dairy Farms and its employees shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our products, including but not limited to allergies, food poisoning from improper home storage, or delivery delays due to natural events.
          </p>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            5. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India, under the jurisdiction of the courts located in Mumbai, Maharashtra.
          </p>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            6. Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify you of any changes by updating the "Last Updated" date at the top of this page. Your continued use of the website after changes are posted constitutes your acceptance of the new terms.
          </p>
        </div>
      </div>
    </main>
  );
}
