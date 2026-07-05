import Image from "next/image";
import { Github, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  impact: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  impact,
  image,
}: ProjectCardProps) {
  return (
    <div className="card overflow-hidden group">

      {/* Project Image */}

      <div className="overflow-hidden rounded-xl">

        <Image
          src={image}
          alt={title}
          width={700}
          height={420}
          className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
        />

      </div>

      {/* Title */}

      <h3 className="text-2xl font-bold mt-6">
        {title}
      </h3>

      {/* Description */}

      <p className="subtitle mt-4">
        {description}
      </p>

      {/* Tech Stack */}

      <div className="flex flex-wrap gap-2 mt-6">

        {tech.map((item) => (

          <span
            key={item}
            className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm"
          >
            {item}
          </span>

        ))}

      </div>

      {/* Impact */}

      <div className="mt-6">

        <span className="inline-block rounded-full bg-green-500/15 border border-green-500/30 px-4 py-2 text-green-300 font-semibold">

          🚀 {impact}

        </span>

      </div>

      {/* Buttons */}

      <div className="flex gap-4 mt-8">

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <Github size={18} />

          GitHub

        </a>

        <button
          className="btn"
        >

          View Details

          <ArrowUpRight size={18} />

        </button>

      </div>

    </div>
  );
}