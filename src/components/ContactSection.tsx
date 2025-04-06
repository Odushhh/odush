'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#E1E1E1]">
      <div className="container mx-auto px-4 py-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-20 text-center text-[#1A1A1A]"
        >
          Contact
        </motion.h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info - Left Side */}
          <div className="space-y-8">
            <h3 className="text-4xl font-bold">Let's talk about your project</h3>
            <p className="text-xl text-gray-600">
              Always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>
            <div className="py-8 space-y-4">
              <div>
                <h4 className="text-2xl font-bold mb-2">Email:</h4>
                <a
                  href="mailto:adrianoduma8@gmail.com"
                  className="text-gray-600 font-semibold sm:text-4xl text-3xl hover:text-black transition-colors break-all"
                >
                  adrianoduma8@gmail.com
                </a>
              </div>
              {/*}
              <div>
                <h4 className="text-xl font-semibold mb-2">Phone</h4>
                <a
                  href="tel:+254712345678"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  +254 712 345 678
                </a>
              </div>
              */}
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                  placeholder="johndoe@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                  placeholder="Type your message here..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-black text-white rounded-md text-lg font-medium transition-all
                  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black/80'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 