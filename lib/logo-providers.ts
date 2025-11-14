export interface LogoProvider {
  name: string;
  getLogoUrl: (domain: string) => string;
  description: string;
}

export const logoDev: LogoProvider = {
  name: 'logo.dev',
  getLogoUrl: (domain: string) => {
    const cleanDomain = domain.replace(/^https?:\/\//, '').replace(/\/$/, '').split('/')[0].trim();
    if (!cleanDomain) return '';
    return `https://img.logo.dev/${cleanDomain}?format=webp&size=128&fallback=monogram&retina=true`;
  },
  description: 'Logo.dev - High-quality company logos',
};

export const clearbit: LogoProvider = {
  name: 'clearbit',
  getLogoUrl: (domain: string) => {
    const cleanDomain = domain.replace(/^https?:\/\//, '').replace(/\/$/, '').split('/')[0].trim();
    if (!cleanDomain) return '';
    return `https://logo.clearbit.com/${cleanDomain}?size=128`;
  },
  description: 'Clearbit - Professional company logos',
};

export const unavatar: LogoProvider = {
  name: 'unavatar',
  getLogoUrl: (domain: string) => {
    const cleanDomain = domain.replace(/^https?:\/\//, '').replace(/\/$/, '').split('/')[0].trim();
    if (!cleanDomain) return '';
    return `https://unavatar.io/${cleanDomain}?size=128`;
  },
  description: 'Unavatar - Minimalist logos',
};

export const LOGO_PROVIDERS = [logoDev, clearbit, unavatar];
