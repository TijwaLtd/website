import BecomePartnerForm from "@/components/BecomePartnerForm";
import PartnerSection from "@/components/Partners";
import React from "react";

// Placeholder for an icon. In a real app, this would be an SVG or an icon component.
const PlaceholderIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

function BecomePartnerPage() {
  const benefits = [
    {
      icon: <PlaceholderIcon className="w-12 h-12 text-green-600" />,
      title: "Unlock Market Access",
      description:
        "Gain entry into new local and regional markets with our extensive network and logistical support.",
    },
    {
      icon: <PlaceholderIcon className="w-12 h-12 text-green-600" />,
      title: "Expert Agribusiness Guidance",
      description:
        "Leverage our team's deep expertise in sustainable farming, supply chain management, and market trends.",
    },
    {
      icon: <PlaceholderIcon className="w-12 h-12 text-green-600" />,
      title: "Access to Finance & Technology",
      description:
        "We help you connect with investors and adopt cutting-edge ag-tech to scale your operations efficiently.",
    },
    {
      icon: <PlaceholderIcon className="w-12 h-12 text-green-600" />,
      title: "Drive Sustainable Impact",
      description:
        "Join a movement committed to building a resilient and profitable agricultural future for Africa.",
    },
  ];

  const partnerProfiles = [
    {
      title: "Ambitious Agri-SMEs",
      description:
        "Businesses looking to scale their production, improve quality, and reach new customers.",
    },
    {
      title: "Farming Cooperatives",
      description:
        "Groups seeking to enhance collective bargaining power, streamline operations, and improve member livelihoods.",
    },
    {
      title: "Technology Innovators",
      description:
        "Startups and companies with solutions that can transform the agricultural value chain.",
    },
    {
      title: "NGOs & Development Partners",
      description:
        "Organizations aligned with our mission of sustainable development and food security in Africa.",
    },
  ];

  const partnershipSteps = [
    {
      step: 1,
      title: "Initial Inquiry",
      description:
        "Fill out the form below to express your interest. Tell us about your organization and your goals.",
    },
    {
      step: 2,
      title: "Discovery Call",
      description:
        "Our partnership team will schedule a call to understand your needs and see how we can align.",
    },
    {
      step: 3,
      title: "Strategic Proposal",
      description:
        "We'll develop a tailored partnership proposal outlining collaboration areas and mutual benefits.",
    },
    {
      step: 4,
      title: "Launch & Grow",
      description:
        "Once we agree on the terms, we'll kick off the partnership and start working towards shared success.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 mt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 to-blue-800 text-white py-24 sm:py-32">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Partner with FiveWell Africa
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join us in cultivating a prosperous and sustainable agricultural
            landscape across Africa. Together, we can build resilient food
            systems and empower communities.
          </p>
        </div>
      </section>

      {/* Why Partner With Us? Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why Partner With Us?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the resources, expertise, and network to help you
              overcome challenges and seize opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Ideal Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Who We&apos;re Looking For</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We collaborate with a diverse range of organizations that share
              our vision for a thriving African agricultural sector.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerProfiles.map((profile, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-sm text-center hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {profile.title}
                </h3>
                <p className="mt-2 text-gray-600">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Partnership Journey Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Your Journey With Us
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A simple, transparent process to get our partnership started.
            </p>
          </div>
          <div className="flow-root">
            <ul className="-mb-8">
              {partnershipSteps.map((step, index) => (
                <li key={index}>
                  <div className="relative pb-8">
                    {index !== partnershipSteps.length - 1 && (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                    )}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center ring-8 ring-gray-50">
                          <span className="text-white font-bold">
                            {step.step}
                          </span>
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {step.title}
                          </h3>
                          <p className="mt-1 text-gray-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Become a Partner
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to take the next step? Fill out the form below and a member
              of our team will be in touch shortly.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
            <BecomePartnerForm />
          </div>
        </div>
      </section>
      <PartnerSection />
    </div>
  );
}

export default BecomePartnerPage;
