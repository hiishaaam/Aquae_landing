import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  UserIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";

const contactInfo = [
  {
    icon: EnvelopeIcon,
    title: "Email",
    value: "hello@aquaeimpact.com",
    description: "Send us a message"
  },
  {
    icon: PhoneIcon,
    title: "Phone",
    value: "+1 (555) 123-4567",
    description: "Call us directly"
  },
  {
    icon: MapPinIcon,
    title: "Office",
    value: "San Francisco, CA",
    description: "Visit our headquarters"
  }
];

const OverlapWrapperSubsection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary/5 to-background pt-32 pb-20">
      <div className="container-modern">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass-nav px-4 py-2 rounded-full mb-6">
            <ChatBubbleLeftRightIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Get In Touch
            </span>
          </div>
          
          <h2 className="heading-2 text-foreground mb-6">
            Let's Build a{" "}
            <span className="text-gradient-primary">Sustainable Future</span>
          </h2>
          
          <p className="body-large text-foreground/70 max-w-4xl lg:max-w-5xl mx-auto">
            Ready to make a positive impact on our planet? Get in touch with our team 
            to discuss how biodiversity credits can transform your sustainability strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="heading-3 text-foreground mb-6">
                Connect With Us
              </h3>
              <p className="body-medium text-foreground/70 mb-8">
                Our team of sustainability experts is here to help you navigate 
                the world of biodiversity credits and environmental impact.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-modern group cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-foreground/80 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-sm text-foreground/60">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <h4 className="font-semibold text-foreground mb-3">
                Why Choose AQUAE Impact?
              </h4>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Expert sustainability consulting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Verified impact measurement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Global project network</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <h3 className="heading-3 text-foreground mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground/80 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/40" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="input-modern pl-10 w-full"
                      placeholder="Enter your first name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground/80 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/40" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="input-modern pl-10 w-full"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/40" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-modern pl-10 w-full"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                  Message
                </label>
                <div className="relative">
                  <ChatBubbleLeftRightIcon className="absolute left-3 top-3 w-4 h-4 text-foreground/40" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="input-modern pl-10 w-full resize-none"
                    placeholder="Tell us about your sustainability goals..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircleIcon className="w-4 h-4" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 bg-success/10 border border-success/20 rounded-xl"
                >
                  <div className="flex items-center space-x-2 text-success">
                    <CheckCircleIcon className="w-5 h-5" />
                    <span className="font-medium">Thank you! We'll get back to you soon.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OverlapWrapperSubsection;
