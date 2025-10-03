export interface Store {
  id: string;
  address1: string;
  zipcode: string;
  customerId?: string;
  recommendService: boolean;
  recommendPurchek: boolean;
  recommendContainment: boolean;
  recommendPairedWheel: boolean;
}

export interface Filters {
  serviceRecommended: boolean;
  purchekRecommended: boolean;
  containmentRecommended: boolean;
  pairedWheelRecommended: boolean;
}