const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, Tech Company',
    content: 'Adrian transformed our user interface and significantly improved our user engagement metrics. His attention to detail and user-centric approach is exceptional.',
    image: '/images/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Product Manager, Startup',
    content: 'Working with Adrian was a game-changer for our product. His design system implementation brought consistency and efficiency to our development process.',
    image: '/images/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'CTO, Enterprise',
    content: 'Adrian\'s expertise in UI/UX design helped us create a more intuitive and accessible platform. The results exceeded our expectations.',
    image: '/images/testimonial-3.jpg',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="section-title text-center">TESTIMONIALS</h2>
        <p className="text-center text-xl mb-12 max-w-2xl mx-auto">
          What clients say about working with me
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 