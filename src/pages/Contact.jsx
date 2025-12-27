import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Zap, Shield, Users, MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle, Calendar, Globe, Star, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    company: '',
    jobTitle: '',
    country: '',
    netZeroGoal: '',
    requirements: ''
  });
  const [selectedServices, setSelectedServices] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (service) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the form data to your backend
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+971 50 123 4567"],
      description: "Mon-Fri 9AM-6PM IST",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@zuvsolar.com", "support@zuvsolar.com"],
      description: "We'll respond within 24 hours",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Mumbai, India", "Dubai, UAE"],
      description: "Schedule an appointment",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM-6PM", "Sat: 9AM-2PM"],
      description: "Sunday: Closed",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const services = [
    "Residential / Commercial Solar Installation",
    "Solar Plant Design & Consultancy",
    "Subsidy & Net Metering Support",
    "Solar AMC & Maintenance",
    "Rooftop Solar",
    "Utility Scale Solar Projects"
  ];

  const netZeroGoals = ["2030", "2040", "2050", "2060", "Not defined yet"];

  const faqs = [
    {
      question: "How long does a typical solar installation take?",
      answer: "Residential installations usually take 2-3 days, while commercial projects can take 1-2 weeks depending on the scale."
    },
    {
      question: "Do you provide maintenance services?",
      answer: "Yes, we offer comprehensive AMC (Annual Maintenance Contract) services to ensure your solar system operates at peak efficiency."
    },
    {
      question: "What subsidies are available for solar installations?",
      answer: "We help you access various government subsidies including MNRE subsidies, accelerated depreciation, and state-specific incentives."
    },
    {
      question: "Do you work with both residential and commercial clients?",
      answer: "Absolutely! We serve residential homeowners, commercial businesses, and industrial clients across India and the UAE."
    }
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
              <MessageCircle className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl lg:text-2xl max-w-4xl mx-auto text-white/90 font-light leading-relaxed mb-12"
          >
            Ready to harness the power of the sun? Let's discuss your solar energy journey and create a sustainable future together.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-yellow-300" />
              <span className="text-white/90">24/7 Support Available</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-300" />
              <span className="text-white/90">Expert Consultation</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-yellow-300" />
              <span className="text-white/90">India & UAE Coverage</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CONTACT INFO CARDS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Multiple ways to reach us. Choose the method that works best for you.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 h-full"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-center mb-1 font-medium">{detail}</p>
                  ))}
                  <p className="text-gray-500 text-center text-sm mt-3">{info.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT FORM & MAP */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Start Your Solar Journey</h2>
                <p className="text-gray-600">Fill out the form below and our experts will get back to you within 24 hours.</p>
              </div>

              <AnimatePresence>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                    <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D84A0E] focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D84A0E] focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D84A0E] focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D84A0E] focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Company Fields */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D84A0E] focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="ABC Corporation"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
                        <input
                          type="text"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D84A0E] focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="CEO"
                        />
                      </div>
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D84A0E] focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      >
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="UAE">United Arab Emirates</option>
                        <option value="USA">United States</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Net Zero Goal */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">What is your Net-Zero Goal? *</label>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                        {netZeroGoals.map((goal) => (
                          <button
                            key={goal}
                            type="button"
                            onClick={() => setFormData({...formData, netZeroGoal: goal})}
                            className={`px-4 py-3 rounded-xl border-2 transition-all duration-300 text-sm font-medium ${
                              formData.netZeroGoal === goal
                                ? 'border-[#D84A0E] bg-[#D84A0E] text-white shadow-lg'
                                : 'border-gray-300 bg-white/50 hover:border-[#D84A0E] hover:bg-[#D84A0E] hover:text-white'
                            }`}
                          >
                            {goal}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">What are you looking for? *</label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {services.map((service) => (
                          <label key={service} className="flex items-center gap-3 p-3 rounded-xl border-2 border-gray-200 bg-white/50 hover:border-[#D84A0E] cursor-pointer transition-all duration-300">
                            <input
                              type="checkbox"
                              checked={selectedServices.includes(service)}
                              onChange={() => handleServiceChange(service)}
                              className="w-4 h-4 accent-[#D84A0E] focus:ring-[#D84A0E] focus:ring-2"
                            />
                            <span className="text-sm text-gray-700">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Requirements */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tell us your requirements</label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D84A0E] focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                        placeholder="Please describe your solar energy needs, timeline, budget, and any specific requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#D84A0E] to-[#b83e0c] hover:from-[#b83e0c] hover:to-[#D84A0E] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* MAP & OFFICE INFO */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#D84A0E] to-[#b83e0c] rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Locations</h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">India Office</h4>
                    <p className="text-gray-600 mb-3">123 Solar Street, Mumbai, Maharashtra 400001</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Phone className="w-4 h-4" />
                      <span>+91 98765 43210</span>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">UAE Office</h4>
                    <p className="text-gray-600 mb-3">456 Energy Avenue, Dubai, UAE</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Phone className="w-4 h-4" />
                      <span>+971 50 123 4567</span>
                    </div>
                  </div>
                </div>

                {/* Map would go here - for now showing a placeholder */}
                <div className="mt-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <p className="text-blue-800 font-medium">Interactive Map</p>
                    <p className="text-blue-600 text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold text-green-800 mb-1">24/7</div>
                  <div className="text-sm text-green-600">Support Available</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold text-blue-800 mb-1">&lt;24hrs</div>
                  <div className="text-sm text-blue-600">Response Time</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-[#D84A0E] to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">Find answers to common questions about our solar energy solutions</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  {faq.question}
                </h3>
                <p className="text-white/80 leading-relaxed ml-11">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Ready to Go Solar?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have already made the switch to clean, renewable energy.
              Let's start your solar journey today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-[#D84A0E] to-[#b83e0c] hover:from-[#b83e0c] hover:to-[#D84A0E] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </motion.button>

              <motion.button
                className="border-2 border-[#D84A0E] text-[#D84A0E] hover:bg-[#D84A0E] hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
