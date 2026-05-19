import type {
  CelebrityWork,
  FAQItem,
  GalleryImage,
  NavLink,
  Review,
  Service,
  WhyChooseItem,
} from "../types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Celebrity", href: "#celebrity" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Appointment", href: "#appointment" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    id: "bridal",
    title: "Bridal Makeup",
    description:
      "An exquisite bridal transformation that celebrates your unique beauty. Using HD and airbrush finishing techniques over 3–4 hours, every detail — from dewy skin to intricate eye artistry — is crafted to last your entire wedding day flawlessly.",
    duration: "3–4 hours · Starting ₹8,000",
    includes: [
      "Deep skin prep & primer",
      "HD + airbrush foundation",
      "Intricate eye artistry",
      "Contouring & sculpting",
      "Lips, bindi & jewellery pinning",
      "Long-wear setting spray",
    ],
    icon: "👰",
    popular: true,
  },
  {
    id: "party",
    title: "Party Makeup",
    description:
      "Glamorous evening looks designed to turn heads from cocktail parties to grand celebrations. Quick, bold, and perfectly tailored to your outfit and personality — you'll be the most luminous person in the room.",
    duration: "1.5–2 hours · Starting ₹3,000",
    includes: [
      "Full face prep & base",
      "Smokey or glam eye look",
      "Bold or nude lip choice",
      "Highlight & blinding glow",
    ],
    icon: "✨",
  },
  {
    id: "hd",
    title: "HD Makeup",
    description:
      "Camera-ready precision makeup that looks flawless both on-screen and in person. Ideal for photoshoots, TV appearances, film sets, and reception events where every pixel matters.",
    duration: "2–2.5 hours · Starting ₹5,000",
    includes: [
      "HD micropore primer",
      "Full-coverage HD foundation",
      "Pixel-perfect seamless finish",
      "Professional lighting compatibility",
    ],
    icon: "🎥",
  },
  {
    id: "airbrush",
    title: "Airbrush Makeup",
    description:
      "Ultra-lightweight, breathable airbrush coverage that delivers a flawless, humidity-resistant finish lasting 12–16 hours. Perfect for outdoor weddings and events in warm Indian weather.",
    duration: "2.5–3 hours · Starting ₹6,500",
    includes: [
      "Silicone-based airbrush foundation",
      "Seamless contour & blush",
      "100% waterproof finish",
      "12–16 hour sweat-proof wear",
    ],
    icon: "🌬️",
    popular: true,
  },
  {
    id: "prebridal",
    title: "Pre-Bridal Package",
    description:
      "A complete pre-wedding skin preparation and makeup trial package designed to perfect your look before the big day. Includes personalized skin assessment, product compatibility testing, and look finalization.",
    duration: "2 hours · Starting ₹4,000",
    includes: [
      "In-depth skin analysis",
      "Full trial makeup look",
      "Premium product recommendations",
      "Final look approval & documentation",
    ],
    icon: "💆",
  },
  {
    id: "reception",
    title: "Reception Makeup",
    description:
      "Post-wedding glam with rich Indian traditional elements. Bold, regal reception looks featuring dramatic eyes, vibrant lips, and sophisticated contouring that photograph beautifully at every reception party.",
    duration: "2–2.5 hours · Starting ₹5,500",
    includes: [
      "Rich Indian traditional base",
      "Dramatic reception eyes",
      "Bold vibrant lips",
      "Regal contouring & highlights",
    ],
    icon: "💍",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Pinkie di is absolutely magical! My bridal makeup was everything I had dreamed of — flawless HD finish, beautiful eye work, and it lasted the entire 12-hour wedding day without a single touch-up. I cried happy tears and my makeup was still perfect! Every guest was asking who did my makeup. She is a true blessing for any bride.",
    occasion: "Bridal Makeup, Mumbai",
    avatar: "PS",
  },
  {
    id: "r2",
    name: "Anjali Desai",
    location: "Pune, Maharashtra",
    rating: 5,
    text: "My engagement makeup by Pinkie was absolutely glowing and romantic — exactly what I had envisioned. She understood my skin tone perfectly and created the most dewy, radiant look. All my relatives were asking for her number on the spot! Best investment I made for my engagement. She turns brides into queens.",
    occasion: "Engagement Makeup, Pune",
    avatar: "AD",
  },
  {
    id: "r3",
    name: "Meera Patel",
    location: "Thane, Maharashtra",
    rating: 5,
    text: "Pinkie did airbrush makeup for my sister's big fat Marathi wedding and we were speechless. Her skin looked like porcelain — absolutely flawless, breathable, and it lasted 16 hours in summer heat! During the pheras, everyone was complimenting her glow. We have already re-booked Pinkie for two more family weddings!",
    occasion: "Airbrush Bridal Makeup, Thane",
    avatar: "MP",
  },
  {
    id: "r4",
    name: "Kavya Nair",
    location: "Kalyan, Maharashtra",
    rating: 5,
    text: "I booked Pinkie for my best friend's sangeet and reception, and both looks were absolutely stunning! The sangeet was a gorgeous festive gold-and-emerald vibe, and the reception was ultra-glamorous. She has an incredible eye for detail, works so fast, and makes you feel totally at ease. Worth every single rupee!",
    occasion: "Party & Reception Makeup, Kalyan",
    avatar: "KN",
  },
  {
    id: "r5",
    name: "Sneha Kapoor",
    location: "Navi Mumbai, Maharashtra",
    rating: 5,
    text: "My pre-bridal trial with Pinkie completely blew my mind. She spent over an hour just understanding my preferences, skin type, and the overall wedding aesthetic. The trial look itself was already better than any other artist's final work I had seen! My actual wedding day was beyond perfect. She is not just a makeup artist — she is an artist of confidence.",
    occasion: "Pre-Bridal Trial Makeup, Navi Mumbai",
    avatar: "SK",
  },
  {
    id: "r6",
    name: "Riya Joshi",
    location: "Nashik, Maharashtra",
    rating: 5,
    text: "Pinkie came all the way to Nashik for my daughter's lavish wedding and the whole experience was 11 out of 10. She did makeup for the bride, me, and all three bridesmaids. Every look was unique, stunning, and absolutely professional. Our wedding photos look like a Bollywood film! We cannot thank her enough.",
    occasion: "Group Bridal Party Makeup, Nashik",
    avatar: "RJ",
  },
  {
    id: "r7",
    name: "Divya Kulkarni",
    location: "Dombivli, Maharashtra",
    rating: 5,
    text: "I got HD makeup done for my son's wedding as the mother of the groom and I looked absolutely radiant — honestly 10 years younger! Pinkie has such a gift for understanding mature skin and enhancing natural beauty. All my friends were asking my secret and the answer is always Pinkie Thakur!",
    occasion: "HD Makeup, Dombivli",
    avatar: "DK",
  },
  {
    id: "r8",
    name: "Sonal Mehta",
    location: "Aurangabad, Maharashtra",
    rating: 5,
    text: "Hired Pinkie for a high-end corporate photoshoot and the results were magazine-worthy. She understood exactly what we needed — polished, sophisticated, camera-ready. The photos came out like a luxury brand campaign. I have now booked her for all our future editorial and event shoots. Absolute professional!",
    occasion: "Editorial & Photoshoot Makeup, Aurangabad",
    avatar: "SM",
  },
  {
    id: "r9",
    name: "Payal Singh",
    location: "Kolhapur, Maharashtra",
    rating: 5,
    text: "Pinkie did my Haldi, Mehendi, Sangeet, and Wedding Day makeup — four different looks, all absolutely perfect! She understood the energy and vibe of each ceremony and created looks that were distinct yet beautifully connected. My wedding album looks like a dream. I recommend her with all my heart to every bride-to-be!",
    occasion: "Full Wedding Makeup (4 Events), Kolhapur",
    avatar: "PS",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "f1",
    question: "How far in advance should I book for bridal makeup?",
    answer:
      "We recommend booking bridal makeup at least 2–3 months in advance, especially for wedding season (October–February). Popular dates fill up quickly. A booking amount confirms your slot.",
  },
  {
    id: "f2",
    question: "Do you offer a pre-bridal trial session?",
    answer:
      "Absolutely! A trial session is highly recommended for brides. It helps finalize your look, ensures product compatibility with your skin, and gives you full confidence on your big day. Trials are done 1–2 weeks before the wedding.",
  },
  {
    id: "f3",
    question: "What brands and products do you use?",
    answer:
      "We use only premium international and professional brands including MAC, Kryolan, NARS, Charlotte Tilbury, Huda Beauty, and Bobbi Brown. All products are dermatologically tested and skin-safe.",
  },
  {
    id: "f4",
    question: "Do you provide home or venue service?",
    answer:
      "Yes! We offer both studio visits and home/venue service across Kalyan, Thane, Dombivli, Navi Mumbai, and surrounding areas. Travel charges apply based on distance. For destination weddings, please inquire separately.",
  },
  {
    id: "f5",
    question: "How long does bridal makeup take?",
    answer:
      "Bridal makeup typically takes 3–4 hours for full preparation. We recommend starting early to allow adequate time without rushing. Please plan accordingly and inform us of your ceremony timing.",
  },
  {
    id: "f6",
    question: "Is airbrush makeup better than regular makeup?",
    answer:
      "Airbrush makeup provides an ultra-lightweight, breathable finish that is perfect for photography and long events. It's ideal for brides who prefer a natural skin-like finish. Regular HD makeup is better for bold, high-coverage looks. We'll help you choose based on your preference.",
  },
  {
    id: "f7",
    question: "Do you do makeup for the entire bridal party?",
    answer:
      "Yes! We can accommodate the bride, bridesmaids, family members, and mother of the bride. Group bookings are available with special packages. Please reach out for customized group pricing.",
  },
  {
    id: "f8",
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "We require 48 hours notice for rescheduling. The booking amount is non-refundable but is transferable to a new date. For last-minute cancellations, 50% of the service amount may be charged.",
  },
  {
    id: "f9",
    question: "Do you cater to all skin tones and types?",
    answer:
      "Absolutely! Pinkie specializes in makeup for all Indian skin tones — from the fairest to the deepest. She has an extensive shade range and is skilled in working with dry, oily, combination, and sensitive skin types.",
  },
];

