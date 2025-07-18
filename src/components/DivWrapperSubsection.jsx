import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  StarIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowTrendingUpIcon,
  ScaleIcon
} from "@heroicons/react/24/outline";

const comparisonData = [
  {
    category: "Unit of Measurement",
    biodiversity: "Ecosystem Health Index",
    carbon: "CO2 Equivalent (tCO2e)",
    icon: ScaleIcon
  },
  {
    category: "Purpose of Use",
    biodiversity: "Ecosystem Restoration & Conservation",
    carbon: "Carbon Emission Reduction",
    icon: StarIcon
  },
  {
    category: "Community Focus",
    biodiversity: "Local & Indigenous Communities",
    carbon: "Global Climate Impact",
    icon: GlobeAltIcon
  },
  {
    category: "Locality",
    biodiversity: "Site-Specific Impact",
    carbon: "Global Impact",
    icon: ChartBarIcon
  },
  {
    category: "Tradability",
    biodiversity: "Emerging Market",
    carbon: "Established Market",
    icon: CurrencyDollarIcon
  },
  {
    category: "Liquidity",
    biodiversity: "Lower (Growing)",
    carbon: "Higher (Mature)",
    icon: ArrowTrendingUpIcon
  },
  {
    category: "MRV (Monitoring)",
    biodiversity: "Comprehensive Ecosystem Assessment",
    carbon: "Carbon Measurement Only",
    icon: CheckCircleIcon
  },
  {
    category: "Implementation Cost",
    biodiversity: "Higher (Complex Assessment)",
    carbon: "Lower (Standardized)",
    icon: ClockIcon
  }
];

const DivWrapperSubsection = () => {
  const [activeTab, setActiveTab] = useState('biodiversity');

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-green-100 to-green-50 pt-32 pb-20">
      <div className="container-modern">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass-nav px-4 py-2 rounded-full mb-6">
            <ScaleIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-black">
              Credit Comparison
            </span>
          </div>
          
          <h2 className="heading-2 text-black mb-6">
            Biodiversity Credits vs{" "}
            <span className="text-gradient-primary">Carbon Credits</span>
          </h2>
          
          <p className="body-large text-black max-w-4xl lg:max-w-5xl mx-auto">
            Understanding the key differences between biodiversity and carbon credits 
            helps organizations make informed decisions about their sustainability strategies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="glass-nav p-1 rounded-2xl">
            <div className="flex space-x-1">
              {[
                { id: 'biodiversity', label: 'Biodiversity Credits', icon: StarIcon },
                { id: 'carbon', label: 'Carbon Credits', icon: CloudIcon }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.id === 'biodiversity' ? 'Bio' : 'Carbon'}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card w-full"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-4 px-6 font-semibold text-black">
                    Comparison Criteria
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-black">
                    Biodiversity Credits
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-black">
                    Carbon Credits
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={row.category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="group hover:bg-muted/30 transition-colors duration-300"
                  >
                    <td className="py-6 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                          <row.icon className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="font-medium text-black">
                          {row.category}
                        </span>
                      </div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="glass-nav px-4 py-2 rounded-xl inline-block">
                        <span className="text-sm font-medium text-black">
                          {row.biodiversity}
                        </span>
                      </div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="glass-nav px-4 py-2 rounded-xl inline-block">
                        <span className="text-sm font-medium text-black">
                          {row.carbon}
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="card-modern">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                <StarIcon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="heading-3 text-black">Biodiversity Credits</h3>
            </div>
            <ul className="space-y-3 text-black">
              <li className="flex items-start space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Comprehensive ecosystem assessment</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Local community benefits</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Long-term sustainability focus</span>
              </li>
            </ul>
          </div>

          <div className="card-modern">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                <CloudIcon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="heading-3 text-black">Carbon Credits</h3>
            </div>
            <ul className="space-y-3 text-black">
              <li className="flex items-start space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Established market infrastructure</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Standardized measurement</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Immediate climate impact</span>
              </li>
            </ul>
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
            <h3 className="heading-3 text-black mb-4">
              Choose Your Impact Strategy
            </h3>
            <p className="body-medium text-black mb-6">
              Whether you're focused on biodiversity conservation or carbon reduction, 
              we have the expertise to guide your sustainability journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Conservation Credits of Biomass , Biodiversity and Ecosystem Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-black"
              >
                Learn About Carbon Credits
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DivWrapperSubsection;
