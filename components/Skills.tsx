const skills = [

"Python",
"LangChain",
"LlamaIndex",
"Llama 3",
"Gemini 2.5",
"FastAPI",
"Docker",
"Streamlit",
"Gradio",
"FAISS",
"ChromaDB",
"HuggingFace",
"Prompt Engineering",
"Semantic Search",
"RAG",
"Agentic AI",
"Transformers",
"CI/CD",
"REST APIs",
"GitHub"

]

export default function Skills(){

return(

<section id="skills">

<h2 className="title">

Technical Skills

</h2>

<div
className="cards mt-12"
>

{skills.map((skill)=>(

<div

key={skill}

className="glass card text-center font-semibold hover:scale-105 transition"

>

{skill}

</div>

))}

</div>

</section>

)

}