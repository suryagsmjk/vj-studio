import { useState } from 'react';
import { motion,AnimatePresence } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const portfolioCategories = [
  {
    id: 'all',
    title: 'All Work',
    count: 24
  },
  {
    id: 'retouch',
    title: 'Retouch',
    count: 8,
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop',
    description: 'Professional photo retouching and enhancement'
  },
  {
    id: 'wedding',
    title: 'Wedding Album',
    count: 6,
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=500&fit=crop',
    description: 'Beautiful wedding photography and album design'
  },
  {
    id: 'frames',
    title: 'Frames',
    count: 4,
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=500&fit=crop',
    description: 'Custom frame designs and layouts'
  },
  {
    id: 'reels',
    title: 'Reels',
    count: 3,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=500&fit=crop',
    description: 'Creative video content and reels production'
  },
  {
    id: 'logo',
    title: 'Logo',
    count: 2,
    image: 'https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=400&h=500&fit=crop',
    description: 'Brand identity and logo design'
  },
  {
    id: 'digital',
    title: 'Digital Art',
    count: 1,
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=500&fit=crop',
    description: 'Digital illustrations and artwork'
  }
];

const portfolioProjects = [
  {
    id: 1,
    title: 'Brand Identity Design',
    category: 'logo',
    image: 'https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=500&h=600&fit=crop',
    description: 'Modern logo design for tech startup'
  },
  {
    id: 2,
    title: 'Wedding Photography',
    category: 'wedding',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&h=600&fit=crop',
    description: 'Elegant wedding album design'
  },
  {
    id: 3,
    title: 'Portrait Retouch',
    category: 'retouch',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=600&fit=crop',
    description: 'Professional portrait enhancement'
  },
  {
    id: 4,
    title: 'Custom Frame Design',
    category: 'frames',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=600&fit=crop',
    description: 'Artistic frame layout design'
  },
  {
    id: 5,
    title: 'Social Media Reel',
    category: 'reels',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=600&fit=crop',
    description: 'Creative video content production'
  },
  {
    id: 6,
    title: 'Digital Illustration',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&h=600&fit=crop',
    description: 'Modern digital artwork creation'
  }
];

interface PortfolioCardProps {
  category: typeof portfolioCategories[1];
  index: number;
  onClick: () => void;
}

function PortfolioCard({ category, index, onClick }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      {/* Card Container */}
      <div className="relative h-[400px] w-[320px] rounded-[24px] overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
        
        {/* Image Container */}
        <div className="relative h-[250px] overflow-hidden">
          <ImageWithFallback
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          
          {/* Project count badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-gray-900 text-sm font-medium">{category.count} projects</span>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
          
          {/* Hover Action */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-6 right-6"
              >
                <div className="bg-[#fd853a] text-white p-3 rounded-full shadow-lg">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

interface ProjectCardProps {
  project: typeof portfolioProjects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
        <p className="text-sm text-gray-200">{project.description}</p>
        
        <button className="mt-3 bg-[#fd853a] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors flex items-center gap-2">
          View Project
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showProjects, setShowProjects] = useState(false);

  const filteredProjects = portfolioProjects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const handleCategoryClick = (categoryId: string) => {
    setActiveFilter(categoryId);
    setShowProjects(true);
  };

  const handleBackToCategories = () => {
    setShowProjects(false);
    setActiveFilter('all');
  };

  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-[#fd853a]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-orange-200/10 to-transparent rounded-full blur-2xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#fd853a]" />
            <span className="text-gray-600 text-lg tracking-wide">Portfolio</span>
            <div className="w-12 h-px bg-[#fd853a]" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            My Creative <span className="text-[#fd853a]">Work</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Explore my diverse portfolio showcasing creativity, innovation, and attention to detail 
            across various design disciplines and industry sectors.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        {showProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <button
              onClick={handleBackToCategories}
              className="flex items-center gap-2 text-gray-600 hover:text-[#fd853a] transition-colors"
            >
              ← Back to Categories
            </button>
            
            <div className="flex flex-wrap gap-2">
              {portfolioCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-[#fd853a] text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.title}
                  {category.count && <span className="ml-2 text-sm opacity-70">({category.count})</span>}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {!showProjects ? (
            // Category Grid
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
            >
              {portfolioCategories.slice(1).map((category, index) => (
                <PortfolioCard 
                  key={category.id} 
                  category={category} 
                  index={index}
                  onClick={() => handleCategoryClick(category.id)}
                />
              ))}
            </motion.div>
          ) : (
            // Projects Grid
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        {!showProjects && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              onClick={() => setShowProjects(true)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#fd853a] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
            >
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}