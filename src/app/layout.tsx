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
  metadataBase: new URL("https://av7danger.dev"),
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
  authors: [{ name: "Anish Varma", url: "https://av7danger.dev" }],
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
    url: "https://av7danger.dev",
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
      "application/rss+xml": "https://av7danger.dev/rss.xml",
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
      <body className="min-h-full flex flex-col bg-[#050505] text-[#fafafa] font-sans relative overflow-x-hidden">
        {/* Faint cinematic warm amber ambient glow overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none ambient-glow-container">
          <div className="absolute top-[-20%] left-[-15%] w-[90vw] h-[90vw] sm:w-[70vw] sm:h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(255,140,60,0.12)_0%,rgba(0,0,0,0)_70%)] blur-[120px] animate-ambient-drift-1" />
          <div className="absolute bottom-[-20%] right-[-15%] w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(255,180,90,0.08)_0%,rgba(0,0,0,0)_70%)] blur-[140px] animate-ambient-drift-2" />
          <div className="absolute top-[35%] left-[-20%] w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(255,120,40,0.06)_0%,rgba(0,0,0,0)_70%)] blur-[100px] animate-ambient-drift-3" />
          <div className="absolute top-[20%] right-[-10%] w-[85vw] h-[85vw] sm:w-[65vw] sm:h-[65vw] rounded-full bg-[radial-gradient(circle,rgba(200,100,50,0.03)_0%,rgba(0,0,0,0)_70%)] blur-[130px] animate-ambient-drift-4" />
        </div>

        {/* Floating global navigation */}
        <Navbar />
        
        {/* Primary page rendering space */}
        <main className="flex-grow pt-24 px-6 md:px-8 max-w-[1080px] mx-auto w-full pb-20 relative z-10">
          {children}
        </main>
        
        {/* Systems footer */}
        <Footer />
      </body>
    </html>
  );
}
