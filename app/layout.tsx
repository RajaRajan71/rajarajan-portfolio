import { Geist } from "next/font/google";

const geist = Geist({
subsets:["latin"]
});

<body className={geist.className}></body>



import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
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
    "Portfolio"
  ],

  authors: [
    {
      name: "Rajarajan M"
    }
  ],

  creator: "Rajarajan M",

  openGraph: {
    title: "Rajarajan M | AI Engineer",

    description:
      "Applied AI Engineer building Production-ready LLM Applications.",

    type: "website",

    locale: "en_US"
  }
};