import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function CertificatesSection() {
  const certificates = [
    {
      title: "IBM DevOps and Software Engineering",
      issuer: "Coursera",
      date: "03/2023 - Present",
      link: "",
    },
    {
      title: "Google IT Automation with Python",
      issuer: "Coursera",
      date: "03/2021 - Present",
      link: "",
    },
    {
      title: "Google IT Support",
      issuer: "Coursera",
      date: "03/2021 - Present",
      link: "",
    },
    {
      title: "Junior Web Developer",
      issuer: "Badan Nasional Sertifikasi Profesi",
      date: "10/2023 - 10/2026",
      link: "",
    },
    {
      title: "Belajar Dasar-Dasar DevOps",
      issuer: "Dicoding",
      date: "03/2023 - 03/2026",
      link: "",
    },
    {
      title: "Belajar Back-End Pemula dengan JavaScript",
      issuer: "Dicoding",
      date: "01/2023 - 01/2026",
      link: "",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding",
      date: "12/2022 - 12/2025",
      link: "",
    },
    {
      title: "Belajar Machine Learning untuk Pemula",
      issuer: "Dicoding",
      date: "07/2022 - 07/2025",
      link: "",
    },
    {
      title: "Belajar Dasar Visualisasi Data",
      issuer: "Dicoding",
      date: "06/2022 - 06/2025",
      link: "",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            I believe in continuous learning. Here are some of the
            certifications I've earned to enhance my skills and knowledge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 flex hover:border-primary-300 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                <div className="flex items-center text-dark-500 text-sm mb-2">
                  <span>{cert.issuer}</span>
                  <span className="mx-2">•</span>
                  <span>{cert.date}</span>
                </div>
                <span className="text-primary-600 text-sm font-medium hover:underline">
                  View Certificate
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
