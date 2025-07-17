import React from "react";
import { motion, useInView } from "framer-motion";
import { 
  GlobeAltIcon,
  HeartIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  UserGroupIcon,
  CogIcon,
  BeakerIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  EyeIcon,
  CloudIcon,
  FireIcon,
  StarIcon,
  SunIcon,
  HandRaisedIcon
} from "@heroicons/react/24/outline";

const sdgGoals = [
  { id: 1, title: "No Poverty", icon: HeartIcon, color: "from-red-500 to-red-600", image: "/img1.jpeg" },
  { id: 2, title: "Zero Hunger", icon: AcademicCapIcon, color: "from-orange-500 to-orange-600", image: "/img2.jpeg" },
  { id: 3, title: "Good Health", icon: ShieldCheckIcon, color: "from-green-500 to-green-600", image: "/img3.jpeg" },
  { id: 4, title: "Quality Education", icon: AcademicCapIcon, color: "from-red-500 to-red-600", image: "/img4.jpeg" },
  { id: 5, title: "Gender Equality", icon: UserGroupIcon, color: "from-orange-500 to-orange-600", image: "/img5.jpeg" },
  { id: 6, title: "Clean Water", icon: SunIcon, color: "from-blue-500 to-blue-600", image: "/img6.jpeg" },
  { id: 7, title: "Affordable Energy", icon: BoltIcon, color: "from-yellow-500 to-yellow-600", image: "/img7.jpeg" },
  { id: 8, title: "Decent Work", icon: CogIcon, color: "from-red-500 to-red-600", image: "/img8.jpeg" },
  { id: 9, title: "Industry Innovation", icon: BeakerIcon, color: "from-orange-500 to-orange-600", image: "/img9.jpeg" },
  { id: 10, title: "Reduced Inequalities", icon: UserGroupIcon, color: "from-red-500 to-red-600", image: "/img10.jpeg" },
  { id: 11, title: "Sustainable Cities", icon: BuildingOfficeIcon, color: "from-orange-500 to-orange-600", image: "/img11.jpeg" },
  { id: 12, title: "Responsible Consumption", icon: CogIcon, color: "from-orange-500 to-orange-600", image: "/img12.jpeg" },
  { id: 13, title: "Climate Action", icon: CloudIcon, color: "from-green-500 to-green-600", image: "/img13.jpeg" },
  { id: 14, title: "Life Below Water", icon: SunIcon, color: "from-blue-500 to-blue-600", image: "/img14.jpeg" },
  { id: 15, title: "Life on Land", icon: StarIcon, color: "from-green-500 to-green-600", image: "/img15.jpeg" },
  { id: 16, title: "Peace & Justice", icon: ShieldCheckIcon, color: "from-blue-500 to-blue-600", image: "/img16.jpeg" },
  { id: 17, title: "Partnerships", icon: HandRaisedIcon, color: "from-blue-500 to-blue-600", image: "/img17.jpeg" }
];

const DesktopSubsection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-muted/50 to-background pt-32 pb-20">
      <div className="container-modern">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass-nav px-4 py-2 rounded-full mb-6">
            <GlobeAltIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Global Impact
            </span>
          </div>
          
          <h2 className="heading-2 text-foreground mb-6">
            Aligning Our Mission With{" "}
            <span className="text-gradient-primary">UNSDG</span>
          </h2>
          
          <p className="body-large text-foreground/70 max-w-4xl lg:max-w-5xl mx-auto">
            AQUAE Impact helps businesses navigate climate and environmental pressures 
            by adopting Sustainable Development Goals (SDGs), creating measurable 
            impact through innovative biodiversity credit solutions.
          </p>
        </motion.div>

        {/* SDG Goals Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6 lg:gap-8">
          {sdgGoals.map((goal, index) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl">
                {/* Image */}
                <img 
                  src={goal.image} 
                  alt={`SDG Goal ${goal.id}: ${goal.title}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with Content - Only visible on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300">
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Goal Number */}
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                      {goal.id}
                    </div>
                    
                    {/* Goal Title */}
                    <div className="text-xs md:text-sm font-medium text-white/90 leading-tight drop-shadow-lg">
                      {goal.title}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-primary/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: StarIcon,
              value: "17",
              label: "SDG Goals",
              description: "Comprehensive coverage"
            },
            {
              icon: GlobeAltIcon,
              value: "193",
              label: "Countries",
              description: "Global commitment"
            },
            {
              icon: BoltIcon,
              value: "2030",
              label: "Target Year",
              description: "Sustainable future"
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="card-modern text-center group"
            >
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-4xl font-bold text-gradient-primary mb-3">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-foreground/60">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card max-w-3xl lg:max-w-4xl mx-auto">
            <h3 className="heading-3 text-foreground mb-4">
              Ready to Make an Impact?
            </h3>
            <p className="body-medium text-foreground/70 mb-6">
              Join us in creating a sustainable future through biodiversity credits 
              and environmental innovation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesktopSubsection;
