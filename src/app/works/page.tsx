import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Queue Webpage Redesign',
    category: 'Web Design',
    year: '2024',
    description: 'A complete redesign of the Queue platform\'s user interface, focusing on improving user engagement and conversion rates.',
    image: '/images/queue-redesign.jpg',
    tags: ['Design', 'Development'],
    link: '#',
  },
  {
    id: 2,
    title: 'WRN Modern UI Design',
    category: 'Web Application',
    year: '2023',
    description: 'Modern UI design for a weather reporting network, featuring real-time data visualization and intuitive navigation.',
    image: '/images/wrn-ui.jpg',
    tags: ['Design', 'Development'],
    link: '#',
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    category: 'UI/UX Design',
    year: '2023',
    description: 'A comprehensive financial dashboard design that simplifies complex data visualization for better decision-making.',
    image: '/images/financial-dashboard.jpg',
    tags: ['Design'],
    link: '#',
  },
  {
    id: 4,
    title: 'Wellthi Platform',
    category: 'Web Application',
    year: '2024',
    description: 'A wellness platform that helps users track and improve their health through personalized recommendations.',
    image: '/images/wellthi-platform.jpg',
    tags: ['Design', 'Development'],
    link: '#',
  },
  {
    id: 5,
    title: 'Mobile App Concept',
    category: 'UI/UX Design',
    year: '2022',
    description: 'A mobile app concept for a fitness tracking application with social features and gamification elements.',
    image: '/images/mobile-app.jpg',
    tags: ['Design'],
    link: '#',
  },
];

export default function WorksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="container text-center">
            <h1 className="text-4xl text-black font-bold py-20 mb-12">Selected Works</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Featured projects that have been meticulously crafted with passion to drive results and impact
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-28">
          <div className="container">
            <div className="grid grid-cols-1 gap-16">
              {projects.map((project) => (
                <div key={project.id} className="card overflow-hidden">
                  <div className="relative h-1/2">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                        <p className="text--black">{project.category}</p>
                      </div>
                      <span className="text-gray-500">{project.year}</span>
                    </div>
                    <p className="text-lg mb-6">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="text-sm text-gray-500">
                            {tag}
                            {index < project.tags.length - 1 ? ' • ' : ''}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className="text-black hover:text-gray-600 font-medium"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
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