import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-acccount-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div>
      <h1>nombre</h1>
      <!-- Tu contenido aquí -->
    </div>
  `,
  styles: []
})
export class nombreComponent {
  private fb = inject(FormBuilder);

  form: FormGroup = this.fb.group({
    // Define tus controles aquí
  });
}
