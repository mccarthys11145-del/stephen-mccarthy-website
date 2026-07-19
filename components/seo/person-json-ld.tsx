import { profile, siteUrl } from '@/lib/profile'

export function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#profile`,
        url: siteUrl,
        dateModified: '2026-07-18',
        mainEntity: { '@id': `${siteUrl}/#person` },
      },
      {
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
        affiliation: { '@id': `${siteUrl}/#practice` },
        sameAs: [profile.links.linkedin, profile.links.doximity, profile.links.npi],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#practice`,
        name: profile.practice.name,
        url: profile.practice.url,
        telephone: profile.practice.telephone,
        address: {
          '@type': 'PostalAddress',
          ...profile.practice.address,
        },
        openingHoursSpecification: profile.practice.hours.days.map((day) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: `https://schema.org/${day}`,
          opens: profile.practice.hours.opens,
          closes: profile.practice.hours.closes,
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
