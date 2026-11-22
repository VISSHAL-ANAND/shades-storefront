export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Apparel", href: "#apparel" },
  { label: "Accessories", href: "#accessories" },
  { label: "Editorial", href: "#editorial" },
  { label: "Visit Store", href: "#store-info" },
];

export interface FooterSection {
  title: string;
  items: NavItem[];
}

export const FOOTER_NAV_SECTIONS: FooterSection[] = [
  {
    title: "Collections",
    items: [
      { label: "Shirts & Trousers", href: "#shirts-trousers" },
      { label: "Casual & Tees", href: "#casual-tees" },
      { label: "Streetwear", href: "#streetwear" },
      { label: "Curated Accessories", href: "#accessories" },
    ],
  },
  {
    title: "Store & Brand",
    items: [
      { label: "About Shades", href: "#about" },
      { label: "Studio Experience", href: "#experience" },
      { label: "Coimbatore Visit", href: "#store-info" },
      { label: "Appointments", href: "#appointments" },
    ],
  },
  {
    title: "Client Care",
    items: [
      { label: "WhatsApp Concierge (Placeholder)", href: "#concierge" },
      { label: "Sizing & Fit Guide", href: "#sizing" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
    ],
  },
];
