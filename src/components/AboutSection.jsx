import { motion } from "framer-motion";
import { Medal, Lightbulb, Sparkles } from "lucide-react";

export function AboutSection() {
  const cards = [
    {
      title: "Experience",
      content:
        "With a background in web development, I bring years of hands-on experience in building robust applications.",
      icon: <Medal className="w-20 h-20 text-retro-black-900" />,
    },
    {
      title: "Problem Solver",
      content:
        "I thrive on tackling complex challenges and finding elegant solutions through creative thinking.",
      icon: <Lightbulb className="w-20 h-20 text-retro-black-900" />,
    },
    {
      title: "Continuous Learner",
      content:
        "Technology evolves rapidly, and I'm committed to staying on the cutting edge of developments in my field.",
      icon: <Sparkles className="w-20 h-20 text-retro-black-900" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-retro-gray-100">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            I'm a passionate developer focused on creating exceptional digital
            experiences through code. My journey in technology is driven by
            curiosity and a desire to build solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="retro-box w-20 h-20 flex items-center justify-center mb-6 bg-retro-gray-200">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-retro-black-900">
                {card.title}
              </h3>
              <p className="text-retro-gray-700">{card.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="retro-box shadow-retro-xl">
              <img
                src="https://res.cloudinary.com/dunqr1cgq/image/upload/v1750143840/17_ahthfi.jpg"
                alt="Working on a project"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-retro-black-900">
              My Journey
            </h3>
            <div className="space-y-4 text-retro-gray-700">
              <p>
                I started my career with a deep curiosity about how websites
                work. This led me to dive into web development, exploring both
                frontend and backend technologies to build holistic solutions.
              </p>
              <p>
                Along the way, I've collaborated with talented teams, worked on
                challenging projects, and continuously expanded my skillset to
                include cloud platforms, databases, and modern web frameworks.
              </p>
              <p>
                Today, I'm focused on creating accessible, performant, and
                user-centered applications that solve real problems. I believe
                in writing clean, maintainable code that stands the test of
                time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
