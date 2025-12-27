import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { X } from "lucide-react";

export default function AutoQuote() {
  const [open, setOpen] = useState(false);

  // OPEN AFTER 5 SECONDS
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("our team will contact you soon!");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-xl animate-in fade-in zoom-in">
        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 transition"
        >
          <X size={22} />
        </button>

        {/* HEADER */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Get a <span className="text-[#D84A0E]">FREE</span> Solar Quote
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Share your details and our team will contact you shortly
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name *"
            required
            className="input input-bordered w-full bg-white text-gray-900 placeholder-gray-400 border-gray-300 focus:border-[#D84A0E] focus:outline-none"
          />

          <input
            type="tel"
            placeholder="Mobile Number *"
            required
            className="input input-bordered w-full bg-white text-gray-900 placeholder-gray-400 border-gray-300 focus:border-[#D84A0E] focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email Address *"
            required
            className="input input-bordered w-full bg-white text-gray-900 placeholder-gray-400 border-gray-300 focus:border-[#D84A0E] focus:outline-none"
          />

          <select
            required
            className="select select-bordered w-full bg-white text-gray-900 border-gray-300 focus:border-[#D84A0E] focus:outline-none"
          >
            <option value="">Select State *</option>
            <option>Telangana</option>
            <option>Andhra Pradesh</option>
            <option>Karnataka</option>
            <option>Maharashtra</option>
          </select>

          <button
            type="submit"
            className="btn w-full bg-[#D84A0E] hover:bg-[#c63f0b] text-white text-base font-semibold rounded-lg border-0"
          >
            Submit Details
          </button>
        </form>

        {/* FOOTER NOTE */}
        <p className="mt-4 text-xs text-center text-gray-400">
          We respect your privacy. No spam.
        </p>
      </div>
    </div>
  );
}
