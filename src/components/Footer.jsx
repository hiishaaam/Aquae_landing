import React from "react";
import { motion } from "framer-motion";
import { 
  HeartIcon,
  StarIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Mission", href: "#mission" },
    { name: "Team", href: "#team" },
    { name: "Careers", href: "#careers" }
  ],
  services: [
    { name: "Biodiversity Credits", href: "#biodiversity" },
    { name: "Carbon Credits", href: "#carbon" },
    { name: "Sustainability Consulting", href: "#consulting" },
    { name: "Impact Measurement", href: "#impact" }
  ],
  resources: [
    { name: "Blog", href: "#blog" },
    { name: "Case Studies", href: "#cases" },
    { name: "Research", href: "#research" },
    { name: "Documentation", href: "#docs" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Disclaimer", href: "#disclaimer" }
  ]
};

const socialLinks = [
  { name: "Twitter", href: "#", icon: "𝕏" },
  { name: "LinkedIn", href: "#", icon: "in" },
  { name: "GitHub", href: "#", icon: "⌥" },
  { name: "YouTube", href: "#", icon: "▶" }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-border/50 pt-20 pb-8">
      <div className="container-modern">
        <div className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/AQUAE.Impact-LOGO-REC-removebg-preview (2).svg" 
                  alt="AQUAE Impact Logo" 
                  className="h-12 w-auto"
                />
                <span className="text-2xl font-bold text-black">AQUAE.Impact</span>
              </div>

              <p className="text-black mb-6 max-w-md">
                Pioneering sustainable innovation through biodiversity credits and 
                environmental impact solutions for a better tomorrow.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-black">
                  <EnvelopeIcon className="w-4 h-4" />
                  <span className="text-sm">hello@aquaeimpact.com</span>
                </div>
                <div className="flex items-center space-x-3 text-black">
                  <PhoneIcon className="w-4 h-4" />
                  <span className="text-sm">+91xxxxxxxxxx</span>
                </div>
                <div className="flex items-center space-x-3 text-black">
                  <MapPinIcon className="w-4 h-4" />
                  <span className="text-sm">Kerala</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 glass-nav rounded-xl flex items-center justify-center text-black hover:text-primary transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <span className="text-sm font-medium">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-black mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-black hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-black mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-black hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-semibold text-black mb-4">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="text-black hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-4">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="text-black hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card mb-8"
        >
          <div className="text-center">
            <h3 className="heading-3 text-black mb-2">
              Stay Updated
            </h3>
            <p className="text-black mb-6">
              Get the latest insights on sustainability and biodiversity credits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg lg:max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-modern flex-1"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border/50 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-black text-sm">
              <span>© {currentYear} AQUAE Impact. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <HeartIcon className="w-4 h-4 text-red-500" />
              <span className="hidden sm:inline">for the planet</span>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-black">
                <StarIcon className="w-4 h-4 text-primary" />
                <span>Carbon Neutral</span>
              </div>
              <div className="flex items-center space-x-2 text-black">
                <GlobeAltIcon className="w-4 h-4 text-primary" />
                <span>Global Impact</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 