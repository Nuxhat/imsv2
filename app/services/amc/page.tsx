import Link from 'next/link';
import Header from '@/app/src/components/Header';
import Footer from '@/app/src/components/Footer';
import ScrollReveal from '@/app/src/components/ScrollReveal';
import PortfolioSection from '@/app/src/components/PortfolioSection';
import BlogSection from '@/app/src/components/BlogSection';
import ContactSection from '@/app/src/components/ContactSection';

export default function AMCPage() {
  return (
    <main className="min-h-screen bg-white">

      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-28 overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/about-hero-bg.jpg')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-company-deep/80" />

        {/* Content */}
        <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center">

          {/* Pill */}
          <div className="mb-6 px-6 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm inline-flex items-center gap-3">
            <span className="text-company-teal font-bold text-lg">+</span>
            <span className="text-[16px] md:text-[18px] font-bold tracking-[0.2em] text-white uppercase">
              ERP Support
            </span>
            <span className="text-company-teal font-bold text-lg">+</span>
          </div>

          {/* Title */}
          <h1 className="font-poppins text-5xl md:text-7xl lg:text-[90px] font-bold text-white mb-6 leading-tight">
            Annual Maintenance (AMC)
          </h1>

          {/* Description */}
          <p className="text-base md:text-xl text-gray-300 mb-10 max-w-[750px] leading-relaxed">
            Ensure uninterrupted ERperformance with continuous monitoring, updates, troubleshooting, and expert technical support tailored to your business.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap justify-center">

            <Link
              href="/contact"
              className="px-7 py-3 rounded-full bg-white text-company-deep font-semibold hover:scale-105 transition"
            >
              Get Support
            </Link>

            <Link
              href="/services"
              className="px-7 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              Back to Services
            </Link>

          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-[52px] font-semibold text-[#1C2539] mb-6">
              What We Deliver
            </h2>

            <p className="text-[18px] leading-[30px] text-gray-600">
              Our AMC service ensures your   ERP system runs smoothly with proactive monitoring, fast issue resolution, and continuous improvements.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* LEFT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {[
                {
                  title: "System Monitoring",
                  desc: "24/7 monitoring of ERP performance and system health.",
                },
                {
                  title: "Bug Fixing",
                  desc: "Quick resolution of system issues and operational errors.",
                },
                {
                  title: "Performance Tuning",
                  desc: "Optimize   ERP speed, queries, and backend performance.",
                },
                {
                  title: "Version Upgrades",
                  desc: "Safe upgrades with zero disruption to business operations.",
                },
                {
                  title: "Technical Support",
                  desc: "Dedicated experts available for ongoing assistance.",
                },
                {
                  title: "System Stability",
                  desc: "Ensure consistent uptime and reliable system performance.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 md:p-10 rounded-2xl border border-gray-200 hover:border-company-teal hover:shadow-xl transition-all duration-300 bg-white group"
                >
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-xl bg-company-deep/10 flex items-center justify-center mb-5 group-hover:bg-company-deep transition">
                    <span className="text-company-teal font-bold text-2xl">+</span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#1C2539] mb-3">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-base md:text-lg text-gray-600 leading-[1.7]">
                    {item.desc}
                  </p>
                </div>
              ))}

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              <div
                className="rounded-2xl h-[380px] bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage: "url('/sap-work-3.jpg')",
                }}
              />

              {/* FLOAT CARD */}
              <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl p-5 w-[220px] border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">System Uptime</p>
                <h3 className="text-2xl font-bold text-company-deep">99.9%</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Reliable   ERP support & maintenance.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
 <ScrollReveal>
          <PortfolioSection/>
      </ScrollReveal>
                 <ScrollReveal>
        <BlogSection /> 
      </ScrollReveal>

      <ScrollReveal>
        <ContactSection /> 
      </ScrollReveal> 
      <Footer />

    </main>
  );
}