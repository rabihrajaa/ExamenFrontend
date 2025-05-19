import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, ClientService } from '../services/client.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-client',
  imports: [CommonModule],
  templateUrl: './client-list.component.html'
})
export class ClientListComponent implements OnInit {

  clients$!: Observable<Client[]>;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clients$ = this.clientService.getAll(); // ✅ Pas d’abonnement manuel
  }
}
