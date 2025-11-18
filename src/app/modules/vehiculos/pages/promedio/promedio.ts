import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { VehiculosService } from '../../services/vehiculos';

@Component({
  selector: 'app-promedio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promedio.html',
  styleUrls: ['./promedio.css']
})
export class PromedioComponent implements OnInit {

  promedio = 0;
  cargando = true;

  constructor(
    private vehiculosService: VehiculosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.calcular();
  }

  calcular() {
    this.cargando = true;

    this.vehiculosService.promedioKm().subscribe({
      next: (res) => {
        this.promedio = res.promedio;
        this.cargando = false;
      },
      error: (err) => {
        console.error(err);
        this.cargando = false;
      }
    });
  }

  volver() {
    this.router.navigate(['/vehiculos']);
  }
}
