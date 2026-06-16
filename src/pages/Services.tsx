import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  type LucideIcon,
  Printer,
  FileText,
  CreditCard,
  Coffee,
  Maximize,
  Flag,
  Contact,
  Heart,
  Sticker,
  Sparkles,
  Disc3,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import { services, businessInfo } from '../data/services';

const iconMap: Record<string, LucideIcon> = {
  Disc3,
  Printer,
  FileText,
  CreditCard,
  Coffee,
  Maximize,
  Flag,
  Contact,
  Heart,
  Sticker,
  Sparkles,
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

const whatsappUrl = `https://wa.me/91${businessInfo.whatsapp}?text=${encodeURIComponent('Hello Manav Graphics, I need printing services.')}`;

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient opacity-90" />
        <div className="absolute inset-0 bg-dark-900/60" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-magenta-400/20 rounded-full blur-3xl" />

        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-magenta-300 to-printyellow-300">Services</span>
            </h1>
            <p className="text-white/80 font-inter text-lg max-w-2xl mx-auto">
              From business cards to large banners, we offer comprehensive printing solutions tailored to your needs.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const IconComponent = iconMap[service.icon] || Printer;
              return (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  custom={i}
                  variants={fadeUp}
                  className="group bg-white rounded-2xl overflow-hidden border border-dark-100 card-hover"
                >
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-cyan-50 via-white to-magenta-50 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-animated-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 via-magenta-500 to-printyellow-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <IconComponent size={36} className="text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-poppins font-semibold text-xl text-dark-900 mb-2">{service.title}</h3>
                    <p className="text-dark-500 font-inter text-sm leading-relaxed mb-4">{service.description}</p>

                    <ul className="space-y-2 mb-5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-dark-600 font-inter text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5 rounded-lg font-inter font-medium text-sm transition-colors"
                    >
                      <MessageCircle size={16} />
                      Inquire Now
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient" />
        <div className="absolute inset-0 bg-dark-900/60" />
        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins font-bold text-2xl md:text-4xl text-white mb-4">
              Don't See What You Need?
            </h2>
            <p className="text-white/80 font-inter mb-6 max-w-xl mx-auto">
              We handle custom printing projects too. Contact us with your requirements and we'll make it happen.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-dark-900 px-8 py-4 rounded-xl font-inter font-semibold hover:bg-dark-100 transition-colors shadow-xl"
            >
              Get Custom Quote <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
