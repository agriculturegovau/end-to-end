export interface operation {
  action: string;
  subject: string;
}

export interface Establishment {
  estNo: string;
  name: string;
  postCode: string;
  state: string;
  operations: operation[];
}

export const establishments: Establishment[] = [
  {
    estNo: '1',
    name: 'BDD AUSTRALIA PTY LTD',
    postCode: '4520',
    state: 'QLD',
    operations: [
      { action: 'Producing', subject: 'butter and butter products' },
      { action: 'Producing', subject: 'cream and cream products' },
      { action: 'Producing', subject: 'hard cheese' },
      { action: 'Producing', subject: 'membrane & ultrafiltration products' },
      { action: 'Producing', subject: 'milk and milk products' },
      { action: 'Producing', subject: 'semi hard cheese' },
      { action: 'Packing', subject: 'butter and butter products' },
      { action: 'Packing', subject: 'cream and cream products' },
      { action: 'Packing', subject: 'hard cheese' },
      { action: 'Packing', subject: 'membrane & ultrafiltration products' },
      { action: 'Packing', subject: 'semi hard cheese' },
      { action: 'Storing', subject: 'dairy commodity(chilled, unrefrigerated)' },
    ],
  },
  {
    estNo: '5',
    name: 'SEABEST INTERNATIONAL PTY LTD',
    postCode: '4226',
    state: 'QLD',
    operations: [
      { action: 'Loading', subject: 'dairy commodity containers' },
      { action: 'Loading', subject: 'dairy produce' },
      { action: 'Storing', subject: 'dairy commodity(chilled, frozen)' },
      { action: 'Validating', subject: 'export certification' },
    ],
  },
  {
    estNo: '11',
    name: 'OZ CARE AUSTRALIA PTY LTD',
    postCode: '2143',
    state: 'NSW',
    operations: [
      { action: 'Loading', subject: 'dairy commodity containers' },
      { action: 'Storing', subject: 'dairy commodity(unrefrigerated)' },
    ],
  },
];
