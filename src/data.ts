import { v4 as uuidv4 } from 'uuid';
import { Store } from './types';

const addresses = [
  '123 Main St', '456 Oak Ave', '789 Pine Rd', '321 Elm St', '654 Maple Dr',
  '987 Cedar Ln', '147 Birch Way', '258 Walnut St', '369 Cherry Ave', '741 Ash Blvd',
  '852 Spruce St', '963 Hickory Ave', '159 Poplar Dr', '357 Willow Ln', '468 Dogwood St',
  '579 Magnolia Ave', '681 Sycamore Dr', '792 Cypress St', '134 Redwood Ave', '245 Palm Dr',
  '356 Fir St', '467 Cedar Creek', '578 Pine Valley', '689 Oak Hills', '790 Maple Grove',
  '801 Elm Park', '912 Birch View', '123 Sunset Blvd', '234 Ocean Ave', '345 Mountain View',
  '456 Valley Rd', '567 River St', '678 Lake Dr', '789 Forest Ave', '890 Prairie Ln',
  '901 Desert Way', '102 Coastal Dr', '203 Highland Ave', '304 Meadow St', '405 Grove Rd',
  '506 Park Ave', '607 Garden St', '708 Orchard Dr', '809 Vineyard Ln', '910 Ranch Rd',
  '111 Plaza Dr', '222 Center St', '333 Market Ave', '444 Commerce Dr', '555 Business Blvd'
];

const zipcodes = [
  '10001', '90210', '60601', '30309', '02101', '94102', '33101', '98101', '75201', '85001',
  '80202', '19103', '48226', '44113', '97201', '55401', '63101', '28202', '37203', '32202',
  '21201', '23219', '29201', '25301', '27601', '73102', '84101', '87102', '59601', '58501',
  '68102', '50309', '70112', '36104', '72201', '39201', '45202', '46204', '49684', '48104',
  '53202', '55102', '64108', '31401', '32801', '33602', '34102', '35203', '36602', '37402',
  '38103', '39402', '40202', '41101', '42101', '43215', '44101', '45202', '46802', '47708',
  '48226', '49503', '50309', '51503', '52240', '53202', '54301', '55401', '56001', '57401',
  '58102', '59405', '60601', '61602', '62701', '63101', '64108', '65101', '66603', '67202',
  '68102', '69101', '70112', '71201', '72201', '73102', '74103', '75201', '76102', '77002',
  '78701', '79901', '80202', '81501', '82001', '83702', '84101', '85001', '86001', '87102',
  '88001', '89101', '90210', '91201', '92101', '93101', '94102', '95814', '96801', '97201'
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCustomerId(): string | undefined {
  if (Math.random() < 0.6) {
    return `C${generateRandomNumber(100000, 999999)}`;
  }
  return undefined;
}

export function generateStoreData(): Store[] {
  const stores: Store[] = [];
  
  for (let i = 0; i < 100; i++) {
    const customerId = generateCustomerId();
    const recommendService = Math.random() < 0.3;
    const recommendPurchek = Math.random() < 0.4;
    const recommendContainment = Math.random() < 0.2;
    const recommendPairedWheel = customerId ? Math.random() < 0.25 : false;
    
    stores.push({
      id: uuidv4(),
      address1: getRandomElement(addresses),
      zipcode: getRandomElement(zipcodes),
      customerId,
      recommendService,
      recommendPurchek,
      recommendContainment,
      recommendPairedWheel
    });
  }
  
  return stores;
}

export const chartData = {
  currentPenetration: [
    { solution: 'Purchek', penetration: 65 },
    { solution: 'Containment', penetration: 45 },
    { solution: 'Cart Manager', penetration: 78 },
    { solution: 'Subscription', penetration: 32 }
  ],
  
  retailerGrowth: [
    { year: 2020, stores: 2500 },
    { year: 2021, stores: 2650 },
    { year: 2022, stores: 2780 },
    { year: 2023, stores: 2890 },
    { year: 2024, stores: 2950 },
    { year: 2025, stores: 3000 }
  ],
  
  gatekeeperRevenue: [
    { year: 2020, newInstall: 2.1, recurring: 0.8, reoccuring: 0.3 },
    { year: 2021, newInstall: 2.3, recurring: 1.1, reoccuring: 0.4 },
    { year: 2022, newInstall: 2.6, recurring: 1.3, reoccuring: 0.5 },
    { year: 2023, newInstall: 2.8, recurring: 1.6, reoccuring: 0.7 },
    { year: 2024, newInstall: 3.1, recurring: 1.8, reoccuring: 0.8 },
    { year: 2025, newInstall: 3.4, recurring: 2.1, reoccuring: 1.0 }
  ],
  
  newInstalls: [
    { year: 2020, purchek: 1200, containment: 1000, cartManager: 1100, subscription: 1050 },
    { year: 2021, purchek: 1250, containment: 1050, cartManager: 1150, subscription: 1100 },
    { year: 2022, purchek: 1300, containment: 1100, cartManager: 1200, subscription: 1150 },
    { year: 2023, purchek: 1350, containment: 1150, cartManager: 1250, subscription: 1200 },
    { year: 2024, purchek: 1400, containment: 1200, cartManager: 1300, subscription: 1250 },
    { year: 2025, purchek: 1450, containment: 1250, cartManager: 1350, subscription: 1300 }
  ]
};

export function generateRandomAmount(): number {
  return generateRandomNumber(50000, 80000);
}

export function generateRandomMonths(): number {
  return generateRandomNumber(12, 48);
}

export function generateRandomCrimeIndex(): number {
  return generateRandomNumber(100, 200);
}

export function generateRandomSites(): number {
  return generateRandomNumber(2, 5);
}