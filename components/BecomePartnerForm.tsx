'use client';

import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface PartnerFormData {
  name: string;
  email: string;
  organization: string;
  message: string;
}

export default function BecomePartnerForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<PartnerFormData>();
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const onSubmit = async (data: PartnerFormData) => {
    try {
      const response = await fetch('/api/become-a-partner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Thank you for your interest! We will be in touch shortly.'
        });
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: `${error}`
      });
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Become a Partner</h2>
      
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
            Organization <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="organization"
              {...register('organization', { required: 'Organization is required' })}
              className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                errors.organization ? 'border-red-300' : ''
              }`}
            />
            {errors.organization && (
              <p className="mt-1 text-sm text-red-600">{errors.organization.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Tell us about your organization and why you want to partner with us <span className="text-red-500">*</span>
          </label>
          <div className="mt-1">
            <textarea
              id="message"
              rows={4}
              {...register('message', { 
                required: 'Message is required',
                minLength: {
                  value: 20,
                  message: 'Message must be at least 20 characters',
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
            {isSubmitting ? 'Submitting...' : 'Submit Partnership Request'}
          </motion.button>
        </div>
      </form>
    </div>
  );
}
