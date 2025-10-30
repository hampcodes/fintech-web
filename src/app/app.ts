import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountListComponent } from './features/accounts/account-list.page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AccountListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fintech-web');
}
