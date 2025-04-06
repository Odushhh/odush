import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="container text-center">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              A passionate designer and developer dedicated to creating exceptional digital experiences
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* About Text */}
              <div>
                <h2 className="text-3xl font-bold mb-6">My Journey</h2>
                <p className="text-lg mb-6">
                  I am passionate about creating designs that promote usability, accessibility, and are intuitive to end-users.
                </p>
                <p className="text-lg mb-6">
                  I specialize in creating user-centric solutions that transform ordinary interfaces & redefine human-computer interaction.
                </p>
                <p className="text-lg mb-8">
                  I enjoy assisting companies & startups in realizing their vision by developing design systems and environments from the ground up.
                </p>
                
                <div className="flex space-x-4 mb-8">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Behance
                  </a>
                </div>
                
                <button className="btn">Download Resume</button>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-600">Based in Bremen, Germany</p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Contact</h3>
                  <p className="text-gray-600">adrianoduma8@gmail.com</p>
                  <p className="text-gray-600">+254 713 407 292</p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Skills</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• UI Design</li>
                    <li>• UX Research</li>
                    <li>• Figma</li>
                    <li>• Frontend Dev</li>
                    <li>• Design Systems</li>
                    <li>• Prototyping</li>
                  </ul>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Experience</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 5+ Years in Design</li>
                    <li>• 3+ Years in Development</li>
                    <li>• 10+ Projects Completed</li>
                    <li>• 5+ Happy Clients</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects and opportunities
            </p>
            <button className="btn">Contact Me</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 