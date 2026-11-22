export interface NavItem {
  label: string;
  href: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Visit Store", href: "#store-info" },
];

export interface FooterSection {
  title: string;
  items: NavItem[];
}

export const FOOTER_NAV_SECTIONS: FooterSection[] = [
  {
    title: "Visit Shades",
    items: [{ label: "Store Information", href: "#store-info" }],
  },
];
