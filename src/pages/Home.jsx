import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, Zap, Leaf, Home as HomeIcon, Wrench, MapPin, Users, Quote } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import WhatsappFloat from "../components/WhatsappFloat.jsx";
import AutoQuote from "../components/AutoQuote.jsx";

//   card

const solutions = [
  {
    title: "Solar Irrigation Pumps",
    image: "/images/irrigation.png",
  },
  {
    title: "Industrial Rooftop Solar",
    image: "/images/industrial.jfif",
  },
  {
    title: "Residential Rooftop Solar",
    image: "/images/recedential.jfif",
  },
  {
    title: "Energy Storage Systems",
    image: "/images/storage.jfif",
  },
];

//   end

//   map
const locations = [
  { name: "Delhi", lat: 28.6139, lng: 77.209 },
  { name: "Jaipur", lat: 26.9124, lng: 75.7873 },
  { name: "Ahmedabad", lat: 23.0225, lng: 72.5714 },
  { name: "Bhopal", lat: 23.2599, lng: 77.4126 },
  { name: "Hyderabad", lat: 17.385, lng: 78.4867 },
  { name: "Chennai", lat: 13.0827, lng: 80.2707 },
  { name: "Kolkata", lat: 22.5726, lng: 88.3639 },
  { name: "Bhubaneswar", lat: 20.2961, lng: 85.8245 },
];

const stats = [
  { value: "62,285", label: "Solar projects commissioned" },
  { value: "18", label: "States" },
  { value: "315 MW", label: "Solar deployed" },
  { value: "228", label: "Districts" },
];

// end

//   impact section
const impactData = [
  {
    icon: <Zap className="h-8 w-8 text-[#da5b27]" />,
    value: "Energy First Approach",
    text: "Designed to deliver efficient, reliable solar solutions tailored to real-world needs.",
  },
  {
    icon: <Leaf className="h-8 w-8 text-green-600" />,
    value: "Sustainability Driven",
    text: "Focused on reducing carbon footprint through clean, renewable energy adoption.",
  },
  {
    icon: <HomeIcon className="h-8 w-8 text-blue-600" />,
    value: "Community Focused",
    text: "Committed to empowering homes and businesses with accessible solar power.",
  },
  {
    icon: <Wrench className="h-8 w-8 text-gray-600" />,
    value: "Quality-Led Execution",
    text: "Built with high-quality components and industry-standard installation practices.",
  },
  {
    icon: <MapPin className="h-8 w-8 text-red-600" />,
    value: "Regional Expertise",
    text: "Deep understanding of local conditions, regulations, and energy requirements.",
  },
  {
    icon: <Users className="h-8 w-8 text-purple-600" />,
    value: "Customer-First Support",
    text: "Transparent guidance, honest recommendations, and long-term service commitment.",
  },
];

// end

//   reviews
const reviews = [
  {
    name: "Ravi Kumar Reddy",
    role: "Farmer · Warangal, Telangana",
    image: null,
    text: "The guidance provided during the subsidy application and installation process was very helpful. The solar pump is working well and support has been responsive.",
  },
  {
    name: "Srinivas Rao",
    role: "Homeowner · Karimnagar, Telangana",
    image: null,
    text: "The team explained the system clearly and handled everything professionally. Installation was smooth and the system performance has been satisfactory.",
  },
  {
    name: "Mahesh Yadav",
    role: "Small Business Owner · Nalgonda, Telangana",
    image: null,
    text: "Zuva Solar helped us understand the cost savings and system sizing properly. The execution was timely and communication was clear.",
  },
  {
    name: "Lakshmi Devi",
    role: "Residential Customer · Khammam, Telangana",
    image: null,
    text: "From site visit to commissioning, the process was well managed. The team answered all our questions patiently.",
  },
  {
    name: "Venkatesh Naidu",
    role: "Agri Entrepreneur · Anantapur, Andhra Pradesh",
    image: null,
    text: "Solar irrigation has improved reliability for our farming activities. The support team ensured proper installation and basic training.",
  },
];

// faq
const faqs = [
  {
    question: "How much can I save with rooftop solar?",
    answer:
      "Savings depend on your electricity usage and system size. On average, homeowners can reduce their electricity bills by 60–90%. Most users recover their investment within 4–6 years.",
  },
  {
    question: "What subsidies are available for residential solar in India?",
    answer:
      "The Indian government offers subsidies under the Rooftop Solar Programme. Eligible homeowners can receive up to 40% subsidy for systems up to 3 kW and up to 20% for larger systems, subject to state policies.",
  },
  {
    question: "How much roof space do I need for solar panels?",
    answer:
      "Typically, a 1 kW solar system requires about 80–100 sq. ft. of shadow-free roof area. A standard home system of 3–5 kW usually fits comfortably on most residential rooftops.",
  },
  {
    question: "What happens during power cuts?",
    answer:
      "Standard grid-connected solar systems shut down during power cuts for safety. However, by adding batteries or a hybrid inverter, you can continue to use power even during outages.",
  },
  {
    question: "How long do solar panels last?",
    answer:
      "Most solar panels come with a performance warranty of 25 years. Even after that period, panels continue to generate electricity at slightly reduced efficiency.",
  },
  {
    question: "Is solar power reliable during cloudy or rainy days?",
    answer:
      "Yes. Solar panels still generate electricity during cloudy weather, though at reduced output. Annual system design accounts for weather variations to ensure reliable long-term performance.",
  },
];

