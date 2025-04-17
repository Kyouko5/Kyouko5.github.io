import React, { useEffect, useRef, useState, ChangeEvent, FormEvent } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Contact = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    // Validate name
    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    // Validate message
    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formState.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setSubmitting(true);
    
    // Simulated form submission - in a real app you'd connect to an API
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      
      // Reset the submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-container">
      <motion.h2
        className="section-title"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>
      
      <motion.div
        className="max-w-2xl mx-auto text-center mb-12"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-tertiary mb-6">
          I'm currently a student looking for internship opportunities and collaborative projects.
          Whether you have a question about my work, want to discuss a potential project, or just
          want to say hi, feel free to reach out!
        </p>
      </motion.div>

      <motion.div
        className="max-w-xl mx-auto"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {submitted ? (
          <div className="text-center p-8 bg-surface rounded-lg shadow-md">
            <h3 className="text-2xl text-primary font-semibold mb-4">Thanks for reaching out!</h3>
            <p className="text-tertiary">I'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-secondary text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full p-3 bg-surface border ${
                  errors.name ? "border-red-500" : "border-tertiary/30"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-secondary`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-500">
                  {errors.name}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-secondary text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full p-3 bg-surface border ${
                  errors.email ? "border-red-500" : "border-tertiary/30"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-secondary`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-secondary text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={6}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`w-full p-3 bg-surface border ${
                  errors.message ? "border-red-500" : "border-tertiary/30"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-secondary resize-none`}
                placeholder="Your message here..."
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-500">
                  {errors.message}
                </p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 px-6 rounded-md bg-primary text-background font-medium transition-colors duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact; 