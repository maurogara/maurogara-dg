import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {

  constructor() { }

  img = "/assets/port/editorial01.jpg";
  info = "Diseño de manual de viajes"

  ngOnInit(): void {
  }

}
