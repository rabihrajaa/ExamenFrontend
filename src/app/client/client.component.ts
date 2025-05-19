import { Component, OnInit } from '@angular/core';
import {Client, ClientService} from '../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html'
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getAll().subscribe(data => this.clients = data);
  }
}
