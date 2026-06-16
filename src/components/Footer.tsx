import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/services';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom mx-auto section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-animated-gradient flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-lg">Manav Graphics</h3>
                <p className="text-xs text-dark-400">Printing & Designing Solutions</p>
              </div>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed mb-4">
              Your trusted partner in printing solutions for over 30 years. High-quality products, timely delivery, and excellent customer service.
            </p>
            <a
              href={`https://wa.me/91${businessInfo.whatsapp}?text=${encodeURIComponent('Hello Manav Graphics, I need printing services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-dark-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold text-base mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                'Digital Printing',
                'ID Card Printing',
                'Wedding Cards',
                'Flex Printing',
                'Banner Printing',
                'Visiting Cards',
                'Mug Printing',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-dark-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-semibold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-dark-400 text-sm">{businessInfo.address}</span>
              </li>
              <li>
                <a
                  href={`tel:+91${businessInfo.phone}`}
                  className="flex items-center gap-3 text-dark-400 hover:text-cyan-400 text-sm transition-colors"
                >
                  <Phone size={18} className="text-cyan-400 shrink-0" />
                  {businessInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-center gap-3 text-dark-400 hover:text-cyan-400 text-sm transition-colors"
                >
                  <Mail size={18} className="text-cyan-400 shrink-0" />
                  {businessInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-cyan-400 mt-0.5 shrink-0" />
                <div className="text-dark-400 text-sm">
                  <p>Mon-Fri: {businessInfo.hours.weekdays}</p>
                  <p>Sat: {businessInfo.hours.saturday}</p>
                  <p>Sun: {businessInfo.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            &copy; {currentYear} Manav Graphics. All rights reserved.
          </p>
          <p className="text-dark-600 text-xs">
            Professional Printing & Designing Solutions in Pune
          </p>
        </div>
      </div>
    </footer>
  );
}