export const CELEBRITY_WORKS: CelebrityWork[] = [
  {
    id: "c1",
    name: "Bollywood Film Promotion",
    description:
      "Official makeup artist for a leading Bollywood actress during her Mumbai film promotional tour — delivering flawless HD camera-ready looks across press conferences, magazine shoots, and red-carpet events across Maharashtra.",
    occasion: "Bollywood Film Production",
    compliment:
      '"Pinkie is a true artist. She made me look absolutely stunning for every camera angle. Her understanding of HD and film makeup is exceptional — I\'ve worked with many artists, but Pinkie stands out as the very best." — Bollywood Actress',
  },
  {
    id: "c2",
    name: "Television Serial Lead Actress",
    description:
      "Exclusive makeup artist for the lead actress of a prime-time Sony Entertainment TV serial, crafting on-screen character looks and special episode glam for over 6 months of production in Mumbai.",
    occasion: "Television & Media",
    compliment:
      '"Pinkie understands the demands of television perfectly. My character looks were always consistent, expressive, and absolutely camera-perfect. She\'s a gem on any TV set!" — Sony TV Lead Actress',
  },
  {
    id: "c3",
    name: "Mumbai Fashion Week Runway",
    description:
      "Backstage lead makeup artist for three designer collections at Lakme Fashion Week, creating avant-garde editorial looks for 20+ models. Her work was featured in Vogue India and Harper's Bazaar.",
    occasion: "Fashion & Editorial",
    compliment:
      '"The runway looks Pinkie created were absolutely breathtaking. She works with precision and speed under pressure — exactly what fashion week demands. Truly world-class artistry!" — Award-Winning Fashion Designer',
  },
  {
    id: "c4",
    name: "Celebrity High-Profile Wedding",
    description:
      "Trusted bridal and family makeup artist for a well-known Maharashtra socialite's daughter's destination wedding in Udaipur. Pinkie handled makeup for the entire bridal party across 4 events spanning 3 days.",
    occasion: "High-Profile Celebrity Bridal",
    compliment:
      '"Every single look Pinkie created over our 3-day wedding was perfect. From mehendi to reception, she made every woman look and feel like a queen. She is the only artist I will ever trust for life\'s biggest moments." — Mumbai Socialite',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    src: "/assets/images/makeup-1.png",
    alt: "Bridal look — floral hair with orange saree",
    category: "Bridal",
  },
  {
    id: "g2",
    src: "/assets/images/makeup-2.png",
    alt: "Bride in red lehenga — full bridal glam",
    category: "Bridal",
  },
  {
    id: "g3",
    src: "/assets/images/makeup-3.png",
    alt: "Bridal closeup — maang tikka & pink lips",
    category: "Bridal",
  },
  {
    id: "g4",
    src: "/assets/images/makeup-4.png",
    alt: "Makeup artistry in progress",
    category: "Party",
  },
  {
    id: "g5",
    src: "/assets/images/makeup-5.png",
    alt: "Party glam — pink suit & diamond jewelry",
    category: "Party",
  },
  {
    id: "g6",
    src: "/assets/images/makeup-6.png",
    alt: "Bengali bridal makeup — traditional look",
    category: "Bridal",
  },
  {
    id: "g7",
    src: "/assets/images/makeup-7.png",
    alt: "Pinkie Thakur at work — professional studio setup",
    category: "Celebrity",
  },
  {
    id: "g8",
    src: "/assets/images/makeup-8.png",
    alt: "Party ready — orange saree elegance",
    category: "Party",
  },
  {
    id: "g9",
    src: "/assets/images/makeup-9.png",
    alt: "Celebrity event — glamorous duo at wedding",
    category: "Celebrity",
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: "w1",
    title: "10+ Years of Artistry",
    description:
      "Over a decade of professional makeup experience crafting looks for brides, celebrities, and editorial shoots across Maharashtra.",
    icon: "⭐",
  },
  {
    id: "w2",
    title: "Premium Products Only",
    description:
      "Exclusively using MAC, Kryolan, Charlotte Tilbury, NARS, and other top-tier brands to ensure the best results for your skin.",
    icon: "💄",
  },
  {
    id: "w3",
    title: "Celebrity & Film Portfolio",
    description:
      "Trusted by Bollywood productions, TV shows, and high-profile weddings. Your makeup is in the hands of an industry professional.",
    icon: "🎬",
  },
  {
    id: "w4",
    title: "All Skin Tones Welcome",
    description:
      "Specialized in all Indian skin tones and types. Every client receives a personalized consultation for a perfectly tailored look.",
    icon: "🤎",
  },
  {
    id: "w5",
    title: "Home & Venue Service",
    description:
      "We come to you — available for home visits and venue services across Kalyan, Thane, Dombivli, Navi Mumbai, and beyond.",
    icon: "🏠",
  },
  {
    id: "w6",
    title: "Hygiene & Safety First",
    description:
      "Strict hygiene protocols, single-use applicators, and sanitized tools for every client. Your safety is our top priority.",
    icon: "🛡️",
  },
];
