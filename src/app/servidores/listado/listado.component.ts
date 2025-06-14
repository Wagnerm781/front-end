import { Component } from '@angular/core';
import { Servidor } from '../servidor.model';
import { ServidoresService } from '../servidores.service';

@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  servidores: Servidor[] = [];

  constructor(private servidoresService: ServidoresService) {}

  ngOnInit(): void {
    this.servidoresService.obtenerTodos().subscribe((data) => {
      this.servidores = data;
    });
  }

}
