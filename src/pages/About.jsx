import React from "react";
import Navbar from "../components/Navbar.jsx";
import { motion } from "framer-motion";
import Footer from "../components/Footer.jsx";
import {
  Sun,
  Users,
  Award,
  Leaf,
  Target,
  Heart,
  Zap,
  Globe,
  Star,
  Calendar,
  MapPin,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "ZuvaSolar was founded with a vision to revolutionize renewable energy in India and the UAE.",
      icon: Sun,
    },
    {
      year: "2021",
      title: "First Major Project",
      description:
        "Completed our first 1MW solar installation, setting new standards for quality and efficiency.",
      icon: Zap,
    },
    {
      year: "2022",
      title: "International Expansion",
      description:
        "Extended our services to the UAE, bringing sustainable energy solutions to the Middle East.",
      icon: Globe,
    },
    {
      year: "2023",
      title: "Innovation Milestone",
      description:
        "Launched our smart energy management platform, revolutionizing solar system monitoring.",
      icon: Target,
    },
    {
      year: "2024",
      title: "10,000+ Installations",
      description:
        "Reached a milestone of 10,000+ successful solar installations across India and UAE.",
      icon: Star,
    },
    {
      year: "2025",
      title: "Future Forward",
      description:
        "Continuing to innovate and expand our reach in the renewable energy sector.",
      icon: TrendingUp,
    },
  ];

  const stats = [
    {
      number: "10,000+",
      label: "Happy Customers",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "50MW+",
      label: "Clean Energy Generated",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "15+",
      label: "Years Combined Experience",
      icon: Award,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "99%",
      label: "Customer Satisfaction",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      position: "CEO & Founder",
      bio: "Visionary leader with 15+ years in renewable energy sector, driving innovation and sustainable solutions.",
      image: "/images/industrial.jfif",
      expertise: [
        "Strategic Leadership",
        "Solar Technology",
        "Business Development",
      ],
    },
    {
      name: "Priya Sharma",
      position: "Chief Technology Officer",
      bio: "Expert in solar engineering and system optimization with a passion for cutting-edge renewable technologies.",
      image: "/images/recedential.jfif",
      expertise: ["Solar Engineering", "System Design", "Technical Innovation"],
    },
    {
      name: "Ahmed Hassan",
      position: "Operations Director",
      bio: "Oversees project execution and client relationships, ensuring seamless delivery of solar solutions.",
      image: "/images/storage.jfif",
      expertise: ["Project Management", "Client Relations", "Operations"],
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
              About Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl lg:text-2xl max-w-4xl mx-auto text-white/90 font-light leading-relaxed mb-12"
          >
            Pioneering sustainable energy solutions that illuminate homes,
            businesses, and communities across India and the UAE with clean,
            renewable power.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-300" />
              <span className="text-white/90">Award-Winning Excellence</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-yellow-300" />
              <span className="text-white/90">India & UAE Presence</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-300" />
              <span className="text-white/90">50MW+ Clean Energy</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* IMPACT STATS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-12 sm:py-14 md:py-16 lg:py-20"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Transforming lives and communities through sustainable energy
              solutions
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pb-12 sm:pb-14 md:pb-16 lg:pb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="h-full rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100
                       p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-xl transition"
                >
                  {/* Icon */}
                  <div
                    className={`mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16
                          items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color}
                          transition-transform group-hover:scale-110`}
                  >
                    <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                  </div>

                  {/* Number */}
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY - TIMELINE */}
      <section className="bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16 lg:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Our Story
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            What started as a small vision to make clean energy accessible has
            grown into a mission-driven journey across India. We began by
            helping a few households switch to solar power, and over the years,
            our commitment to sustainability, innovation, and trust has allowed
            us to empower businesses, communities, and industries. Today, we
            continue to build a greener future by delivering reliable renewable
            energy solutions that create long-term impact for people and the
            planet.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-gradient-to-r from-[#D84A0E] via-slate-800 to-[#b83e0c] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                To accelerate the global transition to renewable energy by
                providing accessible, affordable, and high-quality solar
                solutions that empower communities and businesses to achieve
                energy independence while protecting our planet for future
                generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                To be the leading renewable energy company in India and the UAE,
                recognized for innovation, sustainability, and excellence in
                solar energy solutions, creating a world where clean energy is
                the standard, not the exception.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our
              commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sun,
                title: "Innovation",
                description:
                  "Constantly pushing the boundaries of solar technology to deliver cutting-edge solutions.",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description:
                  "Committed to environmental stewardship and reducing carbon footprints worldwide.",
                color: "from-green-400 to-emerald-500",
              },
              {
                icon: Heart,
                title: "Community",
                description:
                  "Building strong partnerships and empowering communities through renewable energy.",
                color: "from-pink-400 to-rose-500",
              },
              {
                icon: Shield,
                title: "Excellence",
                description:
                  "Delivering top-quality products and services with unwavering commitment to customer satisfaction.",
                color: "from-blue-400 to-cyan-500",
              },
            ].map((value, index) => (
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
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {value.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The visionaries and experts driving ZuvaSolar's mission to
              revolutionize renewable energy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#D84A0E] font-semibold mb-4">
                      {member.position}
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Expertise:
                      </h4>
                      {member.expertise.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-[#D84A0E] to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Why Choose ZuvaSolar?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Experience the difference that sets us apart in the renewable
              energy industry
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {[
                {
                  icon: Zap,
                  title: "Cutting-Edge Technology",
                  description:
                    "We use the latest solar panel technology and smart energy management systems for maximum efficiency and performance.",
                },
                {
                  icon: Award,
                  title: "Proven Track Record",
                  description:
                    "Over 10,000 successful installations with a 99% customer satisfaction rate and industry-leading warranties.",
                },
                {
                  icon: Clock,
                  title: "Expert Support",
                  description:
                    "Dedicated team providing comprehensive support from initial consultation through installation and ongoing maintenance.",
                },
                {
                  icon: TrendingUp,
                  title: "ROI Focused",
                  description:
                    "Our solutions are designed to maximize your return on investment with competitive pricing and long-term savings.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <img
                  src="/images/recedential.jfif"
                  alt="Solar installation excellence"
                  className="rounded-2xl w-full h-96 object-cover shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-xl">
                  <div className="text-2xl font-bold text-white">10,000+</div>
                  <div className="text-white/90">Happy Customers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
