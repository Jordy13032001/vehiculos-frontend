import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculosService } from '../../services/vehiculos';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear.html',
  styleUrls: ['./crear.css']
})
export class CrearComponent {

  vehiculo = {
    marca: '',
    modelo: '',
    anio: null,
    tipo: '',
    kilometraje: null
  };

  constructor(
    private vehiculosService: VehiculosService,
    private router: Router
  ) {}

  guardar() {
    this.vehiculosService.crear(this.vehiculo).subscribe({
      next: () => {
        alert("Vehículo creado");
        this.router.navigate(['/vehiculos']);
      }
    });
  }

  volver() {
    this.router.navigate(['/vehiculos']);
  }
}
