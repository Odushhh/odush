import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, Tech Company',
    content: 'Adrian transformed our user interface and significantly improved our user engagement metrics. His attention to detail and user-centric approach is exceptional.',
    image: '/images/testimonial-1.jpg',
    project: 'Queue Webpage Redesign',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Product Manager, Startup',
    content: 'Working with Adrian was a game-changer for our product. His design system implementation brought consistency and efficiency to our development process.',
    image: '/images/testimonial-2.jpg',
    project: 'WRN Modern UI Design',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'CTO, Enterprise',
    content: 'Adrian\'s expertise in UI/UX design helped us create a more intuitive and accessible platform. The results exceeded our expectations.',
    image: '/images/testimonial-3.jpg',
    project: 'Financial Dashboard',
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'Design Lead, Agency',
    content: 'Collaborating with Adrian on the Wellthi Platform was a pleasure. His ability to balance aesthetics with functionality is remarkable.',
    image: '/images/testimonial-4.jpg',
    project: 'Wellthi Platform',
  },
  {
    id: 5,
    name: 'David Brown',
    role: 'Founder, Mobile App',
    content: 'Adrian\'s mobile app concept was exactly what we needed. His understanding of user behavior and modern design trends is impressive.',
    image: '/images/testimonial-5.jpg',
    project: 'Mobile App Concept',
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="container text-center">
            <h1 className="text-4xl font-bold mb-6">Testimonials</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              What clients say about working with me
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="card p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-lg mb-6">{testimonial.content}</p>
                  <p className="text-sm text-gray-500">
                    Project: {testimonial.project}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
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