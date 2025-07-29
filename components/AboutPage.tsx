1
import { ImageWithFallback } from './figma/ImageWithFallback';


export function AboutPage() {
  const skills = [
    { name: 'Photoshop', level: 95 },
    { name: 'Illustrator', level: 90 },
    { name: 'InDesign', level: 85 },
    { name: 'After Effects', level: 80 },
    { name: 'Figma', level: 88 },
    { name: 'Photography', level: 85 }
  ];

  const experience = [
    {
      year: '2021 - Present',
      title: 'Senior Graphic Designer',
      company: 'Creative Studio Inc.',
      description: 'Leading design projects for major brands, specializing in brand identity and digital marketing materials.'
    },
    {
      year: '2019 - 2021',
      title: 'Graphic Designer',
      company: 'Design Agency Pro',
      description: 'Created compelling visual designs for print and digital media, working with diverse clientele.'
    },
    {
      year: '2017 - 2019',
      title: 'Junior Designer',
      company: 'Startup Creative',
      description: 'Assisted in various design projects, developed skills in brand design and photo retouching.'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
                Let's know more <br />
                <span className="text-orange-500">about me</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                I'm a passionate graphic designer with over 4 years of experience creating visual solutions 
                that communicate, inspire, and captivate. My journey in design started with a love for 
                visual storytelling and has evolved into a comprehensive skill set spanning brand identity, 
                digital design, and creative direction.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-2">150+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="../public/about.png"
                    alt="Vijay About"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4Y+
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">My Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Constantly learning and growing, I specialize in various design tools and techniques
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-orange-500 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-orange-400 to-orange-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Experience</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My professional journey and the experiences that have shaped my career
            </p>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 p-8 bg-gray-50 rounded-2xl">
                <div className="md:w-1/4">
                  <div className="text-orange-500 font-bold text-lg">{exp.year}</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-black mb-2">{exp.title}</h3>
                  <h4 className="text-orange-500 font-semibold mb-3">{exp.company}</h4>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">My Design Philosophy</h2>
          <blockquote className="text-xl text-gray-300 leading-relaxed italic mb-8">
            "Good design is not just about making things look beautiful. It's about creating meaningful 
            connections between brands and people, solving problems through visual communication, 
            and telling stories that resonate with the audience."
          </blockquote>
          <div className="text-orange-500 font-semibold">- Vijayanbu</div>
        </div>
      </section>
    </div>
  );
}