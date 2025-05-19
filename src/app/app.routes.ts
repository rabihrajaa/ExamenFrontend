import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientListComponent} from './client-list/client-list.component';
import {CreditListComponent} from './credit-list/credit-list.component';
import {CreditAddComponent} from './credit-add/credit-add.component';
import {RemboursementListComponent} from './remboursement-list/remboursement-list.component';
import {RemboursementAddComponent} from './remboursement-add/remboursement-add.component';
import {AddClientComponent} from './add-client/add-client.component';

export const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },

  { path: 'clients', component: ClientListComponent },
  { path: 'clients/ajouter', component: AddClientComponent },

  { path: 'credits', component: CreditListComponent },
  { path: 'credits/ajouter', component: CreditAddComponent },

  { path: 'remboursements/credit/:id', component: RemboursementListComponent },
  { path: 'remboursements/ajouter/:id', component: RemboursementAddComponent },

  { path: '**', redirectTo: 'clients' }
];
