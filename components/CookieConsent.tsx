"use client";

import CookieConsentComponent from 'react-cookie-consent';
import { Button } from './ui/button';

export function CookieConsent() {
  return (
    <CookieConsentComponent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline"
      enableDeclineButton
      onAccept={() => {
        console.log('Cookies accepted');
      }}
      onDecline={() => {
        console.log('Cookies declined');
      }}
      buttonClasses="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors"
      declineButtonClasses="ml-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors"
      style={{
        background: '#ffffff',
        color: '#1f2937',
        boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
      contentStyle={{
        flex: '1 0 0',
        margin: 0,
      }}
      buttonWrapperClasses="flex flex-wrap gap-2 mt-4"
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold mb-2">Cookies Consent Preferences</h3>
        <p className="text-sm text-gray-700">
          We use cookies to help you navigate efficiently and perform certain functions. The cookies that are categorized as "Necessary" are stored on your browser as they are essential for enabling the basic functionalities of the site. We also use third-party cookies that help us analyze and understand how you use this website. These cookies will be stored in your browser only with your consent.
        </p>
        <div className="mt-4">
          <Button 
            variant="link" 
            className="p-0 h-auto text-sm text-primary"
            onClick={() => {
              window.location.href = '/privacy-policy#cookies';
            }}
          >
            Learn more about cookies
          </Button>
        </div>
      </div>
    </CookieConsentComponent>
  );
}
