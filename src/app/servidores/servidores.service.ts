import { Injectable } from '@angular/core';
import { Servidor } from './servidor.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServidoresService {
  private servidores: Servidor[] = [
    { id: '1', nombre: 'Servidor Test 1', descripcion: 'Servidor de prueba'},
    { id: '2', nombre: 'Servidor Dev', descripcion: 'Servidor de desarrollo'},
  ];

  obtenerTodos():Observable<Servidor[]> {
    return of(this.servidores);
  }

  crear(servidor: Servidor): Observable<Servidor> {
    servidor.id = Math.random().toString();
    this.servidores.push(servidor);
    return of(servidor);
  } 
}
