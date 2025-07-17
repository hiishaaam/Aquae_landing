import React from "react";
import { motion, useInView } from "framer-motion";
import { 
  StarIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CogIcon,
  ChartBarIcon,
  LightBulbIcon
} from "@heroicons/react/24/outline";

const governancePillars = [
  {
    icon: StarIcon,
    title: "Environmental",
    description: "Ecosystem restoration and biodiversity conservation",
    features: [
      "Carbon sequestration",
      "Habitat protection",
      "Species conservation",
      "Water quality improvement"
    ],
    color: "from-green-500 to-green-600"
  },
  {
    icon: UserGroupIcon,
    title: "Social",
    description: "Community engagement and sustainable development",
    features: [
      "Local community benefits",
      "Indigenous rights protection",
      "Education and capacity building",
      "Health and well-being"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: BuildingOfficeIcon,
    title: "Governance",
    description: "Transparent and accountable management systems",
    features: [
      "Stakeholder engagement",
      "Policy compliance",
      "Risk management",
      "Performance monitoring"
    ],
    color: "from-purple-500 to-purple-600"
  }
];

const impactMetrics = [
  {
    icon: GlobeAltIcon,
    value: "1.2M",
    label: "Hectares Protected",
    description: "Land under conservation"
  },
  {
    icon: StarIcon,
    value: "500K",
    label: "Trees Planted",
    description: "Carbon sequestration"
  },
  {
    icon: UserGroupIcon,
    value: "50K+",
    label: "Lives Impacted",
    description: "Community members"
  },
  {
    icon: ChartBarIcon,
    value: "95%",
    label: "Success Rate",
    description: "Project completion"
  }
];

const DesktopWrapperSubsection = () => {
  return (
    <section id="governance" className="section-padding bg-gradient-to-br from-background to-muted/30">
      <div className="container-modern">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass-nav px-4 py-2 rounded-full mb-6">
            <ShieldCheckIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              ESG Framework
            </span>
          </div>
          
          <h2 className="heading-2 text-foreground mb-6">
            Ecosystem and{" "}
            <span className="text-gradient-primary">Social Governance</span>
          </h2>
          
          <p className="body-large text-foreground/70 max-w-3xl mx-auto">
            We provide innovative solutions for ecological restoration, blue carbon markets, 
            and sustainable brands through our comprehensive ESG framework.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {governancePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="card-modern h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="heading-3 text-foreground mb-4">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-foreground/70 mb-6">
                    {pillar.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {pillar.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2 text-foreground/70"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${pillar.color} rounded-full flex-shrink-0`} />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 text-foreground mb-4">
              Our Impact by the Numbers
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to environmental 
              stewardship and social responsibility.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="card-modern text-center group"
              >
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <metric.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-gradient-primary mb-2">
                  {metric.value}
                </div>
                <div className="font-medium text-foreground mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-foreground/60">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="inline-flex items-center space-x-2 glass-nav px-4 py-2 rounded-full mb-6">
              <LightBulbIcon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">
                Innovation
              </span>
            </div>
            
            <h3 className="heading-3 text-foreground mb-6">
              Pioneering Sustainable Solutions
            </h3>
            
            <p className="body-medium text-foreground/70 mb-8">
              Our cutting-edge approach combines blockchain technology, artificial intelligence, 
              and scientific expertise to create verifiable, scalable environmental impact.
            </p>

            <div className="space-y-4">
              {[
                "Blockchain-verified impact tracking",
                "AI-powered ecosystem monitoring",
                "Real-time data analytics",
                "Transparent reporting systems"
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary mt-8"
            >
              Learn About Our Technology
            </motion.button>
          </div>
      
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: CogIcon, label: "Technology", color: "from-blue-500 to-blue-600" },
                  { icon: ChartBarIcon, label: "Analytics", color: "from-green-500 to-green-600" },
                  { icon: ShieldCheckIcon, label: "Security", color: "from-purple-500 to-purple-600" },
                  { icon: GlobeAltIcon, label: "Global", color: "from-orange-500 to-orange-600" }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesktopWrapperSubsection;