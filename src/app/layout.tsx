import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import Header from "../components/Header";
import CartDrawer from "../components/CartDrawer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ultra Dairy Farms | Premium A2 Desi Cow Bilona Ghee & Farm Fresh Milk",
  description: "Experience the pure goodness of traditional A2 Desi Cow Bilona Ghee, organic milk, and authentic farm-fresh dairy products by United Dairy Farms (UDF). Delivered across Mumbai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CartProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}


