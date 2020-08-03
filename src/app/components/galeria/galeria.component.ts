import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  mostrarActual= 'editorial'
  mostrarTodo = true;

  listaTotal () {
    
    this.listaTotal = !this.listaTotal;
  }

  mostrarItem (categoria: string) {
    console.log(categoria);
    
      this.mostrarActual = categoria      
  }

  ngOnInit(): void {
  }

}
