// ...existing code...
import { motion } from "framer-motion";



interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  // ...existing code...

  // Removed unused scroll effect

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume' }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4"
    >
      <div className="backdrop-blur-lg bg-gray-900/80 border border-white/20 rounded-full px-4 py-3 mx-auto w-fit">
        <div className="flex items-center justify-between gap-8">
          {/* Home Button - Active State */}
          <motion.button
            onClick={() => onPageChange('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${
              currentPage === 'home' 
                ? 'bg-[#fd853a] text-white' 
                : 'text-white hover:text-[#fd853a]'
            } px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 relative overflow-hidden`}
          >
            <span className="relative z-10">Home</span>
            {currentPage === 'home' && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-[#fd853a] rounded-full"
                initial={false}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>

          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#fd853a] rounded-full flex items-center justify-center">
              <div className="text-white font-bold text-center">
                <div className="text-base leading-none">VJ</div>
                <div className="text-[8px] tracking-widest leading-none mt-1">EDIT</div>
              </div>
            </div>
            <span className="text-white text-xl font-semibold tracking-wide">V I J A Y</span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-1">
            {navItems.slice(1).map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  currentPage === item.id 
                    ? 'text-[#fd853a]' 
                    : 'text-white hover:text-[#fd853a]'
                } px-6 py-3 rounded-full font-medium text-lg transition-all duration-300 relative`}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#fd853a] rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}