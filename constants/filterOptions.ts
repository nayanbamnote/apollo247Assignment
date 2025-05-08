// Define enums to replace Prisma imports
export enum ConsultMode {
  PHYSICAL = "PHYSICAL",
  ONLINE = "ONLINE"
}

export enum Language {
  ENGLISH = "ENGLISH",
  HINDI = "HINDI",
  TELUGU = "TELUGU"
}

export enum Facility {
  APOLLO_HOSPITAL = "APOLLO_HOSPITAL",
  OTHER_CLINICS = "OTHER_CLINICS"
}

export const CONSULT_MODES = [
  { id: ConsultMode.PHYSICAL, label: 'Hospital Visit' },
  { id: ConsultMode.ONLINE, label: 'Online Consult' },
];

export const EXPERIENCE_RANGES = [
  { id: '0-5', label: '0-5 years' },
  { id: '6-10', label: '6-10 years' },
  { id: '11-16', label: '11-16 years' },
  { id: '17+', label: '17+ years' },
];

export const FEE_RANGES = [
  { id: '100-500', label: '₹100-₹500' },
  { id: '500-1000', label: '₹500-₹1000' },
  { id: '1000+', label: '₹1000+' },
];

export const LANGUAGES = [
  { id: Language.ENGLISH, label: 'English' },
  { id: Language.HINDI, label: 'Hindi' },
  { id: Language.TELUGU, label: 'Telugu' },
];

export const FACILITIES = [
  { id: Facility.APOLLO_HOSPITAL, label: 'Apollo Hospital' },
  { id: Facility.OTHER_CLINICS, label: 'Other Clinics' },
];

export const SORT_OPTIONS = [
  { field: 'consultationFee', direction: 'asc', label: 'Price - low to high' },
  { field: 'consultationFee', direction: 'desc', label: 'Price - high to low' },
  { field: 'experienceYears', direction: 'desc', label: 'Experience - high to low' },
  { field: 'rating', direction: 'desc', label: 'Rating - high to low' },
]; 