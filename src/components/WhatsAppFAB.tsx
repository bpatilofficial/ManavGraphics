import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/services';

export default function WhatsAppFAB() {
  const whatsappUrl = `https://wa.me/91${businessInfo.whatsapp}?text=${encodeURIComponent('Hello Manav Graphics, I need printing services.')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 transition-colors group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={28} />
      <span className="absolute -top-10 right-0 bg-dark-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
