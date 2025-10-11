import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Fivewell Africa',
  description: 'Fivewell Africa Privacy Policy and Data Protection Information',
};

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-12 pt-40 max-w-4xl">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-8 text-primary">Fivewell Africa Privacy Policy</h1>
        
        <div className="text-sm text-gray-600 mb-8">
          <p>Effective Date: October 24, 2025</p>
          <p>Last Updated: October 24, 2025</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">FIVEWELL AFRICA DATA PROTECTION POLICY</h2>
            <p className="mb-4">
              Fivewell AFRICA attaches great importance to responsible and transparent management of personal data and is committed to protecting personal data and ensuring that organisational and technical security measures are in place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">General Privacy Policy</h2>
            <p className="mb-4">
              This General Privacy Policy is a corporate guideline for the data protection standards applicable within FIVEWELL AFRICA and is designed to satisfy legal data protection requirements. All personnel within FIVEWELL AFRICA are bound by these regulations with reference to the use of personal data belonging to members, partner-beneficiaries, and suppliers/service providers.
            </p>
            <p className="mb-4">
              By using the FIVEWELL AFRICA websites/digital platforms or accessing services, you consent to the collection and processing of your personal data by FIVEWELL AFRICA, as outlined in this privacy policy and the Legal Notice pertaining to use of the FIVEWELL AFRICA website.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">1. Personal Data and Purposes of Data Processing</h3>
            <h4 className="font-semibold mb-2">General</h4>
            <p className="mb-4">
              FIVEWELL AFRICA processes personal data in accordance with the General Data Protection Regulation (GDPR) and the Kenya Data Protection Act 2019. Below we provide users with information as to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Who they can contact at FIVEWELL AFRICA on the subject of data protection</li>
              <li>What data is processed when they visit the website</li>
              <li>What data is processed when users contact us, subscribe to newsletters, or use other FIVEWELL AFRICA online services</li>
              <li>How they can opt out of the storage of data</li>
              <li>What rights they have with respect to us.</li>
            </ul>

            <h4 className="font-semibold mb-2">Personal Data</h4>
            <p className="mb-4">
              Personal data is any information that relates to an identified or identifiable living individual. Different pieces of information, which collected together can lead to the identification of a particular person, also constitute personal data.
              FIVEWELL AFRICA does not require personal data to obtain access to any part of the website that is open to the public.
            </p>
            <p className="mb-4">
              Regardless of your purpose, we recommend that you do not disclose Sensitive Personal Data (such as, for instance, ethnic origin, religion, trade union membership, sexual orientation, health, genetic or biometric data, etc.) to us.
              FIVEWELL AFRICA may receive personal data about you from other data controllers for the purpose of providing or assisting with services or requests to or from you as the end beneficiary of a particular service.
            </p>
          </section>

          {/* Continue with other sections following the same pattern */}
          
          <section>
            <h3 className="text-xl font-semibold mb-3">8. Technical and Organisational Measures</h3>
            <p className="mb-4">
              We implement various technical and organisational measures in order to process the data with an adequate level of security and to protect the personal data against destruction, loss, falsification, unauthorised access and inadvertent notifications to third parties, and against any unauthorized processing. 
            </p>
            <p className="mb-4">
              These measures are updated accordingly based on technical developments and adapted continuously in line with the risks. 
              Under no circumstances may FIVEWELL AFRICA be held liable for any direct or indirect loss caused by inadvertent or illicit use of the personal data by a third party.
            </p>
          </section>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
            <ul className="space-y-1">
              <li>Email: <a href="mailto:dpo@fivewellafrica.com" className="text-primary hover:underline">dpo@fivewellafrica.com</a></li>
              <li>Phone: <a href="tel:+254741865915" className="text-primary hover:underline">+254 741 865 915</a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
