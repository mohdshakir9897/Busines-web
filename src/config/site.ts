/**
 * Global Site & Brand Configuration
 * Change SITE_URL here to update canonicals, robots, sitemap, Open Graph, and schema.org.
 */

export const SITE_URL = 'https://hexbyte.com';

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  youtube?: string;
  discord?: string;
}

/**
 * Social links. Unconfirmed links are set to '#' and automatically hidden from the UI until set.
 */
export const SOCIAL_LINKS: SocialLinks = {
  twitter: '#',
  linkedin: '#',
  github: '#',
  youtube: '#',
  discord: '#',
};

/**
 * Helper to get only active, confirmed social links (not '#', not empty)
 */
export const getActiveSocialLinks = () => {
  return (Object.entries(SOCIAL_LINKS) as [keyof SocialLinks, string][]).filter(
    ([_, url]) => url && url.trim() !== '#' && url.trim() !== ''
  );
};
