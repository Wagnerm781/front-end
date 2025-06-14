import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-nav',
    standalone: false,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css'
  })
  export class NavComponent implements OnInit {
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
