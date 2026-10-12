import React, { useEffect } from 'react';
import { SITE_URL } from '../../config/site';

interface SeoMetadataProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schemaType?: string;
  schemaData?: Record<string, any>;
}

export const SeoMetadata: React.FC<SeoMetadataProps> = ({
  title,
  description,
  canonicalPath,
  schemaType = 'WebPage',
  schemaData
}) => {
  useEffect(() => {
    const formattedTitle = `${title} | HEXBYTE`;
    document.title = formattedTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', formattedTitle);
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    const currentPath = canonicalPath || window.location.pathname;
    const fullCanonicalUrl = `${SITE_URL}${currentPath === '/' ? '' : currentPath}`;

    // Canonical link tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', fullCanonicalUrl);

    // og:url
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', fullCanonicalUrl);

    // og:image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', `${SITE_URL}/brand/hexbyte-og-card.png`);

    // Schema.org injection
    const scriptId = 'page-schema-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      name: title,
      description: description,
      url: fullCanonicalUrl,
      publisher: {
        '@type': 'Corporation',
        name: 'HEXBYTE',
        url: SITE_URL,
        logo: `${SITE_URL}/brand/hexbyte-logo-4x1-transparent.png`
      },
      ...schemaData
    };

    script.textContent = JSON.stringify(jsonLd);

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, canonicalPath, schemaType, schemaData]);

  return null;
};
