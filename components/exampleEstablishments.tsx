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
  {
    estNo: '17',
    name: 'DOCKSIDE COLDSTORE PTY LTD',
    postCode: '3012',
    state: 'VIC',
    operations: [
      { action: 'Loading', subject: 'dairy commodity containers' },
      { action: 'Storing', subject: 'dairy commodity(chilled, frozen)' },
      { action: 'Validating', subject: 'export certification' },
    ],
  },
  {
    estNo: '44',
    name: 'AUSTRACOLD (VIC) PTY LTD',
    postCode: '3062',
    state: 'VIC',
    operations: [
      { action: 'Loading', subject: 'dairy commodity containers' },
      { action: 'Storing', subject: 'dairy commodity(chilled, frozen, unrefrigerated)' },
      { action: 'Validating', subject: 'export certification' },
    ],
  },

  {
    estNo: '45',
    name: 'LAVERTON COLD STORAGE PTY LTD',
    postCode: '3029',
    state: 'VIC',
    operations: [
      { action: 'Storing', subject: 'dairy commodity(chilled, frozen)' },
      { action: 'Validating', subject: 'export certification' },
    ],
  },
  {
    estNo: '56',
    name: 'DARNUM PARK PTY LTD',
    postCode: '3149',
    state: 'VIC',
    operations: [
      { action: 'Producing', subject: 'condensed milk and condensed milk prods' },
      { action: 'Producing', subject: 'cream and cream products' },
      { action: 'Producing', subject: 'dried milk and dried milk products' },
      { action: 'Producing', subject: 'infant powder' },
      { action: 'Producing', subject: 'stockfood (powder)' },
      { action: 'Producing', subject: 'whey & whey products' },
      { action: 'Packing', subject: 'condensed milk and condensed milk prods' },
      { action: 'Packing', subject: 'cream and cream products' },
      { action: 'Packing', subject: 'dried milk and dried milk products' },
      { action: 'Packing', subject: 'infant powder' },
      { action: 'Storing', subject: 'dairy commodity(unrefrigerated)' },
    ],
  },
  {
    estNo: '57',
    name: 'H. J. HEINZ COMPANY AUSTRALIA LIMITED',
    postCode: '3006',
    state: 'VIC',
    operations: [
      { action: 'Producing', subject: 'dairy desserts' },
      { action: 'Producing', subject: 'yogurt' },
      { action: 'Storing', subject: 'dairy commodity(chilled, frozen, unrefrigerated)' },
      { action: 'Validating', subject: 'export certification' },
    ],
  },
];
