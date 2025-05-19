import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client-list.component.html'
})
export class ClientListComponent implements OnInit {

  clients!: Observable<Client[]>;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clients = this.clientService.getAll();
  }
}
