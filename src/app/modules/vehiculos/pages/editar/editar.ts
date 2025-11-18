import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VehiculosService } from '../../services/vehiculos';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar.html',
  styleUrls: ['./editar.css']
})
export class EditarComponent implements OnInit {

  id = 0;
  cargando = true;

  vehiculo = {
    marca: '',
    modelo: '',
    anio: null,
    tipo: '',
    kilometraje: null
  }

  constructor(
    private route: ActivatedRoute,
    private vehiculosService: VehiculosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.cargar();
  }

  cargar() {
    this.vehiculosService.obtener(this.id).subscribe({
      next: res => {
        this.vehiculo = res.data;
        this.cargando = false;
      }
    });
  }

  actualizar() {
    this.vehiculosService.actualizar(this.id, this.vehiculo).subscribe({
      next: () => {
        alert("Vehículo actualizado");
        this.router.navigate(['/vehiculos']);
      }
    });
  }

  volver() {
    this.router.navigate(['/vehiculos']);
  }
}
