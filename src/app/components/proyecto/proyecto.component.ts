import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {

  constructor() { }

  @Input() img: string;
  @Input() desc: string;

  ngOnInit(): void {
  }

}
