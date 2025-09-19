'use client'

import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Mail, Phone, CheckCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | FiveWell Africa',
  description: 'Get in touch with FiveWell Africa for a consultation. Contact us to learn how our agriculture consulting services can help your agribusiness grow.',
};

interface ContactForm {
  name: string;
  email: string;
  organization?: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactForm>();
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const onSubmit = async (data: ContactForm) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      });
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <div className="min-h-screen">

      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-600 to-blue-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Contact Our Experts
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to transform your agribusiness? Reach out for a consultation or to discuss a potential partnership. We're here to help you grow.
            </motion.p>
          </div>
        </div>
      </section>


      {/* Contact Form and Map */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-green-600 mr-4" />
                      <a href="mailto:info@fivewellafrica.com" className="text-gray-600 hover:text-green-600 transition-colors">
                        info@fivewellafrica.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-green-600 mr-4" />
                      <a href="tel:+254700000000" className="text-gray-600 hover:text-green-600 transition-colors">
                        +254 700 000 000 (Placeholder)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow" aria-label="Twitter">
                      <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow" aria-label="LinkedIn">
                      <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: 'Please enter a valid email'
                        }
                      })}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization (Optional)
                  </label>
                  <input
                    {...register('organization')}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your organization"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    {...register('subject', { required: 'Please select a subject' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="Agribusiness Strategy Inquiry">Agribusiness Strategy Inquiry</option>
                    <option value="Agritech Consulting">Agritech Consulting</option>
                    <option value="Sustainable Farming Solutions">Sustainable Farming Solutions</option>
                    <option value="Partnership Inquiry">Partnership Inquiry</option>
                    <option value="Media Inquiry">Media Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your inquiry..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>

                {submitStatus && (
                  <div className={`mt-4 p-4 rounded-lg ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    <div className="flex items-start">
                      {submitStatus.success ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      )}
                      <p>{submitStatus.message}</p>
                    </div>
                  </div>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}