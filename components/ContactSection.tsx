import React, { useState } from 'react';
import { motion } from "framer-motion";

import { Mail, Phone, MapPin, Send, CheckCircle, Globe } from 'lucide-react';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      budget: '',
      timeline: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="bg-gray-900 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-[#fd853a]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-orange-200/5 to-transparent rounded-full blur-3xl" />

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
            <span className="text-gray-400 text-lg tracking-wide">Get In Touch</span>
            <div className="w-12 h-px bg-[#fd853a]" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Work <span className="text-[#fd853a]">Together</span>
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Ready to bring your creative vision to life? Let's discuss your project and 
            create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#fd853a]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#fd853a] rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <div className="text-white font-medium">vijay.anbu@gmail.com</div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#fd853a]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#fd853a] rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Phone</div>
                    <div className="text-white font-medium">+1 (555) 123-4567</div>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#fd853a]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#fd853a] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Location</div>
                    <div className="text-white font-medium">Chennai, Tamil Nadu, India</div>
                  </div>
                </motion.div>

                {/* Availability */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#fd853a]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Availability</div>
                    <div className="text-green-400 font-medium">Available for new projects</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quick Services */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Services Offered</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Logo Design',
                  'Brand Identity',
                  'Photo Retouching',
                  'Wedding Albums',
                  'Digital Art',
                  'Video Content'
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-lg p-3 text-center border border-white/10"
                  >
                    <span className="text-white text-sm font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#fd853a] transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#fd853a] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#fd853a] transition-colors"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fd853a] transition-colors"
                  >
                    <option value="" className="bg-gray-900">Select budget</option>
                    <option value="under-1k" className="bg-gray-900">Under $1,000</option>
                    <option value="1k-5k" className="bg-gray-900">$1,000 - $5,000</option>
                    <option value="5k-10k" className="bg-gray-900">$5,000 - $10,000</option>
                    <option value="10k-plus" className="bg-gray-900">$10,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fd853a] transition-colors"
                  >
                    <option value="" className="bg-gray-900">Select timeline</option>
                    <option value="asap" className="bg-gray-900">ASAP</option>
                    <option value="1-2weeks" className="bg-gray-900">1-2 weeks</option>
                    <option value="1month" className="bg-gray-900">1 month</option>
                    <option value="flexible" className="bg-gray-900">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#fd853a] transition-colors resize-none"
                  placeholder="Tell me about your project, goals, and how I can help you..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#fd853a] text-white py-4 rounded-lg font-medium text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#fd853a] rounded-full flex items-center justify-center">
                <div className="text-white font-bold text-center">
                  <div className="text-base leading-none">VJ</div>
                  <div className="text-[8px] tracking-widest leading-none mt-1">EDIT</div>
                </div>
              </div>
              <span className="text-white text-xl font-semibold tracking-wide">V I J A Y</span>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © 2024 Vijay Anbu. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Crafted with ❤️ and creativity
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow me:</span>
              <div className="flex gap-3">
                {['Instagram', 'Behance', 'LinkedIn'].map((social) => (
                  <motion.button
                    key={social}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-8 h-8 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:border-[#fd853a] hover:text-[#fd853a] transition-all duration-300"
                  >
                    <Globe className="w-4 h-4" />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}