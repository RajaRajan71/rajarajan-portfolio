"use client";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-content">
          <p className="hero-tag">
            🚀 APPLIED AI ENGINEER
          </p>

          <h1 className="hero-title">
            Hi, I'm
            <br />
            <span className="gradient">
              Rajarajan M
            </span>
          </h1>

          <div className="hero-animation">
            <TypeAnimation
              sequence={[
                "Building Production AI Systems",
                2000,
                "Advanced RAG Pipelines",
                2000,
                "LLM Applications",
                2000,
                "Multi-Agent AI",
                2000,
                "FastAPI & Docker",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
              cursor={true}
            />
          </div>

          <p className="hero-description">
            Generative AI Engineer with hands-on experience building
            production-ready AI applications using <b>LangChain</b>,
            <b> Llama-3</b>, <b> Gemini 2.5 Flash</b>,
            <b> FAISS</b>, <b> ChromaDB</b>,
            <b> FastAPI</b>, and <b> Docker</b>.
            <br />
            <br />
            ✅ 3+ Production AI Systems &nbsp; • &nbsp;
            ✅ 40% Hallucination Reduction &nbsp; • &nbsp;
            ✅ Immediate Joiner
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              🚀 View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              📄 View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="btn"
            >
              ⬇ Download Resume
            </a>

            <a
              href="https://github.com/RajaRajan71"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              💻 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rajarajan-m-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}