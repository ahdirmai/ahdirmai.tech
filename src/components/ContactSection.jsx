import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after showing success message
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-retro-gray-100">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="card p-8 h-full">
              <h3 className="text-2xl font-bold mb-8 text-retro-black-900">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="retro-box h-12 flex items-center justify-center mr-4 bg-retro-gray-200 flex-shrink-0">
                    <Mail className="w-5 h-5 text-retro-black-900" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-retro-gray-600 mb-1 font-bold">
                      Email
                    </h4>
                    <a
                      href="mailto:ridhofahmij225@gmail.com"
                      className="text-retro-black-900 font-medium hover:text-retro-gray-600 transition-colors"
                    >
                      ridhofahmij225@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="retro-box h-12 flex items-center justify-center mr-4 bg-retro-gray-200 flex-shrink-0">
                    <Phone className="w-5 h-5 text-retro-black-900" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-retro-gray-600 mb-1 font-bold">
                      Phone
                    </h4>
                    <p className="text-retro-black-900 font-medium">
                      +62 895 3882 20777
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="retro-box h-12 flex items-center justify-center mr-4 bg-retro-gray-200 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-retro-black-900" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-retro-gray-600 mb-1 font-bold">
                      Location
                    </h4>
                    <p className="text-retro-black-900 font-medium">
                      Banjarmasin, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-bold mb-4 text-retro-black-900">
                  Connect With Me
                </h4>
                <p className="text-retro-gray-700 mb-4">
                  Feel free to reach out for collaborations, job opportunities,
                  or just a friendly chat about technology.
                </p>
                <div className="retro-box p-4 bg-retro-gray-200 border-retro-black-900">
                  <p className="text-retro-gray-700">
                    I'm currently{" "}
                    <span className="text-retro-black-900 font-bold">
                      available for freelance work
                    </span>{" "}
                    and open to discussing new projects.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-8 text-retro-black-900">
                Send Me a Message
              </h3>

              {submitSuccess ? (
                <div className="retro-box p-4 bg-retro-gray-200 border-retro-black-900 text-retro-black-900 mb-6">
                  <strong>Thank you for your message!</strong> I'll get back to
                  you as soon as possible.
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-retro-black-900 mb-2 uppercase tracking-wider"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="retro-input"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-retro-black-900 mb-2 uppercase tracking-wider"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="retro-input"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-retro-black-900 mb-2 uppercase tracking-wider"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="retro-input"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-retro-black-900 mb-2 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="retro-input resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full sm:w-auto ${
                    isSubmitting ? "opacity-70" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
