import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import { businessInfo, services } from '../data/services';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = `https://wa.me/91${businessInfo.whatsapp}?text=${encodeURIComponent(
    `Hello Manav Graphics, I need printing services.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient opacity-90" />
        <div className="absolute inset-0 bg-dark-900/60" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" />

        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-magenta-300 to-printyellow-300">Us</span>
            </h1>
            <p className="text-white/80 font-inter text-lg max-w-2xl mx-auto">
              Get in touch for a free quote or any inquiries. We're here to help with all your printing needs.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.p variants={fadeUp} custom={0} className="text-cyan-600 font-inter font-semibold text-sm uppercase tracking-wider mb-2">
                Get In Touch
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-poppins font-bold text-3xl md:text-4xl text-dark-900 mb-6">
                Let's Start Your <span className="gradient-text">Project</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-dark-500 font-inter leading-relaxed mb-8">
                Whether you need a quick print job or a large custom order, we're just a call or message away. Reach out to us and we'll get back to you promptly.
              </motion.p>

              <div className="space-y-5">
                {[
                  { icon: Phone, label: 'Phone', value: businessInfo.phone, href: `tel:+91${businessInfo.phone}`, color: 'text-cyan-500' },
                  { icon: MessageCircle, label: 'WhatsApp', value: businessInfo.phone, href: `https://wa.me/91${businessInfo.whatsapp}?text=${encodeURIComponent('Hello Manav Graphics, I need printing services.')}`, color: 'text-green-500' },
                  { icon: Mail, label: 'Email', value: businessInfo.email, href: `mailto:${businessInfo.email}`, color: 'text-magenta-500' },
                ].map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.label === 'WhatsApp' ? '_blank' : undefined}
                    rel={item.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    variants={fadeUp}
                    custom={i + 3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-dark-50 rounded-xl hover:bg-dark-100 transition-colors group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center ${item.color} shadow-sm group-hover:scale-105 transition-transform`}>
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="text-dark-400 font-inter text-xs uppercase tracking-wider">{item.label}</p>
                      <p className="text-dark-800 font-inter font-semibold">{item.value}</p>
                    </div>
                  </motion.a>
                ))}

                <motion.div
                  variants={fadeUp}
                  custom={6}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-dark-50 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-printyellow-500 shadow-sm shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-dark-400 font-inter text-xs uppercase tracking-wider">Address</p>
                    <p className="text-dark-800 font-inter font-semibold text-sm">{businessInfo.address}</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  custom={7}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-dark-50 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-orange-500 shadow-sm shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <p className="text-dark-400 font-inter text-xs uppercase tracking-wider">Business Hours</p>
                    <div className="text-dark-800 font-inter font-semibold text-sm">
                      <p>Mon - Fri: {businessInfo.hours.weekdays}</p>
                      <p>Saturday: {businessInfo.hours.saturday}</p>
                      <p>Sunday: {businessInfo.hours.sunday}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 border border-dark-100 shadow-lg">
                <h3 className="font-poppins font-semibold text-xl text-dark-900 mb-6">Send Us a Message</h3>

                {submitted && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl flex items-center gap-3">
                    <CheckCircle size={20} />
                    <span className="font-inter text-sm">Your message has been sent via WhatsApp!</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-dark-700 font-inter font-medium text-sm mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-dark-200 bg-dark-50 text-dark-800 font-inter text-sm placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-dark-700 font-inter font-medium text-sm mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-xl border border-dark-200 bg-dark-50 text-dark-800 font-inter text-sm placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-dark-700 font-inter font-medium text-sm mb-2">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-dark-200 bg-dark-50 text-dark-800 font-inter text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-dark-700 font-inter font-medium text-sm mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your printing requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-dark-200 bg-dark-50 text-dark-800 font-inter text-sm placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3.5 rounded-xl font-inter font-semibold text-sm transition-colors shadow-lg shadow-green-500/25"
                  >
                    <MessageCircle size={18} />
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-dark-50">
        <div className="container-custom mx-auto section-padding">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-10"
          >
            <motion.p variants={fadeUp} custom={0} className="text-cyan-600 font-inter font-semibold text-sm uppercase tracking-wider mb-2">
              Find Us
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-poppins font-bold text-3xl md:text-4xl text-dark-900 mb-4">
              Visit Our <span className="gradient-text">Location</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-dark-100"
          >
            <iframe
              src="https://maps.google.com/maps?q=18.5888184,73.8162596&z=16&hl=en&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Manav Graphics Location"
              className="w-full"
            />
          </motion.div>

          <div className="text-center mt-6">
            <a
              href={businessInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-600 font-inter font-medium text-sm hover:text-cyan-700 transition-colors"
            >
              <MapPin size={16} />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
