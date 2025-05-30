import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  acceptedTerms: boolean = false;

  onSubmit() {
    if (this.acceptedTerms) {
      console.log('Correo:', this.email);
      console.log('Contraseña:', this.password);
      alert('Inicio de sesión exitoso (simulado)');
    } else {
      alert('Debes aceptar los términos y condiciones.');
    }
  }
}
