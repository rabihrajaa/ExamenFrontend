export interface Remboursement {
  id?: number;
  date: string; // ISO string
  montant: number;
  type: 'Mensualité' | 'Remboursement anticipé';
  creditId?: number; // référence au crédit associé
}
