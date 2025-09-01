import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Faq.css";

<<<<<<< HEAD
export default function Faq({ showBack = false }) {
=======
export default function Faq() {
>>>>>>> bc7e5d2d9a1a23fdd466dbe484548ee368d68cf0
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Are my documents stored on the blockchain?",
      answer:
        "No. We only store the cryptographic hash of your document on-chain. The actual file remains encrypted and can be deleted at your discretion.",
    },
    {
      question: "Do I need a crypto wallet to use Vaultify?",
      answer:
        "Yes, you need a crypto wallet to authenticate and interact with the blockchain features of Vaultify.",
    },
    {
      question: "What if I lose my encryption key?",
      answer:
        "If you lose your encryption key, the data cannot be recovered. We recommend storing your keys securely and having backup procedures in place.",
    },
    {
      question: "Can I revoke a document I shared?",
      answer:
        "Yes, you can revoke access to shared documents at any time through your Vaultify dashboard.",
    },
    {
      question: "Can I prove ownership of a document later?",
      answer:
        "Yes, the blockchain record provides immutable proof of when you uploaded and owned the document.",
    },
  ];

  return (
<<<<<<< HEAD
    <section id="faq" className="py-12 sm:py-16 px-4 sm:px-8 relative z-20">
      {/* optional back button */}
      {showBack && (
        <div className="absolute top-4 left-4 z-30">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="animated-back-btn group flex items-center gap-2"
            aria-label="Go back"
          >
            <span className="chevron-icon inline-flex h-8 w-8 items-center justify-center rounded-full">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="label">Back</span>
          </button>
        </div>
      )}

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-[38px] font-bold font-inter mb-2">
            FAQs
          </h2>
          <p className="text-vaultify-text-gray text-lg sm:text-xl font-inter">
            Got questions? We've got you covered.
          </p>
        </div>

        {/* background illustration */}
        <div className="vaultify-faq-section relative p-6 sm:p-8 rounded-xl">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/81f575f7891b27034c2e6099f62d0b380bb54f65?width=1103"
            alt="FAQ Background"
            className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-xl pointer-events-none"
          />

          <div className="relative z-10 space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="vaultify-faq-item border-b border-gray-700 pb-4"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-panel-${index}`}
                >
                  <h3 className="text-white text-lg sm:text-xl font-medium font-inter pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                {openFaq === index && (
                  <div id={`faq-panel-${index}`} className="mt-3">
                    <p className="text-[#d1d5db] text-[15px] font-inter leading-relaxed">
                      {faq.answer}
                    </p>
=======
    <div className="faq-container vaultify-bg-gradient min-h-screen relative">
      {/* Background Gradient Orbs */}
      <div className="vaultify-gradient-orb green w-[703px] h-[703px] absolute top-[-273px] left-[-225px] opacity-50" />
      <div className="vaultify-gradient-orb purple w-[817px] h-[817px] absolute top-[355px] left-[991px] opacity-70" />
      <div className="vaultify-gradient-orb dark w-[613px] h-[613px] absolute top-[-309px] left-[156px]" />
      <div className="vaultify-gradient-orb dark w-[925px] h-[925px] absolute top-[752px] left-[1016px]" />

      {/* Animated Back Button */}
      <div className="absolute top-4 left-4 z-30">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="animated-back-btn group flex items-center gap-2"
          aria-label="Go back"
        >
          <span className="chevron-icon inline-flex h-8 w-8 items-center justify-center rounded-full">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="label">Back</span>
        </button>
      </div>

      {/* Decorative Layer Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/1766c9cd4c8b0cb79006a344334927db4930ff14?width=2958"
          alt="Background"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      {/* FAQ List */}
      <div className="relative z-20 py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-[41px] font-bold font-inter mb-4">FAQs</h2>
            <p className="text-vaultify-text-gray text-xl sm:text-2xl lg:text-[41px] font-bold font-inter">Got questions? We've got you covered.</p>
          </div>
          <div className="vaultify-faq-section relative">
            {faqs.map((faq, index) => (
              <div key={index} className="vaultify-faq-item">
                <button onClick={() => toggleFaq(index)} className="flex justify-between items-center w-full text-left">
                  <h3 className="text-white text-[23px] font-medium font-inter pr-4">{faq.question}</h3>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-45" : ""}`}
                  >
                    <path d="M15.9348 7.93721H10.8617V2.86416C10.8617 2.24166 10.3569 1.73682 9.73438 1.73682H8.60703C7.98453 1.73682 7.47969 2.24166 7.47969 2.86416V7.93721H2.40664C1.78414 7.93721 1.2793 8.44205 1.2793 9.06455V10.1919C1.2793 10.8144 1.78414 11.3192 2.40664 11.3192H7.47969V16.3923C7.47969 17.0148 7.98453 17.5196 8.60703 17.5196H9.73438C10.3569 17.5196 10.8617 17.0148 10.8617 16.3923V11.3192H15.9348C16.5573 11.3192 17.0621 10.8144 17.0621 10.1919V9.06455C17.0621 8.44205 16.5573 7.93721 15.9348 7.93721Z" fill="#F9F9F9" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="mt-4">
                    <p className="text-[#4B5563] text-[12px] font-inter leading-relaxed">{faq.answer}</p>
>>>>>>> bc7e5d2d9a1a23fdd466dbe484548ee368d68cf0
                  </div>
                )}
              </div>
            ))}
<<<<<<< HEAD
          </div>
        </div>
      </div>
    </section>
=======
            <div className="absolute right-0 top-16 w-[552px] h-[500px] hidden lg:block">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/81f575f7891b27034c2e6099f62d0b380bb54f65?width=1103"
                alt="FAQ Illustration"
                className="w-full h-full object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Brand Text */}
      <div className="absolute bottom-0 left-0 right-0 text-center py-8 sm:py-16 z-10">
        <h1 className="text-[#481B9F] text-opacity-75 font-impact text-6xl sm:text-8xl lg:text-[200px] xl:text-[352px] font-normal leading-none pointer-events-none select-none">
          VAULTIFY
        </h1>
      </div>
    </div>
>>>>>>> bc7e5d2d9a1a23fdd466dbe484548ee368d68cf0
  );
}
