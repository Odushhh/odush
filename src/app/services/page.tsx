import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    id: 1,
    title: 'UI/UX Design',
    description: 'I design interfaces that promote usability, accessibility, and are intuitive to end-users, creating meaningful experiences that align with user needs.',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'UI Systems',
      'Usability Testing',
      'Interaction Design',
      'Information Architecture',
    ],
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Building responsive, accessible web applications that deliver exceptional user experiences with modern frontend technologies.',
    features: [
      'React & Next.js',
      'Frontend Development',
      'Responsive Design',
      'Performance Optimization',
      'Cross-browser Compatibility',
      'Progressive Web Apps',
    ],
  },
  {
    id: 3,
    title: 'Design Systems',
    description: 'I develop comprehensive design systems that ensure consistency, scalability, and efficient collaboration between design and development teams.',
    features: [
      'Component Libraries',
      'Design Guidelines',
      'Design-to-Code',
      'Documentation',
      'Version Control',
      'Design Tokens',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="container text-center">
            <h1 className="text-4xl font-bold mb-6">Services</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Comprehensive design and development services to bring your digital products to life
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 gap-12">
              {services.map((service) => (
                <div key={service.id} className="card p-8">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg mb-8">{service.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-gray-500 mr-2">•</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing
            </p>
            <button className="btn">Contact Me</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 