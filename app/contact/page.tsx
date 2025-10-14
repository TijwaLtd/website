
import dynamic from 'next/dynamic';

// Dynamically import the client component
const ContactForm = dynamic(
  () => import('../../components/ContactForm'),
  { 
    loading: () => (
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Loading contact form...</p>
      </div>
    )
  }
);

// export const metadata: Metadata = {
//   title: 'Contact Us | FiveWell Africa',
//   description: 'Get in touch with FiveWell Africa for a consultation. Contact us to learn how our agriculture consulting services can help your agribusiness grow.',
// };

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-18">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-600 to-blue-700 dark:from-green-700 dark:to-blue-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact Our Experts
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your agribusiness? Reach out for a consultation or to discuss a potential partnership. We&apos;re here to help you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white  overflow-hidden">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}