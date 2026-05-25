// src/components/BlogSection.tsx
import { User, Calendar, ArrowRight } from 'lucide-react';
import MyButton from './MyButton';

const BlogSection = () => {
  // SAP-focused blog data
  const blogPosts = [
    {
      id: 1,
      title: "Maximizing ROI with the Latest SAP B1 Features",
      author: "Admin",
      date: "October 12, 2026",
      image: "/blog-1.jpg"
    },
    {
      id: 2,
      title: "Bridging the Gap: Integrating SAP B1 with B2B Portals",
      author: "Admin",
      date: "September 28, 2026",
      image: "/blog-2.jpg"
    },
    {
      id: 3,
      title: "Why an Annual Maintenance Contract is Crucial for ERP",
      author: "Admin",
      date: "September 15, 2026",
      image: "/blog-3.jpg"
    }
  ];

  return (
    <section className="bg-[#F8F9FB] py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1600px]">
        
        {/* HEADER AREA */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Pill Badge */}
          <div className="mb-6 px-6 py-2.5 rounded-full border border-gray-200 bg-white inline-flex items-center gap-3 shadow-sm">
            <span className="text-company-teal font-extrabold text-xl leading-none">+</span> 
            <span className="text-sm md:text-base font-bold tracking-[0.2em] text-company-deep uppercase">Our Blog</span> 
            <span className="text-company-teal font-extrabold text-xl leading-none">+</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-company-deep leading-tight tracking-tight">
            Latest News From Us
          </h2>
        </div>

        {/* BLOG CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              // Group class allows us to hover the card and change elements inside it (like zooming the image)
              className="bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-company-teal/20 flex flex-col"
            >
              
              {/* Image Container - Fixed height with zoom effect on hover */}
              <div className="w-full h-[280px] md:h-[320px] overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
              </div>

              {/* Content Container */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                
                {/* Meta Data (Author & Date) */}
                <div className="flex items-center gap-6 mb-5 text-gray-500 font-medium text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 md:w-5 md:h-5 text-company-teal" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-company-teal" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Blog Title */}
                {/* The title turns your primary Teal color when the card is hovered */}
                <h3 className="text-2xl md:text-[28px] font-extrabold text-company-deep leading-snug transition-colors duration-300">
                  {post.title}
                </h3>

              </div>
              
            </div>
          ))}
        </div>

        {/* FOOTER BUTTON */}
        <div className="flex justify-center">
        <MyButton variant="about">
  Disccover More
</MyButton> 
        </div>

      </div>
    </section>
  );
};

export default BlogSection;