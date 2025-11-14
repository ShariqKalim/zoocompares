// Predefined logo URLs for popular services
export const LOGO_LIBRARY = [
  // Web Hosting
  { category: 'Web Hosting', name: 'Bluehost', url: 'https://logo.clearbit.com/bluehost.com' },
  { category: 'Web Hosting', name: 'SiteGround', url: 'https://logo.clearbit.com/siteground.com' },
  { category: 'Web Hosting', name: 'HostGator', url: 'https://logo.clearbit.com/hostgator.com' },
  { category: 'Web Hosting', name: 'GoDaddy', url: 'https://logo.clearbit.com/godaddy.com' },
  { category: 'Web Hosting', name: 'Namecheap', url: 'https://logo.clearbit.com/namecheap.com' },
  
  // VPN Services
  { category: 'VPN', name: 'ExpressVPN', url: 'https://logo.clearbit.com/expressvpn.com' },
  { category: 'VPN', name: 'NordVPN', url: 'https://logo.clearbit.com/nordvpn.com' },
  { category: 'VPN', name: 'Surfshark', url: 'https://logo.clearbit.com/surfshark.com' },
  { category: 'VPN', name: 'CyberGhost', url: 'https://logo.clearbit.com/cyberghost.de' },
  { category: 'VPN', name: 'ProtonVPN', url: 'https://logo.clearbit.com/protonvpn.com' },
  
  // Demat & Trading
  { category: 'Demat', name: 'Zerodha', url: 'https://logo.clearbit.com/zerodha.com' },
  { category: 'Demat', name: 'Upstox', url: 'https://logo.clearbit.com/upstox.com' },
  { category: 'Demat', name: 'Angel Broking', url: 'https://logo.clearbit.com/angelbroking.com' },
  { category: 'Demat', name: 'Shoonya', url: 'https://logo.clearbit.com/shoonya.com' },
  { category: 'Demat', name: 'ICICI Direct', url: 'https://logo.clearbit.com/icicidirect.com' },
];

export function getLogosByCategory(category?: string) {
  if (!category) return LOGO_LIBRARY;
  return LOGO_LIBRARY.filter(logo => logo.category === category);
}
