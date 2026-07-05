const timeline=[

{
year:"2019",
title:"B.E Electronics & Communication"
},

{
year:"2024",
title:"IIT-M Pravartak (GUVI)"
},

{
year:"2025",
title:"Production AI Systems"
},

{
year:"2026",
title:"Applied AI Engineer"
}

]

export default function Experience(){

return(

<section id="experience">

<h2 className="title">

Journey

</h2>

<div className="grid mt-12">

{timeline.map((item)=>(

<div
key={item.year}
className="glass card"
>

<h2 className="gradient">

{item.year}

</h2>

<p>

{item.title}

</p>

</div>

))}

</div>

</section>

)

}