// end faq

const Home = () => {
  //   hero
  const words = ["Farms", "Homes", "Businesses"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  // end

  // testimonals
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };
  // end

  //   faq
  const [faqIndex, setFaqIndex] = useState(null);

  const toggleFAQ = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };
  // end

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        {/* video  */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={"/videos/herovid.mp4"}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-4 h-4 bg-[#da5b27]/30 rounded-full blur-sm"
          ></motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-40 right-20 w-6 h-6 bg-yellow-400/20 rounded-full blur-sm"
          ></motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-32 left-20 w-3 h-3 bg-white/20 rounded-full blur-sm"
          ></motion.div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 max-w-5xl px-6 text-center text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-2xl"
          >
            <span className="text-[#da5b27]">Zuva</span> Solar Services For{" "}
            <span className="relative inline-flex items-center justify-center min-w-[10ch] h-[1.4em] mt-3 md:m-0  align-middle">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#da5b27] to-[#FF6B35] -mt-2 px-2 pb-2 rounded-xl shadow-lg"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-200 drop-shadow-lg"
          >
            India&apos;s most experienced solar company with{" "}
            <span className="font-semibold text-white bg-[#da5b27]/20 px-2 py-1 rounded">6000+</span> happy
            customers!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8"
          >
            <button className="bg-[#da5b27] hover:bg-[#B83D0A] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Free Quote
            </button>
          </motion.div>
        </motion.div>
      </section>
      {/* cards section  */}
      <section className="bg-gray-100 shadow-xs py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Tailored Solar Solutions for Every Need
            </h2>
            <p className="mt-4 text-gray-700 text-lg">
              Custom-fit solar solutions for every use-case and customer
              segment.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative h-[420px] overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 group-hover:via-black/20 transition-all duration-500"></div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-[#da5b27]/50 transition-all duration-500"></div>

                {/* Text */}
                <div className="absolute bottom-5 left-5 right-5 transform group-hover:translate-y-[-5px] transition-transform duration-300">
                  <h3 className="text-white text-lg font-semibold drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* end  */}
      {/* map section  */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nationwide Footprint. Last Mile Access.
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Every dot on the map tells a story of real solar impact.
            </p>
          </motion.div>

          {/* Map */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-md border">
            <iframe
              title="Zuva Solar Location"
              src="https://www.google.com/maps?q=17.951861,79.599694&z=15&output=embed"
              className="w-full h-[320px] md:h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* end  */}
      {/* impact  */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Delivering Lasting Impact
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Our work delivers meaningful environmental & social impact
            </p>
          </motion.div>

          {/* Cards */}
          <div className=" rounded-xl p-8  rounded-xl p-8 mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-8 text-center shadow-sm border hover:shadow-lg hover:border-[#da5b27]/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>

                {/* Value */}
                <div className="text-[#da5b27] text-2xl font-bold">
                  {item.value}
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* end  */}
      {/* testimonals  */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Customer Validation
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Our customers love us — hear what they have to say about our work!
            </p>
          </motion.div>

          {/* Slider */}
          <div className="relative mt-12 flex justify-center">
            <div className="relative w-full max-w-2xl">
              {/* CARD */}
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 relative"
              >
                {/* LEFT ARROW (ON CARD) */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 hidden md:flex h-9 w-9 items-center justify-center rounded-full shadow-md border border-gray-300 bg-white shadow hover:bg-gray-100 text-gray-600"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* RIGHT ARROW (ON CARD) */}
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex h-9 w-9 items-center justify-center rounded-full shadow-md border border-gray-300 bg-white hover:bg-gray-100 text-gray-600 transition-colors"
                >
                  <ChevronRight size={18} />
                </button>

                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-[#da5b27]/20">
                  <Quote size={32} />
                </div>

                {/* CONTENT */}
                <div className="flex items-start gap-4 pr-6 pl-6 md:pl-12 md:pr-12">
                  {/* PROFILE IMAGE */}
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#da5b27] to-[#FF6B35] border-2 border-white shadow-md flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
                      “{reviews[currentSlide].text}”
                    </p>

                    <div className="mt-4">
                      <p className="font-semibold text-[#da5b27]">
                        {reviews[currentSlide].name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {reviews[currentSlide].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* end  */}
      {/* faq start  */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Get answers to common questions about solar energy solutions.
            </p>
          </motion.div>

          {/* FAQ List */}
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                  faqIndex === index
                    ? "border-[#da5b27] bg-orange-50 shadow-md"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center p-5 text-left transition-colors ${
                    faqIndex === index
                      ? "bg-[#da5b27] text-white"
                      : "text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <span className="font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      faqIndex === index ? "rotate-180 text-white" : "text-gray-500"
                    }`}
                  />
                </button>

                {/* Answer */}
                {faqIndex === index && (
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* faq end  */}

      {/* floating whats app  */}
      <WhatsappFloat />

      {/* form pop up  */}
      <AutoQuote />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
