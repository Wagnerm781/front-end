import { Component, OnInit } from '@angular/core';
import { Servidor } from '../../servidores/servidor.model';
import { ServidoresService } from '../../servidores/servidores.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  servidores: Servidor[] = [];
  mostrarFormulario = false;

  constructor(private servidorService: ServidoresService) {}
  ngOnInit(): void {
    this.cargarServidores();
  }

  cargarServidores():void {
    this.servidorService.obtenerTodos().subscribe(data => {
      this.servidores = data;
    });
  }

  onServidorCreado(nuevo: Servidor): void {
    this.servidores.push(nuevo);
    this.mostrarFormulario = false;
  }
  
  toggleFormulario(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  nuevoCurso = {
    nombre: '',
    descripcion: ''
  }
  
  crearCurso(): void {
    const nuevo: Servidor = {
      id: Math.random().toString(),
      nombre: this.nuevoCurso.nombre,
      descripcion: this.nuevoCurso.descripcion,
    };

    this.servidorService.crear(nuevo).subscribe(data => {
    this.servidores.push(data);
    this.mostrarFormulario = false;
    this.nuevoCurso = { nombre: '', descripcion: '' };
  });

  }
   
}
