import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  userLoginOn:boolean=false;

    constructor() {}
    
    ngOnInit(): void {
    }

  email: string = '';
    password: string = '';
    acceptedTerms: boolean = false;

    onSubmit() {
      if (this.acceptedTerms) {
        console.log('Correo:', this.email);
        console.log('Contraseña:', this.password);
        alert('Inicio de sesión exitoso');
      } else {
        alert('Debes aceptar los términos y condiciones.');
      }
    }
  }
