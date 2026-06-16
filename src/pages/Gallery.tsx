import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Printer } from 'lucide-react';
import { galleryCategories } from '../data/services';

const placeholderImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/assets/gallery/image-${i + 1}.jpg`,
  alt: `Manav Graphics Work Sample ${i + 1}`,
  category: galleryCategories[(i % (galleryCategories.length - 1)) + 1],
}));

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: 'easeOut' },
  }),
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? placeholderImages
    : placeholderImages.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filtered.length : null));
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient opacity-90" />
        <div className="absolute inset-0 bg-dark-900/60" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-magenta-400/20 rounded-full blur-3xl" />

        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-magenta-300 to-printyellow-300">Gallery</span>
            </h1>
            <p className="text-white/80 font-inter text-lg max-w-2xl mx-auto">
              Browse our portfolio of high-quality printing work. Every project reflects our commitment to excellence.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-lg font-inter font-medium text-sm transition-all ${
                  activeCategory === cat
                    ? 'bg-dark-900 text-white shadow-lg'
                    : 'bg-dark-100 text-dark-600 hover:bg-dark-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8 }}
                  custom={i}
                  variants={fadeUp}
                  className="break-inside-avoid mb-4 group cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <div
                    className={`relative overflow-hidden rounded-xl ${
                      i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'
                    } bg-gradient-to-br from-dark-100 to-dark-200 flex items-center justify-center`}
                  >
                    <Printer size={40} className="text-dark-300" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-5">
                      <p className="text-white font-inter font-medium text-sm">{img.alt}</p>
                      <span className="inline-block mt-2 bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                        {img.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Printer size={48} className="text-dark-300 mx-auto mb-4" />
              <p className="text-dark-400 font-inter">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark-900/95 lightbox-overlay flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 transition-colors z-10"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 text-white/80 hover:text-white p-2 transition-colors z-10"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 text-white/80 hover:text-white p-2 transition-colors z-10"
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl max-h-[80vh] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full min-h-[60vh] bg-gradient-to-br from-dark-200 to-dark-300 flex items-center justify-center rounded-xl">
                <div className="text-center">
                  <Printer size={64} className="text-dark-400 mx-auto mb-4" />
                  <p className="text-dark-500 font-inter">{filtered[lightboxIndex]?.alt}</p>
                  <p className="text-dark-400 font-inter text-sm mt-2">
                    {lightboxIndex + 1} / {filtered.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
