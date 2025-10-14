import { Metadata } from 'next';
import CookiePolicy from './_components/Cookie';

export const metadata: Metadata = {
  title: 'Cookie Policy - Fivewell Africa',
  description: 'Fivewell Africa Cookie Policy and Consent Preferences',
};

export default function CookiePolicyPage() {
  return (
   <>
   <CookiePolicy/>
   </>
  );
}
