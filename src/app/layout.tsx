import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

// Declare modern publication typography font sets
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Premium high-fidelity SEO metadata settings
export const metadata: Metadata = {
  title: "Anish Varma | AI Security Researcher & Founding Engineer",
  description: "Researching AI/ML systems, offensive security, trust-boundary failures, autonomous agents, parser security, and mechanistic interpretability.",
  keywords: [
    "AI Security",
    "Offensive Security",
    "Trust Boundaries",
    "Autonomous Agents",
    "Parser Security",
    "Mechanistic Interpretability",
    "Abliteration",
  ],
  authors: [{ name: "Anish Varma", url: "https://anishvarma.com" }],
  creator: "Anish Varma",
  publisher: "Anish Varma",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anishvarma.com",
    title: "Anish Varma | AI Security Researcher & Founding Engineer",
    description: "Researching AI/ML systems, offensive security, trust-boundary failures, autonomous agents, parser security, and mechanistic interpretability.",
    siteName: "Anish Varma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Varma | AI Security Researcher & Founding Engineer",
    description: "Researching AI/ML systems, offensive security, trust-boundary failures, autonomous agents, parser security, and mechanistic interpretability.",
    creator: "@Av7danger",
  },
  alternates: {
    types: {
      "application/rss+xml": "https://anishvarma.com/rss.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-[#fafafa] font-sans">
        {/* Floating global navigation */}
        <Navbar />
        
        {/* Primary page rendering space */}
        <main className="flex-grow pt-24 px-6 md:px-8 max-w-5xl mx-auto w-full pb-20">
          {children}
        </main>
        
        {/* Systems footer */}
        <Footer />
      </body>
    </html>
  );
}
