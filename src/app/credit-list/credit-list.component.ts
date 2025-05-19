import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditService } from '../services/credit.service';
import {Credit} from '../../models/credit';
import {CommonModule, CurrencyPipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-credit-list',
  imports: [
    DatePipe,
    CurrencyPipe,CommonModule
  ],
  templateUrl: './credit-list.component.html'
})
export class CreditListComponent implements OnInit {
  credits$!: Observable<Credit[]>;

  constructor(private creditService: CreditService) {}

  ngOnInit(): void {
    this.credits$ = this.creditService.getAll();
  }
}
