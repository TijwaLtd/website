
"use client";

import { Button } from '@/components/ui/button';


export default function CookiePolicy() {
  return (
    <main className="container mx-auto px-4 py-12 pt-40 max-w-4xl">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-8 text-primary dark:text-white">Cookies Consent Preferences</h1>
        
        <div className="space-y-6">
            <p>
                We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies under each consent category below.
            </p>
            <p>
                The cookies that are categorized as &quot;Necessary&quot; are stored on your browser as they are essential for enabling the basic functionalities of the site.
            </p>
            <p>
                We also use third-party cookies that help us analyze how you use this website, store your preferences, and provide the content and advertisements that are relevant to you. These cookies will only be stored in your browser with your prior consent.
            </p>
            <p>
                You can choose to enable or disable some or all of these cookies but disabling some of them may affect your browsing experience.
            </p>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Necessary <span className="text-base font-normal text-gray-600">(Always Active)</span></h2>
            <p>
              Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Functional</h2>
            <p>
              Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
            <p>
              Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Performance</h2>
            <p>
              Performance cookies are used to understand and analyze the key performance indexes of the website which helps in delivering a better user experience for the visitors.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Advertisement</h2>
            <p>
              Advertisement cookies are used to provide visitors with customized advertisements based on the pages you visited previously and to analyze the effectiveness of the ad campaigns.
            </p>
          </section>

           <div className="mt-4">
          <Button 
            variant="link" 
            className="p-0 h-auto text-sm text-primary dark:text-white"
            onClick={() => {
              window.location.href = '/privacy-policy';
            }}
          >
            Learn more about our privacy policy
          </Button>
        </div>
        </div>
      </div>
    </main>
  );
}
