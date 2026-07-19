export const siteUrl = 'https://stephenmccarthypa.com'

const practice = {
  name: 'Lehigh Valley Wellness',
  url: 'https://lehighwellness.org/',
  phone: '(484) 619-2876',
  telephone: '+14846192876',
  address: {
    streetAddress: '6081 Hamilton Blvd, Suite 600',
    addressLocality: 'Allentown',
    addressRegion: 'PA',
    postalCode: '18106',
    addressCountry: 'US',
  },
  hours: {
    days: ['Monday', 'Thursday'],
    opens: '10:00',
    closes: '18:00',
    display: 'Monday and Thursday, 10 a.m.–6 p.m.',
  },
} as const

export const profile = {
  name: 'Stephen McCarthy',
  fullName: 'Stephen Thomas McCarthy',
  npi: '1912308743',
  location: 'Lehigh Valley, Pennsylvania',
  lastReviewed: 'July 18, 2026',
  practice,
  links: {
    npi: 'https://npiregistry.cms.hhs.gov/provider-view/1912308743',
    paLicense: 'https://www.pals.pa.gov/pages/default.html',
    nccpa: 'https://portal.nccpa.net/verifypac',
    federalRegister:
      'https://www.federalregister.gov/documents/2024/09/03/2024-19730/stephen-mccarthy-pa-decision-and-order',
    thirdCircuit:
      'https://law.justia.com/cases/federal/appellate-courts/ca3/24-2704/24-2704-2025-07-21.html',
    linkedin: 'https://www.linkedin.com/in/stephenmccarthypa',
    doximity: 'https://www.doximity.com/pub/stephen-mccarthy-pa-5ad36978',
    practice: practice.url,
  },
} as const
