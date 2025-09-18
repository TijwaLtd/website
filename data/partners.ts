export interface Partner {
  id: string;
  name: string;
  logo: string;
  url: string;
  category: 'strategic' | 'implementation' | 'funding';
}

export const partners: Partner[] = [
  {
    id: 'partner1',
    name: 'Partner 1',
    logo: '/partners/partner1.png',
    url: '#',
    category: 'strategic'
  },
  {
    id: 'partner2',
    name: 'Partner 2',
    logo: '/partners/partner2.png',
    url: '#',
    category: 'implementation'
  },
  {
    id: 'partner3',
    name: 'Partner 3',
    logo: '/partners/partner3.png',
    url: '#',
    category: 'funding'
  },
  // Add more partners as needed
];
