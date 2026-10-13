// ---------------------------------------------------------------------------
// SITE SETTINGS — edit this one file to change contact details, social links,
// testimonials and other facts shown across the whole site.
// ---------------------------------------------------------------------------

export const SITE = {
  name: 'Dr. Frank-Valere Yussa',
  nameWithDegree: 'Frank-Valere Yussa, PhD',
  role: 'Corporate lawyer and economist',
  url: 'https://frankyussa.com',

  // Public contact email shown on the site.
  // (Contact-form messages are sent to CONTACT_TO_EMAIL — see README.)
  email: 'franckrussia119@gmail.com',

  // Social profiles. Leave a value empty ('') to hide that icon everywhere.
  social: {
    linkedin: '',
    facebook: '',
    instagram: '',
    x: '',
    youtube: '',
  },
}

export const LANGUAGES = [
  { name: 'English', level: 'Native' },
  { name: 'French', level: 'C1' },
  { name: 'Russian', level: 'C2' },
  { name: 'Spanish', level: 'C1' },
  { name: 'Arabic', level: 'A2' },
  { name: 'Ukrainian', level: '' },
  { name: 'Pidgin', level: '' },
  { name: 'Fefe’e', level: '' },
  { name: 'Bafaw', level: '' },
]

export const REGIONS = ['Africa', 'Russia & CIS', 'Eastern Europe', 'Western Europe', 'Latin America']

// Client testimonials. The section appears on the homepage only once at least
// one entry is added here. Example:
// { quote: 'Frank structured our entry into ...', name: 'Jane Doe', role: 'CEO, Company' },
export const TESTIMONIALS: { quote: string; name: string; role: string }[] = []

export const DISSERTATION_URL =
  'https://www.rudn.ru/science/dissovet/dissertacionnye-sovety/pds-0600001/a2ac5e82-5d6c-4b0a-b367-becdb77b1058'
