// import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] to-[#0f0f2d] text-white">
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">
            SMARTER WORKFORCE SOLUTIONS
            <br />
            ACROSS INDUSTRIES
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Innovative workforce management and technology solutions designed to
            optimize your business operations and drive growth.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-6 py-2">
            LEARN MORE
          </button>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ONE SOLUTIONS */}
          <div className="bg-gradient-to-br from-[#131342] to-[#1a1a4a] rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500 opacity-20 blur-2xl rounded-full transform translate-x-1/4 translate-y-1/4 group-hover:opacity-30 transition-all duration-500"></div>
            <h3 className="text-sm text-blue-400 mb-2">ONE SOLUTIONS</h3>
            <h2 className="text-xl md:text-2xl font-bold mb-4">HR SERVICES</h2>
            <p className="text-gray-400 mb-6 max-w-md">
              End-to-end HR solutions including recruitment, onboarding,
              training, and workforce management to help your business thrive.
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              {/* READ MORE <ArrowRight className="ml-2 h-4 w-4" /> */}
            </Link>
          </div>

          {/* ONE GAMES */}
          <div className="bg-gradient-to-br from-[#131342] to-[#1a1a4a] rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-500 opacity-20 blur-2xl rounded-full transform translate-x-1/4 translate-y-1/4 group-hover:opacity-30 transition-all duration-500"></div>
            <h3 className="text-sm text-teal-400 mb-2">ONE GAMES</h3>
            <h2 className="text-xl md:text-2xl font-bold mb-4">NEW MOONS</h2>
            <div className="relative h-32 mb-4 bg-black/30 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/70">Game Preview</span>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex items-center text-teal-400 hover:text-teal-300"
            >
              {/* PLAY NOW <ArrowRight className="ml-2 h-4 w-4" /> */}
            </Link>
          </div>

          {/* ONE STORE */}
          <div className="bg-gradient-to-br from-[#131342] to-[#1a1a4a] rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 opacity-20 blur-2xl rounded-full transform translate-x-1/4 translate-y-1/4 group-hover:opacity-30 transition-all duration-500"></div>
            <h3 className="text-sm text-purple-400 mb-2">ONE STORE</h3>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              TOP COLLECTIONS
            </h2>
            <div className="flex space-x-2 mb-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-xs text-white/70">Item</span>
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-xs text-white/70">Item</span>
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-xs text-white/70">Item</span>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex items-center text-purple-400 hover:text-purple-300"
            >
              {/* SHOP NOW <ArrowRight className="ml-2 h-4 w-4" /> */}
            </Link>
          </div>

          {/* ONE AI */}
          <div className="bg-gradient-to-br from-[#131342] to-[#1a1a4a] rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500 opacity-20 blur-2xl rounded-full transform translate-x-1/4 translate-y-1/4 group-hover:opacity-30 transition-all duration-500"></div>
            <h3 className="text-sm text-blue-400 mb-2">ONE AI</h3>
            <h2 className="text-xl md:text-2xl font-bold mb-4">FUTURE READY</h2>
            <p className="text-gray-400 mb-6 max-w-md">
              AI-powered solutions to automate workflows, analyze data, and
              provide actionable insights for smarter business decisions.
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              {/* READ MORE <ArrowRight className="ml-2 h-4 w-4" /> */}
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              {/* <CheckCircle className="text-blue-500 h-8 w-8 mr-2" /> */}
              <span className="text-4xl font-bold">85%</span>
            </div>
            <p className="text-gray-400 text-sm">
              of our clients experience improved workforce productivity within
              the first 3 months
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              {/* <CheckCircle className="text-purple-500 h-8 w-8 mr-2" /> */}
              <span className="text-4xl font-bold">40%</span>
            </div>
            <p className="text-gray-400 text-sm">
              average reduction in recruitment costs with our AI-powered talent
              acquisition system
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              {/* <CheckCircle className="text-teal-500 h-8 w-8 mr-2" /> */}
              <span className="text-4xl font-bold">30%</span>
            </div>
            <p className="text-gray-400 text-sm">
              increase in employee retention rates through our engagement and
              development programs
            </p>
          </div>
          <div className="md:col-span-3 text-center mt-4">
            <button className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900/20 rounded-md px-6 py-2">
              VIEW RESULTS
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#131342] to-[#0a0a1a] opacity-70"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">
              PARTNER WITH US TODAY FOR SMARTER
              <br />
              WORKFORCE SOLUTIONS—ON-SITE OR REMOTE.
            </h2>
            <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-6 py-2 mt-6">
              CONTACT US
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
