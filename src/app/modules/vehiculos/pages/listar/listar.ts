import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { VehiculosService } from '../../services/vehiculos';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './listar.html',
  styleUrls: ['./listar.css']
})
export class ListarComponent implements OnInit {

  vehiculos: any[] = [];
  cargando = true;

  constructor(
    private vehiculosService: VehiculosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerVehiculos();
  }

  obtenerVehiculos() {
    this.vehiculosService.listar().subscribe({
      next: res => {
        this.vehiculos = res.data;
        this.cargando = false;
      },
      error: err => {
        console.error(err);
        this.cargando = false;
      }
    });
  }

  crearVehiculo() {
    this.router.navigate(['/vehiculos/crear']);
  }

  editarVehiculo(id: number) {
    this.router.navigate([`/vehiculos/editar/${id}`]);
  }

  eliminarVehiculo(id: number) {
    if (!confirm("¿Seguro?")) return;

    this.vehiculosService.eliminar(id).subscribe({
      next: () => this.obtenerVehiculos()
    });
  }
}
