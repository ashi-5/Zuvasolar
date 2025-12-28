import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import WhatsappFloat from "../components/WhatsappFloat.jsx";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Zap,
  Shield,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Calendar,
  Globe,
  Star,
  ArrowRight,
  Check,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    company: "",
    jobTitle: "",
    state: "",

    requirements: "",
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCallPopupOpen, setIsCallPopupOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim all string inputs
    const trimmedData = {
      ...formData,
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      mobile: formData.mobile.trim(),
      company: formData.company.trim(),
      jobTitle: formData.jobTitle.trim(),
      requirements: formData.requirements.trim(),
    };

    // Validation functions
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const isValidMobile = (mobile) => {
      const mobileRegex = /^[6-9]\d{9}$/;
      return mobileRegex.test(mobile);
    };

    // Required field validations
    if (!trimmedData.firstName || trimmedData.firstName.length < 2) {
      toast.error("First name is required and must be at least 2 characters");
      return;
    }

    if (!trimmedData.lastName || trimmedData.lastName.length < 2) {
      toast.error("Last name is required and must be at least 2 characters");
      return;
    }

    if (!trimmedData.email || !isValidEmail(trimmedData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (trimmedData.mobile && !isValidMobile(trimmedData.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number starting with 6-9");
      return;
    }

    if (!trimmedData.company || trimmedData.company.length < 2) {
      toast.error("Company name is required and must be at least 2 characters");
      return;
    }

    if (!trimmedData.jobTitle || trimmedData.jobTitle.length < 2) {
      toast.error("Job title is required and must be at least 2 characters");
      return;
    }

    if (!trimmedData.state) {
      toast.error("Please select your state");
      return;
    }

    if (selectedServices.length === 0) {
      toast.error("Please select at least one service");
      return;
    }

    // If all validations pass
    toast.success("Our team will reach out to you shortly!");

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        company: "",
        jobTitle: "",
        state: "",
        requirements: "",
      });
      setSelectedServices([]);
    }, 3000);
  };

  // foem end
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 79955 00320",],
      description: "Mon-Fri 10AM-6PM IST",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@zuvsolar.com", "sm@zuvsolar.com"],
      description: "We'll respond within 24 hours",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Warangal", "Telangana, India"],
      description: "Schedule an appointment",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 10AM-6PM", "Sat: 10AM-3PM"],
      description: "Sunday: Closed",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const services = [
    "Residential / Commercial Solar Installation",
    "Solar Plant Design & Consultancy",
    "Subsidy & Net Metering Support",
    "Solar AMC & Maintenance",
    "Rooftop Solar",
    "Utility Scale Solar Projects",
  ];

  const faqs = [
    {
      question: "How long does a typical solar installation take?",
      answer:
        "Residential installations usually take 2-3 days, while commercial projects can take 1-2 weeks depending on the scale.",
    },
    {
      question: "Do you provide maintenance services?",
      answer:
        "Yes, we offer comprehensive AMC (Annual Maintenance Contract) services to ensure your solar system operates at peak efficiency.",
    },
    {
      question: "What subsidies are available for solar installations?",
      answer:
        "We help you access various government subsidies including MNRE subsidies, accelerated depreciation, and state-specific incentives.",
    },
    {
      question: "Do you work with both residential and commercial clients?",
      answer:
        "Absolutely! We serve residential homeowners, commercial businesses, and industrial clients across India and the UAE.",
    },
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
            Ready to harness the power of the sun? Let's discuss your solar
            energy journey and create a sustainable future together.
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
              <span className="text-white/90">All over India</span>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose the method that works best for
              you.
            </p>
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
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-gray-600 text-center mb-1 font-medium"
                    >
                      {detail}
                    </p>
                  ))}
                  <p className="text-gray-500 text-center text-sm mt-3">
                    {info.description}
                  </p>
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
            <Toaster position="top-right" />

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Start Your Solar Journey
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and our experts will get back to you
                  within 24 hours.
                </p>
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
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      Your message has been sent successfully. We'll get back to
                      you soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="First Name *"
                        className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D84A0E] focus:border-[#D84A0E] transition"
                      />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Last Name *"
                        className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D84A0E] focus:border-[#D84A0E] transition"
                      />
                    </div>

                    {/* Contact */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Email Address *"
                        className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D84A0E] focus:border-[#D84A0E] transition"
                      />
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Mobile Number"
                        maxLength="10"
                        className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D84A0E] focus:border-[#D84A0E] transition"
                      />
                    </div>

                    {/* Company */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        placeholder="Company Name *"
                        className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D84A0E] focus:border-[#D84A0E] transition"
                      />
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        required
                        placeholder="Job Title *"
                        className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D84A0E] focus:border-[#D84A0E] transition"
                      />
                    </div>

                    {/* state */}
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white text-gray-900 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D84A0E] focus:border-[#D84A0E] transition"
                    >
                      <option value="">Select state *</option>
                      <option>Telangana</option>
                      <option>Andhra Pradesh</option>
                      <option>Karnataka</option>
                      <option>Other</option>
                    </select>

                    {/* Net Zero Goal */}

                    {/* Services */}
                    <div>
                      <p className="font-medium text-gray-700 mb-2">
                        Services *
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {services.map((service) => (
                          <label
                            key={service}
                            className="flex items-center gap-3 p-3 rounded-xl border border-gray-300 bg-white text-gray-700 hover:border-[#D84A0E] transition cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={selectedServices.includes(service)}
                              onChange={() => handleServiceChange(service)}
                              className="sr-only"
                            />
                            <span className={`w-4 h-4 border-2 border-black rounded flex items-center justify-center transition-colors ${
                              selectedServices.includes(service) ? 'bg-black' : 'bg-white'
                            }`}>
                              {selectedServices.includes(service) && (
                                <Check className="w-3 h-3 text-white" />
                              )}
                            </span>
                            {service}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Tell us your requirements"
                      className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D84A0E] focus:border-[#D84A0E] resize-none transition"
                    />

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-[#D84A0E] to-[#b83e0c] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition"
                    >
                      <Send className="w-5 h-5" />
                      Submit
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* MAP & OFFICE INFO */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-6 sm:p-8 shadow-xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-r from-[#D84A0E] to-[#b83e0c] rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    Our Locations
                  </h3>
                </div>

                {/* Locations */}
                {/* Locations */}
                <div className="space-y-5">
                  {/* India */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6">
                    <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                      India Office
                    </h4>

                    <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed">
                      19-9-483, Shambunipet,
                      <br />
                      Warangal, Telangana 506005, India
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4 text-[#D84A0E]" />
                      <span>+91 79955 00320</span>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-6 rounded-2xl overflow-hidden h-52 sm:h-64 border">
                  <iframe
                    title="Zuva Solar Warangal Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170.19552239321968!2d79.59950582864538!3d17.95190225086053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9e9f40dd6b459d%3A0x24252b4cdbdea41!2sZuva%20Engineering%20Solar%20Energy%20Solutions!5e1!3m2!1sen!2sin!4v1766933295726!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-5 sm:p-6 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-800 mb-1">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-green-600">
                    Support Available
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-5 sm:p-6 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-800 mb-1">
                    &lt;24hrs
                  </div>
                  <div className="text-xs sm:text-sm text-blue-600">
                    Response Time
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-[#D84A0E] to-slate-800 text-white">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute top-8 left-8 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-8 right-8 w-32 h-32 sm:w-40 sm:h-40 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16 lg:py-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              Find answers to common questions about our solar energy solutions
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm p-5 sm:p-6 hover:bg-white/20 transition"
              >
                <h3 className="flex items-start gap-3 text-base sm:text-lg font-semibold">
                  <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span>{faq.question}</span>
                </h3>

                <p className="mt-3 ml-10 sm:ml-11 text-sm sm:text-base text-white/80 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-12 sm:py-14 md:py-16 lg:py-20 text-center"
          >
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Ready to Go Solar?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have already made the
              switch to clean, renewable energy. Let’s start your solar journey
              today!
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsCallPopupOpen(true)}
                className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-[#D84A0E]
                     px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-[#D84A0E]
                     transition hover:bg-[#D84A0E] hover:text-white cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CALL POPUP */}
      <AnimatePresence>
        {isCallPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsCallPopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Call Us Now
                </h3>
                <p className="text-gray-600 mb-6">
                  Our experts are ready to help you with your solar energy needs.
                </p>
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-lg font-semibold text-gray-800 mb-1">
                    +91 79955 00320
                  </p>
                  <p className="text-sm text-gray-600">
                    Mon-Fri: 10AM-6PM | Sat: 10AM-3PM
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="tel:+917995500320"
                    className="flex-1 bg-gradient-to-r from-[#D84A0E] to-[#b83e0c] text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <button
                    onClick={() => setIsCallPopupOpen(false)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <WhatsappFloat />
      <Footer />
    </div>
  );
};

export default Contact;
