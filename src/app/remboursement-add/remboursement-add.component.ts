import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { RemboursementService } from '../services/remboursement.service';
import { ActivatedRoute, Router } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-remboursement-add',
  imports: [
    ReactiveFormsModule,CommonModule
  ],
  templateUrl: './remboursement-add.component.html'
})
export class RemboursementAddComponent implements OnInit {
  remboursementForm!: FormGroup;
  creditId!: number;
  types = ['Mensualité', 'Remboursement anticipé'];

  constructor(
    private fb: FormBuilder,
    private remboursementService: RemboursementService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.creditId = Number(this.route.snapshot.paramMap.get('id'));
    this.remboursementForm = this.fb.group({
      date: ['', Validators.required],
      montant: ['', [Validators.required, Validators.min(0)]],
      type: ['Mensualité', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.remboursementForm.invalid) return;

    const remboursement = {
      ...this.remboursementForm.value,
      creditId: this.creditId
    };

    this.remboursementService.create(remboursement).subscribe({
      next: () => this.router.navigate(['/credits']),
      error: (err) => console.error('Erreur ajout remboursement :', err)
    });
  }
}
