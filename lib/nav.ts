export type NavItem = { href: string; label: string };

export const PRIMARY_NAV: NavItem[] = [
  { href: "/aplicatie", label: "Aplicație" },
  { href: "/dezvoltatori", label: "Dezvoltatori" },
  { href: "/comparatie/eidromania", label: "Comparație" },
  { href: "/preturi", label: "Prețuri" },
];

export const FOOTER_NAV: { title: string; items: NavItem[] }[] = [
  {
    title: "Produs",
    items: [
      { href: "/aplicatie", label: "Aplicație" },
      { href: "/dezvoltatori", label: "Dezvoltatori" },
      { href: "/comparatie/eidromania", label: "Comparație" },
      { href: "/preturi", label: "Prețuri" },
    ],
  },
  {
    title: "Companie",
    items: [
      { href: "/cum-construim", label: "Cum construim" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { href: "/legal/confidentialitate", label: "Confidențialitate" },
      { href: "/legal/termeni", label: "Termeni" },
    ],
  },
];
