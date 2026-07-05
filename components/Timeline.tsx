import { experience } from "@/data/experience";

export default function Timeline() {
  return (
    <section id="timeline">

      <h2 className="title">
        Career Journey
      </h2>

      <div className="grid mt-12">

        {experience.map((item, index) => (

          <div
            key={index}
            className="glass card"
          >

            <h2 className="gradient text-3xl">
              {item.year}
            </h2>

            <h3 className="mt-4 text-xl font-bold">
              {item.title}
            </h3>

            <p className="subtitle">
              {item.company}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}