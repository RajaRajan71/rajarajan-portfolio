"use client";

import CountUp from "react-countup";

const stats = [
  { value: 3, suffix: "+", title: "Production AI Systems" },
  { value: 40, suffix: "%", title: "Hallucination Reduction" },
  { value: 3, suffix: "s", title: "Response Time" },
  { value: 50, suffix: "+", title: "Articles Daily" },
];

export default function Achievements() {
  return (
    <section>

      <h2 className="title">

        Achievements

      </h2>

      <div className="cards mt-12">

        {stats.map((item) => (

          <div
            key={item.title}
            className="glass card text-center"
          >

            <h1 className="text-5xl gradient font-bold">

              <CountUp
                end={item.value}
                duration={3}
              />

              {item.suffix}

            </h1>

            <p className="mt-5">

              {item.title}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}