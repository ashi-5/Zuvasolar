import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

import heroVideo from "../assets/herovid.mp4";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

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
    icon: "🛡️",
    value: "274 million",
    text: "kgs of carbon emissions avoided every year",
  },
  {
    icon: "👥",
    value: "1,10,000+",
    text: "individuals benefiting from our work",
  },
  {
    icon: "❤️",
    value: "18,382",
    text: "women farmers empowered with sustainable irrigation",
  },
  {
    icon: "💰",
    value: "$1.2 billion",
    text: "cumulative diesel savings delivered till date",
  },
  {
    icon: "📈",
    value: "~35%",
    text: "average farm yield increase enabled by reliable & on-demand solar irrigation",
  },
  {
    icon: "📍",
    value: "2,40,000+",
    text: "acres of farmland now under assured solar irrigation",
  },
];

// end

//   reviews
const reviews = [
  {
    name: "Parvinder Singh",
    role: "Farmer · Amroha, Uttar Pradesh",
    image: "https://i.pravatar.cc/100?img=12",
    text: "I had been waiting to get a solar pump under the government subsidy program for nearly 2 years. The support from the ZuvaSolar team during the application and installation process was excellent.",
  },
  {
    name: "Dr. Suchin Bajaj",
    role: "Founder · Cygnus Hospitals",
    image: "https://i.pravatar.cc/100?img=32",
    text: "I wanted a 12kW system with grid integration at my home. ZuvaSolar gave me a clear plan and realistic timeline. The system has been running flawlessly for over 18 months.",
  },
  {
    name: "Ramesh Patel",
    role: "Industrial Unit Owner · Gujarat",
    image: "https://i.pravatar.cc/100?img=45",
    text: "Our factory rooftop solar installation was completed ahead of schedule. Power savings are significant and the monitoring support has been reliable.",
  },
  {
    name: "Anita Sharma",
    role: "Homeowner · Jaipur",
    image: "https://i.pravatar.cc/100?img=47",
    text: "From consultation to commissioning, everything was smooth. My electricity bills have reduced drastically and the team was very professional.",
  },
  {
    name: "Suresh Naik",
    role: "Agri Entrepreneur · Karnataka",
    image: "https://i.pravatar.cc/100?img=56",
    text: "Solar irrigation has changed the way we farm. ZuvaSolar ensured proper training and after-installation support which gave us confidence.",
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
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

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
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
          >
            Solar That Pays Off For{" "}
            <span className="relative inline-flex items-center justify-center min-w-[10ch] h-[1.6em] mt-3 md:m-0 overflow-hidden align-middle">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center bg-red-600 px-4 py-2 rounded"
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
            className="mt-6 text-lg md:text-xl text-gray-200"
          >
            India&apos;s most experienced solar company with{" "}
            <span className="font-semibold text-white">60,000+</span> happy
            customers!
          </motion.p>
        </motion.div>
      </section>
      {/* cards section  */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Tailored Solar Solutions for Every Need
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Custom-fit solar solutions for every use-case and customer
              segment.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="group relative h-[420px] overflow-hidden rounded-2xl cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Text */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* end  */}
      {/* map section  */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nationwide Footprint. Last mile Access.
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Every dot on the map tells a story how solar brought real change.
            </p>
          </div>

          {/* Container */}
          <div className="mt-14 rounded-2xl overflow-hidden shadow-lg border">
            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 bg-[#0B1C2D] text-white">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="px-6 py-6 text-center border-r border-white/10 last:border-r-0"
                >
                  <div className="text-2xl md:text-3xl font-bold">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm text-gray-300">{item.label}</div>
                </div>
              ))}
            </div>

            {/* REAL MAP */}
            <div className="h-[500px] w-full">
              <MapContainer
                center={[22.5937, 78.9629]} // India center
                zoom={5}
                className="h-full w-full"
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {locations.map((loc, i) => (
                  <Marker key={i} position={[loc.lat, loc.lng]}>
                    <Popup>{loc.name}</Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </section>
      {/* end  */}
      {/* impact  */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Delivering Lasting Impact
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Our work delivers meaningful environmental & social impact
            </p>
          </div>

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-sm border hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="text-3xl mb-4 text-gray-700">{item.icon}</div>

                {/* Value */}
                <div className="text-red-600 text-2xl font-bold">
                  {item.value}
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* end  */}
      {/* testimonals  */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Customer Validation
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Our customers love us — hear what they have to say about our work!
            </p>
          </div>

          {/* Slider */}
          <div className="relative mt-12 flex justify-center">
            <div className="relative w-full max-w-2xl">
              {/* CARD */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border relative">
                {/* LEFT ARROW (ON CARD) */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 hidden md:flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow hover:bg-gray-100 text-gray-600"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* RIGHT ARROW (ON CARD) */}
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow hover:bg-gray-100 text-gray-600"
                >
                  <ChevronRight size={18} />
                </button>

                {/* CONTENT */}
                <div className="flex items-start gap-4 pr-6 pl-6 md:pl-12 md:pr-12">
                  {/* PROFILE IMAGE */}
                  <img
                    src={reviews[currentSlide].image}
                    alt={reviews[currentSlide].name}
                    className="h-12 w-12 rounded-full object-cover flex-shrink-0"
                  />

                  <div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      “{reviews[currentSlide].text}”
                    </p>

                    <div className="mt-4">
                      <p className="font-semibold text-[#D84A0E]">
                        {reviews[currentSlide].name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {reviews[currentSlide].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end  */}
      {/* faq start  */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Get answers to common questions about solar energy solutions.
            </p>
          </div>

          {/* FAQ List */}
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg bg-gray-50 overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      faqIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                {faqIndex === index && (
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* faq end  */}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
