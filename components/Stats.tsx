const stats = [

    {
        value:"3+",
        title:"Production AI Systems"
    },

    {
        value:"40%",
        title:"Hallucination Reduction"
    },

    {
        value:"<3s",
        title:"Query Response"
    },

    {
        value:"50+",
        title:"Articles Daily"
    },

    {
        value:"12+",
        title:"Legal Documents"
    },

    {
        value:"100%",
        title:"Deployment Ready"
    }

]

export default function Stats(){

return(

<section>

<h2 className="title">

Achievements

</h2>

<div className="stats">

{stats.map((item)=>(

<div
key={item.title}
className="glass stat"
>

<h2>

{item.value}

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