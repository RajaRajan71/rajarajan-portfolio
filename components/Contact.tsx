import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact">

      <h2 className="title gradient text-center">
        Let's Build Something Amazing
      </h2>

      <p className="subtitle text-center max-w-3xl mx-auto">
        I'm actively looking for Applied AI Engineer,
        Generative AI Engineer and LLM Engineer opportunities.
        Feel free to reach out.
      </p>

      <div className="cards mt-12">

        <div className="card">

          <Mail className="text-blue-400 mb-4" size={30} />

          <h3>Email</h3>

          <a
            href="mailto:rajann0710@gmail.com"
            className="subtitle"
          >
            rajann0710@gmail.com
          </a>

        </div>

        <div className="card">

          <Github className="text-blue-400 mb-4" size={30} />

          <h3>GitHub</h3>

          <a
            href="https://github.com/RajaRajan71"
            target="_blank"
            rel="noopener noreferrer"
            className="subtitle"
          >
            github.com/RajaRajan71
          </a>

        </div>

        <div className="card">

          <Linkedin className="text-blue-400 mb-4" size={30} />

          <h3>LinkedIn</h3>

          <a
            href="https://www.linkedin.com/in/rajarajan-m-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="subtitle"
          >
            Connect with me
          </a>

        </div>

        <div className="card">

          <MapPin className="text-blue-400 mb-4" size={30} />

          <h3>Location</h3>

          <p className="subtitle">
            Salem, Tamil Nadu 🇮🇳
            <br />
            Open to Bengaluru • Chennai • Hyderabad • Remote
          </p>

        </div>

      </div>

    </section>
  );
}