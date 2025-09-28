import type { Metadata } from 'next';
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import OurWorkSection from "@/components/OurWorkSection";
import CTASection from "@/components/CTASection";
import AnnualReportSection from "@/components/AnnualReportSection";
import PartnerSection from "@/components/Partners";

export const metadata: Metadata = {
  title: 'Agriculture Consulting for Africa | FiveWell Africa',
  description: 'FiveWell Africa offers expert agriculture consulting and agribusiness advisory services to boost productivity and sustainability across Africa. Partner with us.',
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "FiveWell Africa",
    "url": "https://fivewellafrica.com",
    "logo": "https://fivewellafrica.com/file.svg",
    "telephone": "+254-XXX-XXXXXX", // Placeholder phone number
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Agriculture Avenue", // Placeholder address
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi",
      "postalCode": "00100", // Placeholder postal code
      "addressCountry": "KE"
    },
    "description": "A leading agriculture consulting firm in Africa, providing expert advisory on sustainable farming, agribusiness strategy, and agritech implementation.",
    "serviceType": "Agriculture Consulting"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
       <HeroSection />
        <MissionSection />
        <OurWorkSection />
        <CTASection />
        {/* <AnnualReportSection /> */}
        <PartnerSection />
    </>
  );
}
