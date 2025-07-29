import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ResumePage() {
  const education = [
    {
      year: '2015 - 2017',
      degree: 'Master of Fine Arts',
      school: 'National Institute of Design',
      location: 'Ahmedabad, India'
    },
    {
      year: '2012 - 2015',
      degree: 'Bachelor of Visual Communication',
      school: 'Anna University',
      location: 'Chennai, India'
    }
  ];

  const certifications = [
    'Adobe Certified Expert - Photoshop',
    'Google UX Design Professional Certificate',
    'Advanced Typography - Typography Institute',
    'Brand Identity Design - Coursera'
  ];

  const awards = [
    {
      year: '2023',
      title: 'Best Brand Identity Design',
      organization: 'Design Awards India'
    },
    {
      year: '2022',
      title: 'Creative Excellence Award',
      organization: 'South India Design Council'
    },
    {
      year: '2021',
      title: 'Outstanding Portfolio',
      organization: 'Behance'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-black mb-4">Resume</h1>
            <p className="text-gray-600 text-lg">
              Download my complete resume or view the key highlights below
            </p>
            <Button
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full"
              onClick={() => {
                // In a real app, this would trigger a PDF download
                alert('Resume download would start here');
              }}
            >
              Download PDF Resume 📄
            </Button>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Professional Summary</h2>
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              Creative and detail-oriented Graphic Designer with 4+ years of experience in creating 
              compelling visual designs for digital and print media. Proven track record of delivering 
              high-quality design solutions that enhance brand identity and drive engagement. 
              Expertise in Adobe Creative Suite, brand development, and creative problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-black">Senior Graphic Designer</h3>
                  <h4 className="text-orange-500 font-semibold">Creative Studio Inc.</h4>
                </div>
                <div className="text-gray-600 font-medium">2021 - Present</div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Led design projects for 50+ clients, resulting in 30% increase in brand recognition</li>
                <li>• Created comprehensive brand identity packages including logos, color schemes, and style guides</li>
                <li>• Collaborated with marketing teams to develop engaging social media graphics and campaigns</li>
                <li>• Mentored junior designers and established design standards for the team</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-black">Graphic Designer</h3>
                  <h4 className="text-orange-500 font-semibold">Design Agency Pro</h4>
                </div>
                <div className="text-gray-600 font-medium">2019 - 2021</div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Designed marketing materials for diverse industries including healthcare, technology, and retail</li>
                <li>• Developed creative concepts for print advertisements and digital campaigns</li>
                <li>• Maintained brand consistency across multiple touchpoints and platforms</li>
                <li>• Collaborated with clients to understand requirements and deliver targeted solutions</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-black">Junior Designer</h3>
                  <h4 className="text-orange-500 font-semibold">Startup Creative</h4>
                </div>
                <div className="text-gray-600 font-medium">2017 - 2019</div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Assisted senior designers in creating visual content for various projects</li>
                <li>• Specialized in photo retouching and image manipulation using Adobe Photoshop</li>
                <li>• Created social media graphics and web banners for startup clients</li>
                <li>• Developed foundational skills in brand design and visual communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="text-orange-500 font-bold mb-2">{edu.year}</div>
                <h3 className="text-xl font-bold text-black mb-2">{edu.degree}</h3>
                <h4 className="text-gray-700 font-semibold mb-1">{edu.school}</h4>
                <p className="text-gray-600">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-md flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Awards & Recognition</h2>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                    <div className="text-orange-500 font-bold mb-2">{award.year}</div>
                    <h3 className="text-lg font-bold text-black mb-1">{award.title}</h3>
                    <p className="text-gray-600">{award.organization}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Core Competencies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma',
              'Brand Identity', 'Logo Design', 'Print Design', 'Digital Marketing',
              'Typography', 'Color Theory', 'Photo Retouching', 'UI/UX Design'
            ].map((skill, index) => (
              <div key={index} className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-center font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}