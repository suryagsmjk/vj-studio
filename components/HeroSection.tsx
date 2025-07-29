// ...existing code...
import { motion } from "framer-motion";

import { ArrowUpRight, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  onPortfolioClick: () => void;
}

export function HeroSection({ onPortfolioClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Large orange circle background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-[#fd853a]/20 to-orange-300/30 rounded-full blur-3xl" />
        
        {/* Decorative scattered elements */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-[#fd853a] rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-40 right-32 w-4 h-4 bg-orange-400 rounded-full opacity-40 animate-bounce" />
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-[#fd853a] rounded-full opacity-50" />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-orange-400 rounded-full opacity-30" />
        
        {/* Abstract shapes */}
        <div className="absolute top-1/3 left-10 w-16 h-16 border-2 border-[#fd853a]/20 rounded-full rotate-45" style={{ animation: 'spin 20s linear infinite' }} />
        <div className="absolute bottom-1/3 right-10 w-12 h-12 border-2 border-orange-300/20 rounded-full" style={{ animation: 'spin 15s linear infinite reverse' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-px bg-[#fd853a]" />
              <span className="text-gray-600 text-lg tracking-wide">Hello, I'm</span>
            </motion.div>

            {/* Name and Title */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
              >
                Vijay Anbu
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-2xl lg:text-3xl text-[#fd853a] font-medium"
              >
                Graphic Designer
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-gray-600 text-lg leading-relaxed max-w-lg"
            >
              I create stunning visual experiences that captivate audiences and bring brands to life. 
              With a passion for innovative design and attention to detail, I transform ideas into 
              compelling visual stories.
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Portfolio Button */}
              <motion.button
                onClick={onPortfolioClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-[#fd853a] text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 font-medium text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Portfolio
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
              </motion.button>

              {/* Download CV Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-[#fd853a] text-[#fd853a] px-8 py-4 rounded-full flex items-center justify-center gap-3 font-medium text-lg hover:bg-[#fd853a] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Download CV
                <Download className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex items-center gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-gray-600 text-sm">Projects Done</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background decorative circle */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#fd853a] to-orange-400 rounded-full opacity-20 blur-xl" />
              
              {/* Main profile image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Orange background circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fd853a] to-orange-500 rounded-full shadow-2xl" />
                
                {/* Profile image */}
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Vijay Anbu - Graphic Designer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating elements around the image */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg"
                >
                  <div className="w-8 h-8 bg-[#fd853a] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">5★</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg"
                >
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}