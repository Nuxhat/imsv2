// src/components/TeamSection.tsx
import ScrollReveal from './ScrollReveal';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ronald Richards",
      role: "Finance Advisor",
      image: "/team-1.jpg",
    },
    {
      id: 2,
      name: "Eleanor Pena",
      role: "Solution Architect",
      image: "/team-2.jpg",
    },
    {
      id: 3,
      name: "Albert Flores",
      role: "HANA Developer",
      image: "/team-3.jpg",
    },
    {
      id: 4,
      name: "Kathryn Murphy",
      role: "Project Manager",
      image: "/team-4.jpg",
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        {/* HEADER AREA */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <ScrollReveal delay={0}>
            {/* Pill Badge */}
            <div className="mb-6 px-6 py-2 rounded-full border border-gray-200 bg-white inline-flex items-center gap-2 shadow-sm">
              <span className="text-company-teal font-extrabold text-lg leading-none">+</span> 
              <span className="text-sm font-bold tracking-widest text-company-deep uppercase">Our Team</span> 
              <span className="text-company-teal font-extrabold text-lg leading-none">+</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-company-deep leading-tight tracking-tight">
              Meet the experts behind <br className="hidden md:block" />
              your success
            </h2>
          </ScrollReveal>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.id} delay={200 + (index * 150)}>
              <div className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden group cursor-pointer shadow-lg">
                
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${member.image}')` }}
                ></div>

                {/* Gradient Overlay: Now visible by default so the white text is always readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-company-deep/90 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* THE FIX: Bulletproof SVG Social Icons (No lucide-react imports needed!) */}
                <div className="absolute top-6 left-6 flex flex-col gap-3 opacity-0 -translate-x-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 z-20">
                  
                  {/* LinkedIn */}
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-company-deep flex items-center justify-center hover:bg-company-teal hover:text-white transition-colors duration-300 shadow-md">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  
                  {/* Twitter / X */}
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-company-deep flex items-center justify-center hover:bg-company-teal hover:text-white transition-colors duration-300 shadow-md">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  
                  {/* Instagram */}
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-company-deep flex items-center justify-center hover:bg-company-teal hover:text-white transition-colors duration-300 shadow-md">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  
                </div>

                {/* THE FIX: Text Info is now VISIBLE BY DEFAULT */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h4>
                  <p className="text-gray-300 font-medium">
                    {member.role}
                  </p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* STATIC PAGINATION DOTS */}
        <ScrollReveal delay={800}>
          <div className="flex justify-center items-center gap-2 mt-12">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
            <div className="w-8 h-2.5 rounded-full bg-company-deep"></div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default TeamSection;