import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajarajan M | Applied AI Engineer",

  description:
    "Portfolio of Rajarajan M specializing in Generative AI, Large Language Models, Advanced RAG, Multi-Agent AI, FastAPI and Production AI Systems.",

  keywords: [
    "AI Engineer",
    "Generative AI",
    "LLM",
    "LangChain",
    "RAG",
    "Python",
    "FastAPI",
    "Docker",
    "Portfolio",
  ],

  authors: [
    {
      name: "Rajarajan M",
    },
  ],

  creator: "Rajarajan M",

  openGraph: {
    title: "Rajarajan M | Applied AI Engineer",

    description:
      "Applied AI Engineer building Production-ready LLM Applications.",

    type: "website",

    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}