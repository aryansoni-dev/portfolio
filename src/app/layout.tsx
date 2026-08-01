import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
});

const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aryansoni-dev.pages.dev'),
  title: {
    default: "Aryan Soni | Frontend Developer & UI/UX Engineer",
    template: "%s | Aryan Soni",
  },
  description: "Portfolio of Aryan Soni, a Frontend Developer specializing in creating functional, high-performing web apps and exceptional user experiences.",
  keywords: ["Aryan Soni", "Frontend Developer", "Web Developer", "React Developer", "Next.js", "Portfolio", "UI/UX Engineer"],
  authors: [{ name: "Aryan Soni" }],
  creator: "Aryan Soni",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aryansoni-dev.pages.dev",
    title: "Aryan Soni | Frontend Developer",
    description: "Portfolio of Aryan Soni, a Frontend Developer specializing in creating functional, high-performing web apps.",
    siteName: "Aryan Soni Portfolio",
    images: [{
      url: "/hero.png",
      width: 1200,
      height: 630,
      alt: "Aryan Soni - Frontend Developer",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Soni | Frontend Developer",
    description: "Portfolio of Aryan Soni, a Frontend Developer specializing in creating functional, high-performing web apps.",
    images: ["/hero.png"],
    creator: "@aryansoni", // Placeholder, user can update
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aryan Soni",
    url: "https://aryansoni-dev.pages.dev",
    jobTitle: "Frontend Developer",
    description: "Frontend Developer specializing in creating functional, high-performing web apps.",
    sameAs: [
      "https://github.com/aryansoni-dev",
      "https://www.linkedin.com/in/aryan-soni-dev/",
      "https://twitter.com/aryansoni-dev"
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="083AvRz9yMYhK835hNKObyuyrVlzapEp06KndgkrZi0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
