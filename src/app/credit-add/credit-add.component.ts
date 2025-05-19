import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CreditService } from '../services/credit.service';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-credit-add',
  imports: [
    ReactiveFormsModule,CommonModule
  ],
  templateUrl: './credit-add.component.html'
})
export class CreditAddComponent {
  creditForm: FormGroup;
  typesCredit = ['Personnel', 'Immobilier', 'Professionnel'];
  statutOptions = ['En cours', 'Accepté', 'Rejeté'];

  constructor(
    private fb: FormBuilder,
    private creditService: CreditService,
    private router: Router
  ) {
    this.creditForm = this.fb.group({
      dateDemande: ['', Validators.required],
      statut: ['En cours', Validators.required],
      dateAcception: [''],
      montant: ['', [Validators.required, Validators.min(0)]],
      duree: ['', [Validators.required, Validators.min(1)]],
      tauxInteret: ['', [Validators.required, Validators.min(0)]],
      type: ['', Validators.required],

      motif: [''],           // Pour Personnel / Professionnel
      raisonSociale: [''],   // Pour Professionnel
      typeBienFinance: ['']  // Pour Immobilier
    });
  }

  onSubmit() {
    if (this.creditForm.invalid) {
      return;
    }

    const credit = this.creditForm.value;
    // On peut gérer ici la logique pour nettoyer les champs selon type, si besoin

    this.creditService.create(credit).subscribe({
      next: () => this.router.navigate(['/credits']),
      error: (err) => console.error('Erreur création crédit', err)
    });
  }
}
