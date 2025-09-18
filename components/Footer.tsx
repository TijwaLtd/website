import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center space-y-6">
             {/* Copyright */}
             <div className="text-sm text-center">
            &copy; {new Date().getFullYear()} Tailored Food. All rights reserved.
          </div>
          {/* Social Icons */}
          <div className="flex space-x-6">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a 
              href="mailto:info@tailoredfood.org" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Email us"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="tel:+15551234567" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
          
      
        </div>
      </div>
    </footer>
  );
};

export default Footer;
