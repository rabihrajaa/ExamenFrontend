import { Component } from '@angular/core';
import {Client, ClientService} from '../services/client.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-client',
  imports: [
    FormsModule
  ],
  templateUrl: './add-client.component.html'
})
export class AddClientComponent {
  client: Client = { nom: '', email: '' };

  constructor(private clientService: ClientService) {}

  onSubmit() {
    this.clientService.add(this.client).subscribe(() => {
      alert('Client ajouté');
      this.client = { nom: '', email: '' };
    });
  }
}
