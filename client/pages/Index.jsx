import { useState } from "react";
import { Link } from "react-router-dom";
import { useWallet } from "../hooks/use-wallet";
import "./Index.css";
import Faq from "./Faq";

function AboutUsSection() {
  const teamMembers = [
    {
      name: "Amisha Bhagat",
      role: "Frontend & UI/UX Developer",
      bio: "An expert in frontend development, passionate about building intuitive and seamless user experiences. Specializing in React, she ensures Vaultify's interface is both beautiful and functional.",
      image: "https://placehold.co/150x150/6F26FF/FFFFFF?text=Amisha"
    },
    {
      name: "Ankit Kumar",
      role: "Backend & ML Specialist",
      bio: "Responsible for developing the core backend infrastructure and integrating the machine learning models that provide intelligent document analysis and security.",
      image: "https://placehold.co/150x150/6F26FF/FFFFFF?text=Ankit"
    },
    {
      name: "Sumit Kumar Thakur",
      role: "Project Lead & Blockchain Specialist",
      bio: "Spearheading the overall project vision and handling the blockchain integration, including the smart contracts for document hashing and ownership verification.",
      image: "https://placehold.co/150x150/6F26FF/FFFFFF?text=Sumit"
    }
  ];

  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-white mb-4">About Us</h2>
        <p className="text-xl font-semibold text-[#676666] mb-20">
          The Story Behind Vaultify.
        </p>

        {/* The Vision */}
        <div className="mb-24">
          <h3 className="text-3xl font-semibold text-white mb-4">Our Vision</h3>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            In an age where data breaches and privacy concerns are rampant, we saw a need for a new kind of digital locker. Traditional centralized services, while convenient, hold your most sensitive information in a single, vulnerable place. Our vision for Vaultify is to empower you with a vault that is truly your own—a decentralized solution where your control is absolute, and your privacy is non-negotiable.
          </p>
        </div>

        {/* The Technology */}
        <div className="mb-24">
          <h3 className="text-3xl font-semibold text-white mb-4">The Technology That Powers Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-2">Blockchain</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We use an immutable public ledger to store a cryptographic hash of your document, not the document itself. This creates an unalterable proof of ownership and a tamper-proof record without compromising your data.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-2">Machine Learning</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our ML models add a layer of intelligence, helping to automatically categorize and tag your documents. We're also developing advanced models to detect and flag fraudulent activity, keeping your data extra secure.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-2">Frontend & Backend</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                A user-friendly React frontend provides a seamless experience, while a robust backend handles the secure encryption and storage of your files, bridging the gap between your browser and the blockchain.
              </p>
            </div>
          </div>
        </div>

        {/* The Team */}
        <div>
          <h3 className="text-3xl font-semibold text-white mb-12">Meet the Team</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-4 border-4 border-purple-500 object-cover"
                />
                <h4 className="text-xl font-semibold text-white">{member.name}</h4>
                <p className="text-purple-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm max-w-xs">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    account,
    isConnecting,
    error,
    isConnected,
    connectWallet,
    disconnectWallet,
    formatAddress
  } = useWallet();


  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="vaultify-bg-gradient min-h-screen relative">
      {/* Background Gradient Orbs */}
      <div className="vaultify-gradient-orb green w-[703px] h-[703px] absolute top-[3178px] left-[1177px]"></div>
      <div className="vaultify-gradient-orb purple w-[909px] h-[909px] absolute top-[4034px] left-[-459px]"></div>
      <div className="vaultify-gradient-orb dark w-[704px] h-[704px] absolute top-[3998px] left-[-283px]"></div>
      <div className="vaultify-gradient-orb green w-[703px] h-[703px] absolute top-[-273px] left-[-225px] opacity-50"></div>
      <div className="vaultify-gradient-orb purple w-[817px] h-[817px] absolute top-[355px] left-[991px] opacity-70"></div>
      <div className="vaultify-gradient-orb dark w-[613px] h-[613px] absolute top-[-309px] left-[156px]"></div>
      <div className="vaultify-gradient-orb dark w-[925px] h-[925px] absolute top-[752px] left-[1016px]"></div>
      <div className="vaultify-gradient-orb green w-[859px] h-[859px] absolute top-[2322px] left-[-279px] opacity-30"></div>
      <div className="vaultify-gradient-orb purple w-[817px] h-[817px] absolute top-[1840px] left-[1016px] opacity-30"></div>

      {/* Background Pattern */}
      <div className="background-pattern">
        <div className="pattern-container">
          <span className="pattern-text">HSHX1+&#125;]#+X&gt;SK+SP</span>
          <span className="pattern-text">NBFLGO#+X&gt;SK+SPOZ</span>
          <span className="pattern-text">E0SHG6WVGO#+X&gt;S&gt;S</span>
          <span className="pattern-text">NC\L25BFLGOFLGD&gt;K</span>
          <span className="pattern-text">AXJ&#123;AE0SHG6NBFLGO</span>
          <span className="pattern-text">C\L2NBFGO#+X&gt;S6N+</span>
          <span className="pattern-text">VGO#+X&gt;HG6NBGHZ9+</span>
          <span className="pattern-text">D&gt;KSO?AG6NBFLGO#+</span>
          <span className="pattern-text">PXJ&#123;AX0SHG6NH0LGO</span>
          <span className="pattern-text">4SUSO5N1JGHZ9+D&gt;K</span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="decorative-elements">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/f6bfd48579bbd0e5b1bcf9f177f9ba52a81b8cc2?width=1556"
          alt="Decorative"
          className="absolute top-[773px] left-[-282px] w-[778px] h-[928px] mix-blend-overlay opacity-70"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/30ea4c2f20d54d817cbdda34a28d734ef8f3a132?width=936"
          alt="Decorative"
          className="absolute top-[685px] left-[1092px] w-[468px] h-[680px] mix-blend-overlay opacity-70"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/fb68aa95f96947e0bcd230051ec8de9e4fcc225c?width=290"
          alt="Asset"
          className="absolute top-[217px] left-[-82px] w-[145px] h-[224px] opacity-30"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/5133c93630d490c4e479f937ad40051e15eb41d5?width=240"
          alt="Asset"
          className="absolute top-[594px] left-[291px] w-[120px] h-[64px] opacity-40 animate-float"
          style={{ transform: "rotate(27.851deg)" }}
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/85e2fa9e32b5827998d6c81c2218126c35805f68?width=128"
          alt="Asset"
          className="absolute top-[136px] left-[1273px] w-[64px] h-[64px] opacity-50 animate-float"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/37ac8b57c6fe0e89cd2aeb435f6a4b5eb9e0d8b7?width=415"
          alt="Asset"
          className="absolute top-[488px] left-[1288px] w-[208px] h-[234px] opacity-40"
          style={{ transform: "rotate(14.752deg)" }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="px-4 sm:px-8 py-6 relative z-20">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-white text-2xl sm:text-[32px] font-bold font-inter">
                Vaultify
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/features"
                className="text-white text-[18px] font-inter hover:text-vaultify-purple transition-colors"
              >
                Features
              </Link>
              <Link
                to="/what-we-offer"
                className="text-white text-[18px] font-inter hover:text-vaultify-purple transition-colors"
              >
                What We Offer
              </Link>
              <Link
                to="/faq"
                className="text-white text-[18px] font-inter hover:text-vaultify-purple transition-colors"
              >
                FAQ's
              </Link>
              <Link
                to="/about"
                className="text-white text-[18px] font-inter hover:text-vaultify-purple transition-colors"
              >
                About Us
              </Link>
            </nav>

            {/* Desktop Wallet Button */}
            <div className="hidden sm:block">
              {isConnected ? (
                <div className="flex items-center space-x-3">
                  <span className="text-white text-sm font-medium hidden lg:block">
                    {formatAddress(account)}
                  </span>
                  <button
                    onClick={disconnectWallet}
                    className="vaultify-btn-secondary text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-2"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <button
                  onClick={connectWallet}
                  disabled={isConnecting}
                  className="vaultify-btn-secondary text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-2 disabled:opacity-50"
                >
                  {isConnecting ? "Connecting..." : "Connect Wallet"}
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden text-white p-2"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M3 12h18M3 6h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="sm:hidden absolute top-full left-0 right-0 bg-vaultify-darker/95 backdrop-blur-md border-t border-white/10 z-50">
              <nav className="flex flex-col space-y-4 p-6">
                <Link
                  to="/features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-lg font-inter hover:text-vaultify-purple transition-colors"
                >
                  Features
                </Link>
                <Link
                  to="/what-we-offer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-lg font-inter hover:text-vaultify-purple transition-colors"
                >
                  What We Offer
                </Link>
                <Link
                  to="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-lg font-inter hover:text-vaultify-purple transition-colors"
                >
                  FAQ's
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-lg font-inter hover:text-vaultify-purple transition-colors"
                >
                  About Us
                </Link>

                {/* Mobile Wallet Button */}
                <div className="pt-4 border-t border-white/10">
                  {isConnected ? (
                    <div className="space-y-3">
                      <div className="text-white text-sm font-medium">
                        {formatAddress(account)}
                      </div>
                      <button
                        onClick={() => {
                          disconnectWallet();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full vaultify-btn-secondary text-base"
                      >
                        Disconnect
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        connectWallet();
                        setMobileMenuOpen(false);
                      }}
                      disabled={isConnecting}
                      className="w-full vaultify-btn-secondary text-base disabled:opacity-50"
                    >
                      {isConnecting ? "Connecting..." : "Connect Wallet"}
                    </button>
                  )}
                </div>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="text-center py-12 sm:py-20 px-4 sm:px-8 relative z-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-[55px] font-bold font-inter leading-tight mb-4">
              Your Digital Vault
            </h1>
            <h2 className="text-vaultify-text-gray text-2xl sm:text-3xl lg:text-[45px] font-bold font-inter leading-tight mb-8 sm:mb-12">
              Secure on the Blockchain
            </h2>
            <button
              onClick={connectWallet}
              disabled={isConnecting || isConnected}
              className="vaultify-btn-primary text-base sm:text-[22px] px-6 py-3 disabled:opacity-50 hover:disabled:transform-none"
            >
              {isConnecting ? "Connecting..." : isConnected ? "Wallet Connected" : "Connect Wallet"}
            </button>
            {isConnected && (
              <div className="mt-4 sm:mt-6 flex justify-center gap-3 sm:gap-4">
                <Link
                  to="/login"
                  className="text-white border border-white/30 text-base sm:text-[18px] font-bold font-inter px-6 sm:px-8 py-3 rounded-[18px] hover:border-vaultify-purple hover:text-vaultify-purple transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-purple-gradient-alt text-white text-base sm:text-[18px] font-bold font-inter px-6 sm:px-8 py-3 rounded-[18px] hover:transform hover:scale-105 transition-all duration-300"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {error && (
              <div className="mt-6 max-w-md mx-auto">
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-center">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 sm:py-20 px-4 sm:px-8 relative z-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Upload Card */}
              <div className="vaultify-feature-card">
                <div className="aspect-square relative bg-[#222121] rounded-t-[18px] flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/66cc3798c749a345c796e2f9f897bfd14a7cdf33?width=843"
                    alt="Upload Feature"
                    className="w-full h-full object-cover rounded-t-[18px]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-[27px] font-bold font-inter mb-4">
                    Upload
                  </h3>
                  <p className="text-vaultify-text-gray text-[23px] font-bold font-inter">
                    Send your document to Vaultify, directly from any device.
                  </p>
                </div>
              </div>

              {/* Encrypt Card */}
              <div className="vaultify-feature-card">
                <div className="aspect-square relative bg-[#222121] rounded-t-[18px] flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/22935458045d855095d5ab91bd84f350851b54d1?width=843"
                    alt="Encrypt Feature"
                    className="w-full h-full object-cover rounded-t-[18px]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-[27px] font-bold font-inter mb-4">
                    Encrypt
                  </h3>
                  <p className="text-vaultify-text-gray text-[23px] font-bold font-inter">
                    Vaultify encrypts your file using advanced cryptography.
                  </p>
                </div>
              </div>

              {/* Share Card */}
              <div className="vaultify-feature-card">
                <div className="aspect-square relative bg-[#222121] rounded-t-[18px] flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/e05943931b119d801ca814712b0352bb71b5d201?width=843"
                    alt="Share Feature"
                    className="w-full h-full object-cover rounded-t-[18px]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-[27px] font-bold font-inter mb-4">
                    Share
                  </h3>
                  <p className="text-vaultify-text-gray text-[23px] font-bold font-inter">
                    Generate a shareable, secure link for easy access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Icons Section */}
        <section className="py-12 sm:py-20 px-4 sm:px-8 relative z-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 justify-items-center">
              <div className="flex flex-col items-center text-center">
                <div className="w-[73px] h-[73px] mb-7">
                  <svg
                    width="73"
                    height="74"
                    viewBox="0 0 73 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.19336 36.906C9.19336 34.4942 10.1514 32.1811 11.8568 30.4757C13.5622 28.7703 15.8753 27.8123 18.2871 27.8123H54.6619C57.0737 27.8123 59.3867 28.7703 61.0921 30.4757C62.7976 32.1811 63.7556 34.4942 63.7556 36.906V58.1246C63.7556 60.5364 62.7976 62.8495 61.0921 64.5549C59.3867 66.2603 57.0737 67.2183 54.6619 67.2183H18.2871C15.8753 67.2183 13.5622 66.2603 11.8568 64.5549C10.1514 62.8495 9.19336 60.5364 9.19336 58.1246V36.906ZM39.5057 42.9684C39.5057 42.1645 39.1864 41.3935 38.6179 40.825C38.0494 40.2566 37.2784 39.9372 36.4745 39.9372C35.6706 39.9372 34.8996 40.2566 34.3311 40.825C33.7626 41.3935 33.4433 42.1645 33.4433 42.9684V52.0622C33.4433 52.8661 33.7626 53.6371 34.3311 54.2056C34.8996 54.774 35.6706 55.0934 36.4745 55.0934C37.2784 55.0934 38.0494 54.774 38.6179 54.2056C39.1864 53.6371 39.5057 52.8661 39.5057 52.0622V42.9684Z"
                      fill="white"
                    />
                    <path
                      d="M24.3496 30.8435V21.7498C24.3496 18.5341 25.6271 15.4501 27.9009 13.1762C30.1748 10.9023 33.2588 9.62488 36.4746 9.62488C39.6903 9.62488 42.7743 10.9023 45.0482 13.1762C47.3221 15.4501 48.5995 18.5341 48.5995 21.7498V30.8435"
                      stroke="white"
                      strokeWidth="4.54686"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-[27px] font-bold font-inter">
                  Tamper-proof
                </h3>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-[95px] h-[95px] mb-4">
                  <svg
                    width="97"
                    height="97"
                    viewBox="0 0 97 97"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M62.2229 23.4068C61.6742 22.5301 60.8658 21.8463 59.9103 21.4505C58.9547 21.0548 57.8996 20.9668 56.8917 21.1988L49.7383 22.8419C49.0052 23.0104 48.2435 23.0104 47.5104 22.8419L40.357 21.1988C39.3491 20.9668 38.294 21.0548 37.3384 21.4505C36.3829 21.8463 35.5745 22.5301 35.0258 23.4068L31.1269 29.6292C30.7291 30.2658 30.192 30.8029 29.5554 31.2047L23.333 35.1036C22.4578 35.6518 21.775 36.4589 21.3793 37.4128C20.9837 38.3667 20.8948 39.4201 21.125 40.4269L22.7681 47.5882C22.936 48.32 22.936 49.0803 22.7681 49.8121L21.125 56.9695C20.8939 57.9768 20.9823 59.0311 21.378 59.9858C21.7738 60.9405 22.4571 61.7482 23.333 62.2967L29.5554 66.1956C30.192 66.5934 30.7291 67.1305 31.1309 67.7671L35.0298 73.9895C36.1518 75.7838 38.2922 76.671 40.357 76.1975L47.5104 74.5544C48.2435 74.3859 49.0052 74.3859 49.7383 74.5544L56.8957 76.1975C57.903 76.4287 58.9573 76.3402 59.912 75.9445C60.8667 75.5488 61.6744 74.8654 62.2229 73.9895L66.1218 67.7671C66.5196 67.1305 67.0567 66.5934 67.6933 66.1956L73.9196 62.2967C74.7956 61.7474 75.4787 60.9388 75.8737 59.9833C76.2687 59.0278 76.3561 57.973 76.1237 56.9655L74.4846 49.8121C74.3161 49.079 74.3161 48.3173 74.4846 47.5842L76.1277 40.4269C76.3592 39.42 76.2714 38.366 75.8764 37.4113C75.4814 36.4566 74.7989 35.6486 73.9236 35.0996L67.6973 31.2007C67.0616 30.8021 66.5243 30.2649 66.1258 29.6292L62.2229 23.4068ZM60.2217 39.8261C60.4678 39.3736 60.5287 38.8433 60.3918 38.3468C60.2548 37.8503 59.9306 37.4262 59.4873 37.1639C59.0441 36.9015 58.5163 36.8213 58.0152 36.9402C57.514 37.059 57.0784 37.3676 56.8002 37.801L46.3964 55.4099L40.1143 49.3944C39.928 49.203 39.705 49.0512 39.4587 48.9479C39.2123 48.8445 38.9477 48.7919 38.6806 48.7931C38.4135 48.7942 38.1493 48.8492 37.9039 48.9546C37.6585 49.0601 37.4368 49.2139 37.2521 49.4069C37.0674 49.5998 36.9235 49.828 36.8289 50.0779C36.7343 50.3277 36.691 50.594 36.7016 50.8609C36.7121 51.1278 36.7763 51.3898 36.8903 51.6314C37.0044 51.8729 37.1659 52.0891 37.3652 52.2669L45.4575 60.021C45.6741 60.2281 45.9346 60.3835 46.2197 60.4758C46.5048 60.5681 46.8071 60.5947 47.1039 60.5538C47.4008 60.5129 47.6846 60.4054 47.9341 60.2394C48.1836 60.0734 48.3923 59.8532 48.5448 59.5953L60.2217 39.8261Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-[27px] font-bold font-inter">
                  On-chain verify
                </h3>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-[73px] h-[73px] mb-7">
                  <svg
                    width="74"
                    height="74"
                    viewBox="0 0 74 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M61.3852 18.7183H33.9424L29.2743 12.2921C28.898 11.7772 28.4053 11.3586 27.8363 11.0706C27.2673 10.7826 26.6383 10.6334 26.0006 10.635H12.8854C11.8135 10.635 10.7855 11.0608 10.0275 11.8188C9.26957 12.5768 8.84375 13.6048 8.84375 14.6767V59.1348C8.84375 60.2067 9.26957 61.2347 10.0275 61.9927C10.7855 62.7507 11.8135 63.1765 12.8854 63.1765H61.3852C62.4571 63.1765 63.4851 62.7507 64.2431 61.9927C65.001 61.2347 65.4268 60.2067 65.4268 59.1348V22.76C65.4268 21.6881 65.001 20.6601 64.2431 19.9021C63.4851 19.1441 62.4571 18.7183 61.3852 18.7183ZM12.8854 14.6767H26.0006L31.4972 22.76H12.8854V14.6767ZM45.0974 54.3657C43.9806 54.3765 42.9051 53.9446 42.106 53.1644C41.307 52.3843 40.8494 51.3194 40.8334 50.2028V49.5965L29.3753 44.2211L29.2137 44.3828C28.6091 44.9517 27.8496 45.3289 27.0309 45.4668C26.2123 45.6046 25.3711 45.4969 24.6136 45.1573C23.8561 44.8177 23.2161 44.2614 22.7743 43.5585C22.3325 42.8557 22.1088 42.0377 22.1313 41.2078C22.1538 40.378 22.4215 39.5733 22.9007 38.8954C23.38 38.2175 24.0492 37.6967 24.824 37.3987C25.5988 37.1006 26.4446 37.0387 27.2546 37.2207C28.0645 37.4027 28.8025 37.8205 29.3753 38.4214L40.7728 33.046V32.5812C40.7817 31.6068 41.1288 30.6658 41.7548 29.919C42.3808 29.1723 43.2468 28.6663 44.2047 28.4875C45.1626 28.3087 46.1529 28.4683 47.0061 28.9389C47.8593 29.4096 48.5225 30.162 48.8823 31.0676C49.242 31.9732 49.276 32.9756 48.9783 33.9035C48.6806 34.8313 48.0699 35.6269 47.2504 36.1542C46.431 36.6815 45.4538 36.9077 44.486 36.7941C43.5182 36.6805 42.62 36.2343 41.9449 35.5316L30.5676 40.9474V41.8972L42.1267 47.2726C42.614 46.7896 43.2125 46.4338 43.8696 46.2366C44.5268 46.0395 45.2223 46.0069 45.8949 46.142C46.5676 46.277 47.1967 46.5753 47.7269 47.0108C48.257 47.4463 48.672 48.0054 48.9351 48.639C49.1982 49.2726 49.3014 49.9612 49.2357 50.6442C49.1699 51.3271 48.9372 51.9833 48.558 52.5551C48.1789 53.1269 47.6649 53.5966 47.0614 53.9229C46.4579 54.2492 45.7834 54.4221 45.0974 54.4263V54.3657Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-[27px] font-bold font-inter">
                  Encrypted share
                </h3>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-[73px] h-[73px] mb-7">
                  <svg
                    width="74"
                    height="74"
                    viewBox="0 0 74 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M61.2351 21.7497V15.6872C61.2351 12.3438 58.5161 9.62476 55.1727 9.62476H15.7666C10.7529 9.62476 6.67285 13.7048 6.67285 18.7185V55.0933C6.67285 61.7651 12.1109 64.187 15.7666 64.187H61.2351C64.5786 64.187 67.2976 61.468 67.2976 58.1246V27.8122C67.2976 24.4687 64.5786 21.7497 61.2351 21.7497ZM55.1727 49.0308H49.1102V36.9059H55.1727V49.0308ZM15.7666 21.7497C14.9861 21.7148 14.2491 21.3802 13.7092 20.8155C13.1692 20.2509 12.8679 19.4997 12.8679 18.7185C12.8679 17.9372 13.1692 17.186 13.7092 16.6214C14.2491 16.0568 14.9861 15.7221 15.7666 15.6872H55.1727V21.7497H15.7666Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-[27px] font-bold font-inter">
                  Wallet login
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <Faq />

        {/* About Us section */}
        <AboutUsSection />


        {/* This is the VAULTIFY Watermark section */}
        <div className="relative pointer-events-none overflow-hidden">
          <div
            className="text-center text-[280px] lg:text-[344px] font-black transform translate-y-[30%] opacity-50"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.76) -352.73%, rgba(111, 38, 255, 0.76) 101.02%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "Impact, -apple-system, Roboto, Helvetica, sans-serif",
              lineHeight: "1",
            }}
          >
            VAULTIFY
          </div>
        </div>

        {/* This is the footer section */}
        <footer className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-4">
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-8 mb-6">
              <Link
                to="/about"
                className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                to="/concept"
                className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              >
                Concept
              </Link>
              <Link
                to="/rent"
                className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              >
                Rent
              </Link>
              <Link
                to="/mission"
                className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              >
                Mission
              </Link>
              <Link
                to="/resources"
                className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              >
                Resources
              </Link>
              <Link
                to="/contact"
                className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Copyright and Legal */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-400 mb-6">
              <span>© 2025 Houzie Proptech OPC PVT LTD</span>
              <Link to="/legal" className="hover:text-white transition-colors">
                Legal Notices
              </Link>
              <Link to="/privacy" className="hover:text-white transition-colors">
                Confidentiality
              </Link>
              <Link to="/credits" className="hover:text-white transition-colors">
                Credits
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              {[
                { icon: "facebook", color: "#7027FE" },
                { icon: "twitter", color: "#7027FE" },
                { icon: "instagram", color: "#7027FE" },
                { icon: "linkedin", color: "#7027FE" },
                { icon: "youtube", color: "#7027FE" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-4 h-4 rounded-full hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: social.color }}
                />
              ))}
            </div>
          </div>
        </footer>

        
      </div>
    </div>
  );
}
