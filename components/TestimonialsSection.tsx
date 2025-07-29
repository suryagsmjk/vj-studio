import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: 'Fawzi Sayed',
    role: 'UI UX Designer',
    company: 'Tech Solutions Inc.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    content: 'Working with Vijay has been an absolute pleasure. His attention to detail and creative vision transformed our brand identity completely. The designs exceeded our expectations and perfectly captured our company values.',
    project: 'Brand Identity Redesign'
  },
  {
    id: 2,
    name: 'Chandru',
    role: 'Marketing Director',
    company: 'Creative Industries',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    content: 'Vijay delivered exceptional wedding album designs that perfectly captured the emotions and beauty of our special day. His artistic eye and professional approach made the entire process seamless and enjoyable.',
    project: 'Wedding Photography'
  },
  {
    id: 3,
    name: 'Madhesh',
    role: 'Creative Director',
    company: 'Digital Agency',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    content: 'The photo retouching work was outstanding! Vijay has incredible technical skills and artistic vision. He transformed our product photos into magazine-quality images that significantly boosted our sales.',
    project: 'Photo Retouching'
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'Business Owner',
    company: 'Fashion Boutique',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b196?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    content: 'Amazing work on our logo design! Vijay understood our vision perfectly and created a timeless design that represents our brand beautifully. Highly recommended for any creative project.',
    project: 'Logo Design'
  }
];

function TestimonialCard({ testimonial, isActive }: { testimonial: typeof testimonials[0], isActive: boolean }) {
  return (
    <motion.div
      className={`relative w-full max-w-4xl mx-auto transition-all duration-500 ${
        isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
      }`}
    >
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#fd853a]/10 to-orange-200/5 rounded-full -translate-y-16 translate-x-16" />
        
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 text-[#fd853a]/20">
          <Quote className="w-16 h-16" fill="currentColor" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Avatar and Info */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-4 md:flex-col md:items-start md:text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 shadow-lg">
                <ImageWithFallback
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                <p className="text-[#fd853a] font-medium">{testimonial.role}</p>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex flex-col items-start md:items-center gap-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                  >
                    <Star
                      className={`w-6 h-6 ${i < testimonial.rating ? 'text-[#fd853a] fill-current' : 'text-gray-300'}`}
                    />
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">5.0</span>
                <span className="text-gray-600 text-sm">• {testimonial.project}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-8">
            <motion.blockquote 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 text-lg leading-relaxed mb-6"
            >
              "{testimonial.content}"
            </motion.blockquote>

            {/* Additional Info */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Verified Client</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <span>Project Completed</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-[#fd853a]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-orange-200/10 to-transparent rounded-full blur-3xl" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-[#fd853a]/30 rounded-full animate-pulse" />
      <div className="absolute top-40 right-32 w-2 h-2 bg-orange-400/40 rounded-full animate-bounce" />
      <div className="absolute bottom-32 left-32 w-4 h-4 bg-[#fd853a]/20 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#fd853a]" />
            <span className="text-gray-600 text-lg tracking-wide">Testimonials</span>
            <div className="w-12 h-px bg-[#fd853a]" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            What Clients Say About<br />
            <span className="text-[#fd853a]">My Work</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about 
            working with me and the results we achieved together.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <TestimonialCard testimonial={testimonials[activeIndex]} isActive={true} />
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-8">
            {/* Previous Button */}
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white border-2 border-gray-200 text-gray-600 p-4 rounded-full hover:border-[#fd853a] hover:text-[#fd853a] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-[#fd853a] scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white border-2 border-gray-200 text-gray-600 p-4 rounded-full hover:border-[#fd853a] hover:text-[#fd853a] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center"
        >
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gray-900">50+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gray-900">100+</div>
            <div className="text-gray-600">Projects Done</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gray-900">5.0</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gray-900">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}