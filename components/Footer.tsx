import { Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center space-y-6">
             {/* Copyright */}
             <div className="text-sm text-center">
            &copy; {new Date().getFullYear()} FiveWell Africa. All rights reserved.
          </div>
          {/* Social Icons */}
          <div className="flex space-x-6">
            {/* <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a> */}
            <a 
              href="https://www.instagram.com/fivewell.africa?igsh=MWRqdnc2YW8ycW03eQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/FivewellAfrica" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/company/fivewell-africa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            {/* <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a> */}
            <a 
              href="mailto:info@fivewellafrica.com" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Email us"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="tel:+254741865915" 
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
