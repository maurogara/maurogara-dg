import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  mostrarActual= 'todo'
  mostarTodo = true;

  
  mostarLista () {

    this.mostarTodo = !this.mostarTodo;
  }
  

  mostrarItem (categoria: string) {
    console.log(categoria);
    
      this.mostrarActual = categoria      
  }

  ngOnInit(): void {
  }

}
