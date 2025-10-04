'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Mail, Phone, XCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Replace with your actual form submission logic
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Your message has been sent successfully! We\'ll get back to you soon.'
        });
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: `There was an error sending your message. Please try again later.${error}`
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        {/* Contact Information */}
        <div className="mb-12 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions about our services or want to discuss a potential project? 
            Fill out the form or reach out to us directly.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                <Mail className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Email us</h3>
                <p className="text-gray-600">info@fivewellafrica.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                <Phone className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Call us</h3>
                <p className="text-gray-600">+254 700 000000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          
          {submitStatus && (
            <div className={`mb-6 p-4 rounded-md ${
              submitStatus.success ? 'bg-green-50' : 'bg-red-50'
            }`}>
              <div className="flex">
                <div className="flex-shrink-0">
                  {submitStatus.success ? (
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-400" />
                  )}
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    submitStatus.success ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {submitStatus.message}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                    errors.name ? 'border-red-300' : ''
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                    errors.email ? 'border-red-300' : ''
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                Organization (Optional)
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="organization"
                  {...register('organization')}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <select
                  id="subject"
                  {...register('subject', { required: 'Subject is required' })}
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                    errors.subject ? 'border-red-300' : ''
                  }`}
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Career Opportunities">Career Opportunities</option>
                  <option value="Other">Other</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters',
                    },
                  })}
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                    errors.message ? 'border-red-300' : ''
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>
            </div>

            <div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
