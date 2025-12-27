import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer.jsx";
import { Sun, Home, Building2, Factory, Star, Award, Users, Zap, Eye, MapPin, Calendar, X } from "lucide-react";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Eco-Friendly Home Transformation",
      category: "residential",
      description: "Revolutionary 5kW solar installation that reduced energy costs by 80% for a modern Mumbai family.",
      fullDescription: "This comprehensive residential project involved a complete solar transformation of a 3BHK apartment. We installed high-efficiency monocrystalline panels, a smart inverter system, and integrated battery storage. The system generates 6000+ kWh annually, completely offsetting the household's electricity consumption.",
      image: "/images/recedential.jfif",
      icon: Home,
      stats: { capacity: "5kW", savings: "80%", location: "Mumbai", year: "2024" },
      featured: true,
      technologies: ["Monocrystalline Panels", "Smart Inverter", "Battery Storage"],
      testimonial: "Our electricity bill went from ₹8,000 to ₹1,600 per month!"
    },
    {
      id: 2,
      title: "Corporate Campus Revolution",
      category: "commercial",
      description: "50kW solar power system lighting up corporate workspaces across Delhi's business district.",
      fullDescription: "A landmark commercial installation covering 10,000 sq ft of office space. The system includes rooftop panels, building-integrated photovoltaics, and a comprehensive monitoring dashboard. This project reduced the company's carbon footprint by 60% and saved ₹4 lakh annually.",
      image: "/images/industrial.jfif",
      icon: Building2,
      stats: { capacity: "50kW", savings: "60%", location: "Delhi", year: "2023" },
      featured: true,
      technologies: ["BIPV System", "SCADA Monitoring", "Grid Integration"],
      testimonial: "The ROI was achieved in just 4 years!"
    },
    {
      id: 3,
      title: "Industrial Power Giant",
      category: "industrial",
      description: "1MW solar farm powering manufacturing excellence in Gujarat's industrial corridor.",
      fullDescription: "This utility-scale solar installation spans 5 acres and provides clean energy to three manufacturing facilities. The project includes advanced tracking systems, weather monitoring, and AI-optimized power distribution.",
      image: "/images/storage.jfif",
      icon: Factory,
      stats: { capacity: "1MW", savings: "70%", location: "Gujarat", year: "2023" },
      featured: false,
      technologies: ["Dual-Axis Tracking", "AI Optimization", "Weather Monitoring"],
      testimonial: "Reliable power 24/7, zero downtime since installation."
    },
    {
      id: 4,
      title: "Urban Rooftop Innovation",
      category: "residential",
      description: "Smart rooftop solution maximizing limited urban space for optimal energy generation.",
      fullDescription: "An innovative installation on a high-rise apartment building utilizing every inch of available rooftop space. The system includes micro-inverters for maximum efficiency and a community monitoring app.",
      image: "/images/recedential.jfif",
      icon: Home,
      stats: { capacity: "3kW", savings: "75%", location: "Pune", year: "2024" },
      featured: false,
      technologies: ["Micro-Inverters", "Community App", "Space Optimization"],
      testimonial: "Our building now produces more energy than it consumes!"
    },
    {
      id: 5,
      title: "Tech Park Sustainability",
      category: "commercial",
      description: "100kW comprehensive solar solution covering multiple buildings in Bangalore's tech hub.",
      fullDescription: "A multi-building solar installation serving 500+ employees across three office buildings. The system includes smart metering, demand response capabilities, and integration with the campus energy management system.",
      image: "/images/industrial.jfif",
      icon: Building2,
      stats: { capacity: "100kW", savings: "55%", location: "Bangalore", year: "2023" },
      featured: false,
      technologies: ["Smart Metering", "Demand Response", "EMS Integration"],
      testimonial: "We're now a net-positive energy campus."
    },
    {
      id: 6,
      title: "Grid-Scale Solar Powerhouse",
      category: "industrial",
      description: "5MW utility-scale solar plant contributing clean energy to Rajasthan's power grid.",
      fullDescription: "A massive 5MW installation spanning 25 acres, featuring the latest in solar technology including bifacial panels, advanced tracking, and grid stabilization systems. This project powers 2,500 homes annually.",
      image: "/images/storage.jfif",
      icon: Factory,
      stats: { capacity: "5MW", savings: "65%", location: "Rajasthan", year: "2022" },
      featured: true,
      technologies: ["Bifacial Panels", "Grid Stabilization", "Advanced Tracking"],
      testimonial: "Setting the standard for utility-scale solar in India."
    }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { key: "all", label: "All Projects", icon: Sun, count: projects.length },
    { key: "residential", label: "Residential", icon: Home, count: projects.filter(p => p.category === "residential").length },
    { key: "commercial", label: "Commercial", icon: Building2, count: projects.filter(p => p.category === "commercial").length },
    { key: "industrial", label: "Industrial", icon: Factory, count: projects.filter(p => p.category === "industrial").length }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white text-black min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative bg-gradient-to-br from-slate-900 via-[#D84A0E] to-slate-800 text-white py-32 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(216,74,14,0.3),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(139,69,19,0.2),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <Sun className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl lg:text-2xl max-w-4xl mx-auto text-white/90 font-light leading-relaxed mb-12"
          >
            Discover our groundbreaking solar energy projects that are illuminating homes, businesses, and communities across India with sustainable power solutions.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-300" />
              <span className="text-white/90">Award-Winning Projects</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-yellow-300" />
              <span className="text-white/90">10,000+ Happy Customers</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-300" />
              <span className="text-white/90">50MW+ Power Generated</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FILTERS */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Explore Our Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Browse through our diverse portfolio of solar energy solutions</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`group relative overflow-hidden rounded-2xl px-8 py-4 font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-[#D84A0E] to-[#b83e0c] text-white shadow-2xl scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <filter.icon className={`w-6 h-6 ${activeFilter === filter.key ? 'text-white' : 'text-[#D84A0E]'}`} />
                  <span>{filter.label}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    activeFilter === filter.key
                      ? 'bg-white/20 text-white'
                      : 'bg-[#D84A0E]/10 text-[#D84A0E]'
                  }`}>
                    {filter.count}
                  </span>
                </div>
                {activeFilter === filter.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#D84A0E] to-[#b83e0c] rounded-2xl"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SHOWCASE */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                    project.featured ? 'ring-2 ring-[#D84A0E]/50' : ''
                  }`}
                  whileHover={{ y: -10 }}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-[#D84A0E] to-[#b83e0c] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Featured
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Overlay Info */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 text-white mb-2">
                        <project.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                      </div>
                      <p className="text-white text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#D84A0E] transition-colors">
                      {project.title}
                    </h3>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 text-center">
                        <Zap className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="text-xs text-blue-600 font-medium">Capacity</div>
                        <div className="font-bold text-blue-800">{project.stats.capacity}</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 text-center">
                        <Award className="w-5 h-5 text-green-600 mx-auto mb-1" />
                        <div className="text-xs text-green-600 font-medium">Savings</div>
                        <div className="font-bold text-green-800">{project.stats.savings}</div>
                      </div>
                    </div>

                    {/* Location & Year */}
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{project.stats.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.stats.year}</span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-[#D84A0E] hover:to-[#b83e0c] hover:text-white text-gray-700 font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <selectedProject.icon className="w-6 h-6 text-[#D84A0E]" />
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedProject.title}</h2>
                    <p className="text-gray-600">{selectedProject.description}</p>
                  </div>
                  {selectedProject.featured && (
                    <div className="bg-gradient-to-r from-[#D84A0E] to-[#b83e0c] text-white px-4 py-2 rounded-full text-sm font-bold">
                      Featured Project
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#D84A0E]">{selectedProject.stats.capacity}</div>
                    <div className="text-sm text-gray-600">Capacity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#D84A0E]">{selectedProject.stats.savings}</div>
                    <div className="text-sm text-gray-600">Energy Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#D84A0E]">{selectedProject.stats.location}</div>
                    <div className="text-sm text-gray-600">Location</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#D84A0E]">{selectedProject.stats.year}</div>
                    <div className="text-sm text-gray-600">Year</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Project Details</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.fullDescription}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-[#D84A0E]/10 text-[#D84A0E] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-semibold text-gray-800">Client Testimonial</span>
                  </div>
                  <p className="text-gray-600 italic">"{selectedProject.testimonial}"</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TESTIMONIALS SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#D84A0E] rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#b83e0c] rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold text-center mb-16"
          >
            What Our Clients Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                position: "CEO, TechManufacturing Corp",
                testimonial: "ZuvaSolar transformed our manufacturing facility with a cutting-edge solar solution that exceeded our expectations. The team's expertise and dedication to sustainable energy is truly remarkable.",
                rating: 5,
                project: "Industrial Power Giant"
              },
              {
                name: "Priya Sharma",
                position: "Homeowner, Mumbai",
                testimonial: "Our electricity bill went from ₹8,000 to ₹1,600 per month! The installation was seamless and the monitoring app keeps us informed about our energy production.",
                rating: 5,
                project: "Eco-Friendly Home Transformation"
              },
              {
                name: "Amit Patel",
                position: "Operations Manager, Corporate Campus",
                testimonial: "The ROI was achieved in just 4 years! Our carbon footprint has reduced by 60% and our employees love the sustainable workspace we've created.",
                rating: 5,
                project: "Corporate Campus Revolution"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-white/90 leading-relaxed mb-6 italic">
                  "{testimonial.testimonial}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#D84A0E] to-[#b83e0c] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-white/70 text-sm">{testimonial.position}</div>
                    <div className="text-[#D84A0E] text-xs font-medium mt-1">{testimonial.project}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* IMPACT STATS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 bg-gradient-to-r from-[#D84A0E] via-slate-800 to-[#b83e0c] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold text-center mb-16"
          >
            Our Impact in Numbers
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", icon: Sun, color: "from-yellow-400 to-orange-500" },
              { number: "50MW+", label: "Clean Energy Generated", icon: Zap, color: "from-blue-400 to-cyan-500" },
              { number: "10,000+", label: "Satisfied Customers", icon: Users, color: "from-green-400 to-emerald-500" },
              { number: "15+", label: "Years of Excellence", icon: Award, color: "from-purple-400 to-pink-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Work;
