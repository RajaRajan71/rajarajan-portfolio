import { Github } from "lucide-react";

export default function GitHubStats(){

return(

<section>

<h2 className="title">

GitHub

</h2>

<div
className="glass card mt-12 text-center"
>

<Github
size={60}
className="mx-auto"
/>

<h3
className="text-3xl mt-5 font-bold"
>

RajaRajan71

</h3>

<p
className="subtitle mt-4"
>

Building Production AI Systems using

LLMs

Advanced RAG

FastAPI

Docker

Python

</p>

<a

href="https://github.com/RajaRajan71"

target="_blank"

className="btn mt-8"

>

Visit GitHub

</a>

</div>

</section>

)

}