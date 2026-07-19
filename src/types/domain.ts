export type EquipmentStatus =
    | 'available'
    | 'loaned'
    | 'maintenance';

export type MovementType =
    | 'loan'
    | 'return';

export interface Sector {
    id: string;
    name: string;
}

export interface Equipment {
  id: string;
  name: string;
  brand: string;
  model: string;
  assetNumber: string;
  serialNumber: string;
  status: EquipmentStatus;
  currentSectorId: string;
}