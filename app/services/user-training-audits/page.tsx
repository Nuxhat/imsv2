import Link from 'next/link';
import Header from '@/app/src/components/Header';
import Footer from '@/app/src/components/Footer';
import ScrollReveal from '@/app/src/components/ScrollReveal';
import PortfolioSection from '@/app/src/components/PortfolioSection';
import BlogSection from '@/app/src/components/BlogSection';
import ContactSection from '@/app/src/components/ContactSection';

export default function UserTrainingAuditsPage() {
  return (
    <main className="min-h-screen bg-white">

      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-28 overflow-hidden">

        {/* Background */}
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
                ERP Training Services
            </span>
            <span className="text-company-teal font-bold text-lg">+</span>
          </div>

          {/* Title */}
          <h1 className="font-poppins text-5xl md:text-7xl lg:text-[90px] font-bold text-white mb-6 leading-tight">
            User Training & Audits
          </h1>

          {/* Description */}
          <p className="text-base md:text-xl text-gray-300 mb-10 max-w-[750px] leading-relaxed">
            Empower your workforce with structured   ERP training programs and ensure system integrity through continuous audits and performance evaluations.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap justify-center">

            <Link
              href="/contact"
              className="px-7 py-3 rounded-full bg-white text-company-deep font-semibold hover:scale-105 transition"
            >
              Free Consultation
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
              We ensure your team is fully trained on   ERP systems while maintaining compliance, security, and operational efficiency through structured audits.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* LEFT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {[
                {
                  title: "  ERP Training Sessions",
                  desc: "Hands-on training for end-users, admins, and managers."
                },
                {
                  title: "User Adoption",
                  desc: "Ensure smooth transition and high system adoption rates."
                },
                {
                  title: "System Audits",
                  desc: "Regular audits to ensure   ERP best practices are followed."
                },
                {
                  title: "Process Optimization",
                  desc: "Improve workflows for better efficiency and accuracy."
                },
                {
                  title: "Security Checks",
                  desc: "Ensure user roles, permissions, and compliance are correct."
                },
                {
                  title: "Performance Review",
                  desc: "Analyze system usage and improve productivity."
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl border border-gray-200 hover:border-company-teal hover:shadow-xl transition-all duration-300 group"
                >

                  {/* ICON */}
                  <div className="w-14 h-14 rounded-xl bg-company-deep/10 flex items-center justify-center mb-5 group-hover:bg-company-deep transition">
                    <span className="text-company-teal font-bold text-2xl">+</span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-semibold text-[#1C2539] mb-3">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-base text-gray-600 leading-[1.7]">
                    {item.desc}
                  </p>

                </div>
              ))}
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              <div
                className="rounded-2xl h-[380px] bg-cover bg-center shadow-xl"
                style={{ backgroundImage: "url('/sap-work-3.jpg')" }}
              />

              {/* FLOAT CARD */}
              <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl p-5 w-[220px] border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Training Efficiency</p>
                <h3 className="text-2xl font-bold text-company-deep">96%</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Teams trained successfully on   ERP systems.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
 <ScrollReveal>
          <PortfolioSection />
      </ScrollReveal>
                 {/* <ScrollReveal>
        <BlogSection /> 
      </ScrollReveal> */}

      <ScrollReveal>
        <ContactSection /> 
      </ScrollReveal> 
      <Footer />

    </main>
  );
}