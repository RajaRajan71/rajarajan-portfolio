"use client";

export default function ParticleBackground(){

return(

<div className="fixed inset-0 -z-10">

<div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[170px] animate-pulse"/>

<div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[170px] animate-pulse"/>

<div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[170px]"/>

</div>

)

}