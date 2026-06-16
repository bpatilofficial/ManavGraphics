import { motion, type Variants } from 'framer-motion';
import { Printer, Award, Users, CheckCircle, Target, Eye } from 'lucide-react';
import { stats } from '../data/services';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const milestones = [
  { year: '1996', event: 'Manav Graphics was founded in Pune with a passion for quality printing.' },
  { year: '2005', event: 'Expanded to digital printing with state-of-the-art equipment.' },
  { year: '2012', event: 'Crossed 2000+ satisfied customers milestone.' },
  { year: '2020', event: 'Added wide-format and custom printing capabilities.' },
  { year: '2026', event: 'Celebrating 30 years of trusted service and 5000+ orders completed.' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient opacity-90" />
        <div className="absolute inset-0 bg-dark-900/60" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-printyellow-400/20 rounded-full blur-3xl" />

        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-magenta-300 to-printyellow-300">Manav Graphics</span>
            </h1>
            <p className="text-white/80 font-inter text-lg max-w-2xl mx-auto">
              Three decades of dedication to quality printing and customer satisfaction in Pune.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.p variants={fadeUp} custom={0} className="text-cyan-600 font-inter font-semibold text-sm uppercase tracking-wider mb-2">
                Our Story
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-poppins font-bold text-3xl md:text-4xl text-dark-900 mb-6">
                30 Years of <span className="gradient-text">Printing Excellence</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-dark-600 font-inter leading-relaxed mb-4">
                Founded in 1996, Manav Graphics started as a small printing shop in Pimple Gurav, Pune, with a simple mission — to provide high-quality printing services that our customers can rely on. Over the past three decades, we have grown from a humble beginning to becoming one of the most trusted printing service providers in the region.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-dark-600 font-inter leading-relaxed mb-4">
                Our journey has been defined by our unwavering commitment to quality, our investment in modern printing technology, and most importantly, the trust our customers place in us. From business cards to large-format banners, from wedding invitations to corporate ID cards — we handle it all with the same level of care and precision.
              </motion.p>
              <motion.p variants={fadeUp} custom={4} className="text-dark-600 font-inter leading-relaxed">
                Today, as we celebrate 30 years in business, we remain as committed as ever to delivering exceptional results that exceed our customers' expectations. Every print that leaves our shop carries our promise of quality.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-cyan-50 via-white to-magenta-50 rounded-2xl flex items-center justify-center border border-dark-100">
                <div className="text-center">
                  <Printer size={64} className="text-dark-300 mx-auto mb-3" />
                  <p className="text-dark-400 font-inter text-sm">Workspace Photo</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-animated-gradient rounded-xl opacity-20 blur-lg" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-400 rounded-xl opacity-20 blur-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: 'Our Mission', text: 'To deliver exceptional printing solutions that combine quality, creativity, and reliability. We strive to make professional printing accessible to businesses and individuals alike, ensuring every project receives the attention to detail it deserves.' },
              { icon: Eye, title: 'Our Vision', text: 'To be the most trusted and preferred printing partner in Pune, known for our commitment to quality, innovation in printing techniques, and dedication to customer satisfaction. We envision growing alongside our customers, helping their ideas come to life in print.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                custom={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 border border-dark-100"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-magenta-500 flex items-center justify-center mb-5">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-dark-900 mb-3">{item.title}</h3>
                <p className="text-dark-500 font-inter leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
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
                <div className="flex items-center justify-center gap-3 mb-2">
                  {i === 0 && <Award size={28} className="text-printyellow-400" />}
                  {i === 1 && <Users size={28} className="text-cyan-400" />}
                  {i === 2 && <CheckCircle size={28} className="text-magenta-400" />}
                  <div className="font-poppins font-bold text-4xl md:text-5xl text-white">
                    {stat.value}{stat.suffix}
                  </div>
                </div>
                <div className="text-white/70 font-inter text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} custom={0} className="text-cyan-600 font-inter font-semibold text-sm uppercase tracking-wider mb-2">
              Our Journey
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-poppins font-bold text-3xl md:text-4xl text-dark-900">
              Key <span className="gradient-text">Milestones</span>
            </motion.h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={i}
                variants={fadeUp}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-magenta-500 flex items-center justify-center text-white font-poppins font-bold text-xs shrink-0">
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-dark-200 mt-2" />
                  )}
                </div>
                <div className="pt-2 pb-6">
                  <p className="text-dark-600 font-inter leading-relaxed">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-poppins font-bold text-3xl md:text-4xl text-dark-900 mb-6">
              Our <span className="gradient-text">Commitment</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-dark-500 font-inter leading-relaxed mb-8">
              At Manav Graphics, we believe that every print tells a story. Whether it's a wedding card that celebrates love, a business card that opens doors, or a banner that announces your presence — we pour our expertise and passion into every project. Our commitment to quality is not just a promise, it's the foundation of everything we do.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-wrap justify-center gap-4">
              {['Premium Materials', 'Expert Craftsmanship', 'On-Time Delivery', 'Customer First'].map((value) => (
                <span
                  key={value}
                  className="inline-flex items-center gap-2 bg-white text-dark-700 px-4 py-2 rounded-lg font-inter font-medium text-sm border border-dark-100"
                >
                  <CheckCircle size={16} className="text-cyan-500" />
                  {value}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
