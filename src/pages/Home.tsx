import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Printer,
  Zap,
  Wallet,
  Palette,
  Users,
  ThumbsUp,
  Phone,
  MessageCircle,
  FileText,
  ArrowRight,
  Star,
  CheckCircle,
} from 'lucide-react';
import { services, testimonials, stats, businessInfo } from '../data/services';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const whyChooseUs = [
  { icon: Printer, title: 'High Quality Printing', desc: 'Premium quality prints with vibrant colors and sharp details every time.', color: 'from-cyan-500 to-cyan-600' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround times without compromising on quality or accuracy.', color: 'from-printyellow-500 to-printyellow-600' },
  { icon: Wallet, title: 'Affordable Pricing', desc: 'Competitive prices with no hidden costs. Best value for your money.', color: 'from-green-500 to-green-600' },
  { icon: Palette, title: 'Custom Designs', desc: 'Unique custom designs tailored to your brand and requirements.', color: 'from-magenta-500 to-magenta-600' },
  { icon: Users, title: 'Experienced Team', desc: '30+ years of expertise in delivering exceptional printing solutions.', color: 'from-blue-500 to-blue-600' },
  { icon: ThumbsUp, title: 'Customer Satisfaction', desc: '1000+ happy customers and counting. Your satisfaction is our priority.', color: 'from-orange-500 to-orange-600' },
];

const whatsappUrl = `https://wa.me/91${businessInfo.whatsapp}?text=${encodeURIComponent('Hello Manav Graphics, I need printing services.')}`;

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-animated-gradient opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-900/40 to-dark-900/80" />

        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-magenta-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-printyellow-400/10 rounded-full blur-3xl" />

        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-inter mb-6"
            >
              <CheckCircle size={16} className="text-printyellow-400" />
              Celebrating 30 Years of Quality Service
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
            >
              Professional{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-magenta-300 to-printyellow-300">
                Printing & Designing
              </span>{' '}
              Solutions in Pune
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 font-inter max-w-2xl mb-8 leading-relaxed"
            >
              Your trusted partner for all printing needs. From business cards to large banners,
              we deliver quality that speaks for itself.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={`tel:+91${businessInfo.phone}`}
                className="flex items-center gap-2 bg-white text-dark-900 px-6 py-3.5 rounded-xl font-inter font-semibold text-sm hover:bg-dark-100 transition-colors shadow-xl"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-6 py-3.5 rounded-xl font-inter font-semibold text-sm hover:bg-green-600 transition-colors shadow-xl"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3.5 rounded-xl font-inter font-semibold text-sm hover:bg-white/20 transition-colors"
              >
                <FileText size={18} />
                Get Quote
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} custom={0} className="text-cyan-600 font-inter font-semibold text-sm uppercase tracking-wider mb-2">
              Why Choose Us
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-poppins font-bold text-3xl md:text-4xl text-dark-900 mb-4">
              The <span className="gradient-text">Manav Graphics</span> Difference
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-dark-500 font-inter max-w-2xl mx-auto">
              Experience the perfect blend of quality, speed, and affordability that has kept our customers coming back for 30 years.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={i}
                variants={fadeUp}
                className="group relative bg-white rounded-2xl p-6 border border-dark-100 card-hover"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-dark-900 mb-2">{item.title}</h3>
                <p className="text-dark-500 font-inter text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} custom={0} className="text-cyan-600 font-inter font-semibold text-sm uppercase tracking-wider mb-2">
              Our Services
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-poppins font-bold text-3xl md:text-4xl text-dark-900 mb-4">
              What We <span className="gradient-text">Offer</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map((service, i) => (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={i}
                variants={fadeUp}
                className="group bg-white rounded-2xl overflow-hidden border border-dark-100 card-hover"
              >
                <div className="h-40 bg-gradient-to-br from-cyan-50 via-magenta-50 to-printyellow-50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-animated-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-magenta-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Printer size={28} className="text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-poppins font-semibold text-base text-dark-900 mb-2">{service.title}</h3>
                  <p className="text-dark-500 font-inter text-sm leading-relaxed mb-3 line-clamp-2">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-cyan-600 font-inter font-medium text-sm hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={8}
            className="text-center mt-10"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-dark-900 text-white px-8 py-3.5 rounded-xl font-inter font-semibold text-sm hover:bg-dark-800 transition-colors"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient" />
        <div className="absolute inset-0 bg-dark-900/80" />
        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <div className="font-poppins font-bold text-4xl md:text-5xl text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-white/70 font-inter text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} custom={0} className="text-cyan-600 font-inter font-semibold text-sm uppercase tracking-wider mb-2">
              Our Work
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-poppins font-bold text-3xl md:text-4xl text-dark-900 mb-4">
              Recent <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-dark-500 font-inter max-w-2xl mx-auto">
              Take a look at some of our latest printing work. Quality you can see and feel.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={i}
                variants={fadeUp}
                className={`relative group overflow-hidden rounded-xl ${
                  i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="aspect-square bg-gradient-to-br from-dark-100 to-dark-200 flex items-center justify-center">
                  <Printer size={32} className="text-dark-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-inter text-sm">Sample Work {i + 1}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={8}
            className="text-center mt-10"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 border-2 border-dark-900 text-dark-900 px-8 py-3.5 rounded-xl font-inter font-semibold text-sm hover:bg-dark-900 hover:text-white transition-colors"
            >
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} custom={0} className="text-cyan-600 font-inter font-semibold text-sm uppercase tracking-wider mb-2">
              Testimonials
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-poppins font-bold text-3xl md:text-4xl text-dark-900 mb-4">
              What Our <span className="gradient-text">Customers Say</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 border border-dark-100"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-printyellow-400 text-printyellow-400" />
                  ))}
                </div>
                <p className="text-dark-600 font-inter text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-magenta-400 flex items-center justify-center text-white font-poppins font-semibold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-sm text-dark-900">{t.name}</p>
                    <p className="text-dark-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient" />
        <div className="absolute inset-0 bg-dark-900/60" />
        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins font-bold text-3xl md:text-5xl text-white mb-4">
              Need Printing Services?
            </h2>
            <p className="text-white/80 font-inter text-lg mb-8 max-w-2xl mx-auto">
              Contact Manav Graphics Today! Get high-quality prints at affordable prices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:+91${businessInfo.phone}`}
                className="flex items-center gap-2 bg-white text-dark-900 px-8 py-4 rounded-xl font-inter font-semibold hover:bg-dark-100 transition-colors shadow-xl"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-inter font-semibold hover:bg-green-600 transition-colors shadow-xl"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
