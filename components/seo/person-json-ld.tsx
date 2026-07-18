import { profile, siteUrl } from '@/lib/profile'

export function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteUrl}/#profile`,
    url: siteUrl,
    dateModified: '2026-07-18',
    mainEntity: {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: profile.name,
      additionalName: 'Thomas',
      url: siteUrl,
      image: `${siteUrl}/stephen-mccarthy-professional.jpg`,
      description:
        'Public records identify Stephen Thomas McCarthy as a physician assistant in Pennsylvania. Current licensure and certification should be verified through the official registries linked on this site.',
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'NPI',
        value: profile.npi,
      },
      sameAs: [profile.links.linkedin, profile.links.doximity, profile.links.npi],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
