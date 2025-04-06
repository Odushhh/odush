import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="container text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can work together to create something amazing
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Working Globally</h3>
                  <p className="text-gray-600">Available May 2025</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Email</h4>
                    <a href="mailto:adrianoduma8@gmail.com" className="text-gray-600 hover:text-gray-900">
                      adrianoduma8@gmail.com
                    </a>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Phone</h4>
                    <a href="tel:+254713407292" className="text-gray-600 hover:text-gray-900">
                      +254 713 407 292
                    </a>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Based in</h4>
                    <p className="text-gray-600">Bremen, Germany</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 