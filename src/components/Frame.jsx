import React from "react";
import { motion, useInView } from "framer-motion";
import { 
  ShieldCheckIcon,
  GlobeAltIcon,
  ChartBarIcon,
  UsersIcon,
  BuildingOfficeIcon,
  CogIcon,
  StarIcon,
  BoltIcon
} from "@heroicons/react/24/outline";

const governancePillars = [
  {
    icon: ShieldCheckIcon,
    title: "Environmental",
    description: "Protecting ecosystems and biodiversity",
    metrics: ["Carbon Reduction", "Habitat Restoration", "Species Protection"],
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: UsersIcon,
    title: "Social",
    description: "Supporting communities and stakeholders",
    metrics: ["Community Benefits", "Indigenous Rights", "Education Programs"],
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: BuildingOfficeIcon,
    title: "Governance",
    description: "Transparent and ethical management",
    metrics: ["Stakeholder Engagement", "Regulatory Compliance", "Risk Management"],
    color: "from-purple-500 to-violet-600"
  }
];

const impactMetrics = [
  { label: "Credits Generated", value: "1.2M+", icon: StarIcon },
  { label: "Projects Supported", value: "150+", icon: GlobeAltIcon },
  { label: "Communities Impacted", value: "25K+", icon: UsersIcon },
  { label: "Carbon Offset", value: "500K+ tCO2e", icon: BoltIcon }
];

const Frame = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section id="governance" className="section-padding bg-gradient-to-br from-muted/30 to-background pt-32 pb-20">
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
            Ecosystem{" "}
            <span className="text-gradient-primary">Governance</span>
          </h2>
          
          <p className="body-large text-foreground/70 max-w-4xl lg:max-w-5xl mx-auto">
            Our comprehensive ESG framework ensures that every biodiversity credit 
            project delivers measurable environmental, social, and governance impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {governancePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-modern group cursor-pointer bg-green-100 hover:bg-green-200 transition-colors duration-300"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-transparent">
                {pillar.title === 'Environmental' && (
                  <img src="/Environment.png" alt="Environmental" className="w-16 h-16 object-contain" />
                )}
                {pillar.title === 'Social' && (
                  <img src="/social.png" alt="Social" className="w-16 h-16 object-contain" />
                )}
                {pillar.title === 'Governance' && (
                  <img src="/governance.png" alt="Governance" className="w-16 h-16 object-contain" />
                )}
              </div>

              <h3 className="heading-3 text-black mb-3">
                {pillar.title}
              </h3>
              
              <p className="body-medium text-black mb-6">
                {pillar.description}
              </p>

              <div className="space-y-2">
                {pillar.metrics.map((metric, metricIndex) => (
                  <div key={metric} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-gradient-to-r ${pillar.color} rounded-full`} />
                    <span className="text-sm text-black">{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 text-foreground mb-4">
              Our Impact Numbers
            </h3>
            <p className="body-medium text-foreground/70">
              Real results from our biodiversity credit projects worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <metric.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gradient-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-foreground/80">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="heading-3 text-foreground mb-6">
              Transparent Governance Process
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Project Assessment",
                  description: "Comprehensive evaluation of biodiversity impact and community benefits"
                },
                {
                  step: "02",
                  title: "Stakeholder Engagement",
                  description: "Active involvement of local communities and indigenous groups"
                },
                {
                  step: "03",
                  title: "Impact Measurement",
                  description: "Rigorous monitoring and verification of environmental outcomes"
                },
                {
                  step: "04",
                  title: "Credit Generation",
                  description: "Transparent tokenization of verified biodiversity credits"
                }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-lg font-bold text-primary-foreground">
                      {process.step}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {process.title}
                    </h4>
                    <p className="text-foreground/70">
                      {process.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="text-center">
              <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Verified Impact
              </h4>
              
              <p className="text-foreground/70 mb-6">
                Every credit is backed by rigorous scientific measurement and 
                third-party verification to ensure real environmental impact.
              </p>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">99%</div>
                  <div className="text-sm text-foreground/60">Verification Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-foreground/60">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card max-w-3xl lg:max-w-4xl mx-auto">
            <h3 className="heading-3 text-foreground mb-4">
              Join Our Governance Framework
            </h3>
            <p className="body-medium text-foreground/70 mb-6">
              Be part of a transparent, accountable ecosystem that delivers 
              real environmental and social impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Learn More About Governance
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Frame; 