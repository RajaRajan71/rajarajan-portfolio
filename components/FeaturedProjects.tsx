import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "⚖️ Legal Multi-Agent RAG",

    image: "/project-images/legal_ai_home.png",

    description:
      "Production-ready Legal AI powered by Llama-3, LangChain, FAISS and ChromaDB with citation-aware Retrieval-Augmented Generation.",

    tech: ["Llama-3", "LangChain", "FAISS", "ChromaDB", "Gradio"],

    impact: "40% Hallucination Reduction • <3s Response",

    github: "https://github.com/RajaRajan71/LegalAI-app",
  },

  {
    title: "🖼️ Palludagam Multimodal AI",

    image: "/project-images/multimodal_home.png",

    description:
      "Processes Images, PDFs and Audio using Gemini 2.5 Flash with Docker deployment and multimodal workflows.",

    tech: ["Gemini", "Docker", "Streamlit"],

    impact: "40% Smaller Docker Image",

    github: "https://github.com/RajaRajan71/multimodel_APP",
  },

  {
    title: "🤖 GPT-2 Fine-Tuning",

    image: "/project-images/gpt2_home.png",

    description:
      "Fine-tuned GPT-2 using Hugging Face Transformers for domain-specific text generation.",

    tech: ["GPT-2", "Transformers", "Python"],

    impact: "30% Better Text Generation",

    github:
      "https://github.com/RajaRajan71/final-project--guvi_llm",
  },

  {
    title: "📰 AI News Brief Generator",

    image: "/project-images/ai_news_home.png",

    description:
      "Summarizes 50+ news articles daily using Transformer-based NLP pipelines.",

    tech: ["Transformers", "NLP", "Streamlit"],

    impact: "70% Faster Reading",

    github:
      "https://github.com/RajaRajan71/daily-news-brief-generator",
  },

  {
    title: "🎯 Ad-to-LP Personalizer",

    image: "/project-images/ad_to_lp_home.png",

    description:
      "Generative AI system that creates personalized landing pages based on advertisement content.",

    tech: ["LLM", "Prompt Engineering", "Python"],

    impact: "Dynamic Personalized Content",

    github:
      "https://github.com/RajaRajan71/Ad-to-LP-Personalizer",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects">

      <h2 className="title gradient text-center">
        Featured AI Projects
      </h2>

      <p className="subtitle text-center max-w-3xl mx-auto">
        A collection of production-ready AI applications built using
        Generative AI, Large Language Models, Retrieval-Augmented
        Generation (RAG), Agentic AI, FastAPI, Docker and modern AI
        deployment workflows.
      </p>

      <div className="cards mt-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>

    </section>
  );
}