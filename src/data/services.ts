export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: string;
  gallery?: string;
};

export const services: Service[] = [
  {
    id: 'cd-dvd-printing',
    title: 'CD & DVD Printing',
    description: 'High-quality CD and DVD printing with vibrant colors and professional finishes for your media needs.',
    icon: 'Disc3',
    features: ['Full-color printing', 'Custom labels', 'Bulk orders', 'Quick turnaround'],
    category: 'Digital Printing',
    gallery: 'dvd-printing',
  },
  {
    id: 'digital-printing',
    title: 'Digital Printing',
    description: 'State-of-the-art digital printing for crisp, clear, and vibrant results on any material.',
    icon: 'Printer',
    features: ['High resolution', 'Any quantity', 'Fast delivery', 'Cost effective'],
    category: 'Digital Printing',
    gallery: 'digital-printing',
  },
  {
    id: 'paper-printing',
    title: 'Paper Printing',
    description: 'Professional paper printing services for documents, flyers, brochures, and more.',
    icon: 'FileText',
    features: ['Multiple paper types', 'Various sizes', 'Color & B&W', 'Finishing options'],
    category: 'Digital Printing',
  },
  {
    id: 'id-card-printing',
    title: 'ID Card Printing',
    description: 'Durable and professional ID cards for corporate, school, and organizational use.',
    icon: 'CreditCard',
    features: ['PVC cards', 'Lamination', 'Custom design', 'Bulk orders'],
    category: 'ID Cards',
    gallery: 'id-cards',
  },
  {
    id: 'mug-printing',
    title: 'Mug Printing',
    description: 'Custom mug printing with photo-quality images and personalized designs for gifting and branding.',
    icon: 'Coffee',
    features: ['Photo printing', 'Dishwasher safe', 'Custom designs', 'Gift packaging'],
    category: 'Mug Printing',
    gallery: 'mug-printing',
  },
  {
    id: 'flex-printing',
    title: 'Flex Printing',
    description: 'Large format flex printing for hoardings, signboards, and outdoor advertising displays.',
    icon: 'Maximize',
    features: ['Weather resistant', 'Any size', 'Vibrant colors', 'Indoor & outdoor'],
    category: 'Flex Printing',
    gallery: 'flex-printing',
  },
  {
    id: 'banner-printing',
    title: 'Banner Printing',
    description: 'Eye-catching banners for events, promotions, and business advertising with premium quality.',
    icon: 'Flag',
    features: ['Vinyl banners', 'Standee printing', 'Roll-up banners', 'Custom sizes'],
    category: 'Banners',
  },
  {
    id: 'visiting-cards',
    title: 'Visiting Cards',
    description: 'Premium visiting cards that make a lasting impression with professional design and printing.',
    icon: 'Contact',
    features: ['Multiple finishes', 'Lamination', 'Spot UV', 'Embossing'],
    category: 'Digital Printing',
  },
  {
    id: 'wedding-cards',
    title: 'Wedding Cards',
    description: 'Elegant and beautifully crafted wedding invitation cards with custom designs and premium materials.',
    icon: 'Heart',
    features: ['Custom designs', 'Premium paper', 'Box packaging', 'Traditional & modern'],
    category: 'Wedding Cards',
    gallery: 'wedding-cards',
  },
  {
    id: 'sticker-printing',
    title: 'Sticker Printing',
    description: 'Custom sticker printing in any shape and size for branding, packaging, and promotional use.',
    icon: 'Sticker',
    features: ['Die-cut shapes', 'Waterproof', 'Vinyl stickers', 'Bulk orders'],
    category: 'Digital Printing',
  },
  {
    id: 'custom-printing',
    title: 'Custom Printing',
    description: 'Have a unique printing need? We handle custom projects with precision and creativity.',
    icon: 'Sparkles',
    features: ['Any material', 'Any design', 'Expert consultation', 'Flexible options'],
    category: 'Digital Printing',
  },
];

// Each collection maps a gallery folder (public/gallery/<key>/) to a display
// label and the number of images it holds (named 1.jpeg ... N.jpeg).
export const galleryCollections = [
  { key: 'digital-printing', label: 'Digital Printing', count: 7 },
  { key: 'dvd-printing', label: 'CD & DVD Printing', count: 12 },
  { key: 'wedding-cards', label: 'Wedding Cards', count: 6 },
  { key: 'id-cards', label: 'ID Cards', count: 8 },
  { key: 'flex-printing', label: 'Flex Printing', count: 6 },
  { key: 'mug-printing', label: 'Mug Printing', count: 3 },
] as const;

export const galleryCategories = ['All', ...galleryCollections.map((c) => c.label)];

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
};

// Path to a gallery image, prefixed with the Vite base URL so it resolves
// correctly under GitHub Pages (served from /ManavGraphics/).
export function galleryImageSrc(key: string, n: number): string {
  return `${import.meta.env.BASE_URL}gallery/${key}/${n}.jpeg`;
}

// Flat list of every gallery image, in collection order.
export const galleryImages: GalleryImage[] = galleryCollections.flatMap((c) =>
  Array.from({ length: c.count }, (_, i) => ({
    id: `${c.key}-${i + 1}`,
    src: galleryImageSrc(c.key, i + 1),
    alt: `${c.label} sample ${i + 1}`,
    category: c.label,
  }))
);

export const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Business Owner',
    text: 'Manav Graphics has been our go-to printer for 10+ years. Their quality is unmatched and delivery is always on time. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Patil',
    role: 'Event Manager',
    text: 'The wedding cards they printed for my daughter were absolutely stunning. Beautiful designs and premium quality paper. Thank you!',
    rating: 5,
  },
  {
    name: 'Amit Deshmukh',
    role: 'Marketing Manager',
    text: 'Best flex and banner printing in Pune. Vibrant colors, great durability, and very reasonable prices. Will definitely come back!',
    rating: 5,
  },
  {
    name: 'Sunita Kulkarni',
    role: 'School Principal',
    text: 'We get all our ID cards and certificates printed here. Professional quality, quick service, and they always meet our deadlines.',
    rating: 5,
  },
];

export const businessInfo = {
  name: 'Manav Graphics',
  tagline: 'Celebrating 30 Years of Quality Service',
  shortDesc: 'Your Trusted Partner in Printing Solutions',
  phone: '7741861337',
  email: 'Graphicsmanav07@gmail.com',
  whatsapp: '7741861337',
  address: 'Manav Graphics All Type Designing & Printing, S.No 25/5/1 Flat No. 10, Tuljabhawani Nagar, Chandrabhaga Complex, Pimple Gurav, Pune - 411061',
  mapsUrl: 'https://maps.app.goo.gl/5AN8ab5gD423wSVt9',
  hours: {
    weekdays: '9:00 AM - 8:00 PM',
    saturday: '9:00 AM - 6:00 PM',
    sunday: 'Closed',
  },
};

export const stats = [
  { label: 'Years Experience', value: 30, suffix: '+' },
  { label: 'Happy Customers', value: 1000, suffix: '+' },
  { label: 'Orders Completed', value: 5000, suffix: '+' },
];
