import { AccountResponse } from './../../core/models/account.model';
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../core/services/account.service';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Lista de Cuenta</h1>
      <table>
        <thead>
          <th>Id</th>
          <th>Nro de Cuenta</th>
          <th>Balance</th>
        </thead>
        <tbody>
          @for (account of accounts(); track account.id) {
            <tr>
              <td>{{account.id}}</td>
              <td>{{account.accountNumber}}</td>
              <td>{{account.balance}}</td>
            </tr>
          }@empty {
            <p>
              No hay cuentas registradas
            </p>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: []
})
export class AccountListComponent {
  private accountService = inject(AccountService);

  accounts = signal<AccountResponse[]>([]);

  ngOnInit(){
    this.loadAccounts();
  }

  loadAccounts():void{
    this.accountService.getAll().subscribe({
      next:(data)=>{
        this.accounts.set(data||[]);
      },
      error:(error)=>{
        this.accounts.set([]);
      }
    });
  }

}
