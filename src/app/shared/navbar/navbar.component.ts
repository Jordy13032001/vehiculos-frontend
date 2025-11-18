import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';   // ← NECESARIO
import { CommonModule } from '@angular/common';   // ← Recomendado

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],          // ← AGREGA ESTO
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {}
