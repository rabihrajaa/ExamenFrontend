export interface Credit {
  id?: number;
  dateDemande: string; // ISO string date
  statut: 'En cours' | 'Accepté' | 'Rejeté';
  dateAcception?: string;
  montant: number;
  duree: number; // durée remboursement en mois
  tauxInteret: number;
  type: 'Personnel' | 'Immobilier' | 'Professionnel';

  motif?: string; // pour Personnel et Professionnel
  raisonSociale?: string; // pour Professionnel
  typeBienFinance?: string; // pour Immobilier
}
