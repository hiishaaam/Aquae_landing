import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  ArrowDownIcon, 
  SparklesIcon,
  StarIcon,
  GlobeAltIcon 
} from "@heroicons/react/24/outline";

export const HeroSubsection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20"
      style={{
        backgroundImage: 'url("/main_bg1.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none" />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse opacity-30"></div>
        {/* Gradient Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        ></motion.div>
      </div>
      {/* Main Content */}
      <div className="container-modern relative z-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 glass-nav px-4 py-2 rounded-full"
          >
            <SparklesIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white">
              Pioneering Sustainable Innovation
            </span>
          </motion.div>
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="heading-1 text-white">
              Biomass is what connects{" "}
              <span className="text-gradient-primary">all life</span>
              <br />
              Biodiversity signifies its{" "}
              <span className="text-gradient-primary">strength and beauty</span>
            </h1>
            <p className="body-large text-white/80 max-w-4xl lg:max-w-5xl mx-auto">
              We invite you to join us to realize the value of this biodiversity 
              as tokenized credits, creating a sustainable future for generations to come.
            </p>
          </motion.div>
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card max-w-lg lg:max-w-xl mx-auto text-white"
          >
            <blockquote className="text-white/90 italic">
              "The future of our planet depends on the choices we make today."
            </blockquote>
            <cite className="block mt-2 text-sm text-primary font-medium">
              — Dr. Ranil Senanayake
            </cite>
          </motion.div>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group"
            >
              <span className="flex items-center space-x-2">
                <span>Explore More</span>
                <ArrowDownIcon className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary group"
            >
              <span className="flex items-center space-x-2">
                <StarIcon className="w-4 h-4" />
                <span>Learn About Credits</span>
              </span>
            </motion.button>
          </motion.div>
        </div>
        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {[
            { icon: StarIcon, value: "1M+", label: "Credits Generated", description: "Sustainable impact credits" },
            { icon: GlobeAltIcon, value: "50+", label: "Countries", description: "Global biodiversity projects" },
            { icon: SparklesIcon, value: "99%", label: "Success Rate", description: "Verified impact delivery" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="card-modern text-center group bg-white/10 backdrop-blur-md border border-white/10 text-white"
            >
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-gradient-primary mb-2">
                {stat.value}
              </div>
              <div className="font-medium text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-white/80">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-foreground/60"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDownIcon className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: "url('/main_bg1.jpeg')",
            filter: "blur(1px) brightness(0.3)"
          }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSubsection;
