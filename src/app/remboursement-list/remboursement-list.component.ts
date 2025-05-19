import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RemboursementService } from '../services/remboursement.service';
import {Remboursement} from '../../models/remboursement';
import {CommonModule, CurrencyPipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-remboursement-list',
  imports: [
    DatePipe,
    CurrencyPipe,CommonModule
  ],
  templateUrl: './remboursement-list.component.html'
})
export class RemboursementListComponent implements OnInit {
  @Input() creditId!: number;

  remboursements$!: Observable<Remboursement[]>;

  constructor(private rembService: RemboursementService) {}

  ngOnInit(): void {
    if (this.creditId) {
      this.remboursements$ = this.rembService.getByCreditId(this.creditId);
    }
  }
}
