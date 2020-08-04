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

  // Editorial
  proyectoImg = "/assets/port/editorial01.jpg"
  proyectoDesc = "Guía de destinos Turísticos para Adventure World Arg"

  proyectoImg2 = "/assets/port/editorial02.jpg"
  proyectoDesc2 = "Portadas periódico Ático. Salida Quincenal"

  proyectoImg3 = "/assets/port/editorial03.jpg"
  proyectoDesc3 = "Interior periódico Ático. Salida Quincenal"

  // Etiquetas
  proyectoImg4 = "/assets/port/etiquetas01.jpg"
  proyectoDesc4 = "Etiqueta para envases para distribuidora de alimentos."

  proyectoImg5 = "/assets/port/etiquetas02.jpg"
  proyectoDesc5 = "Etiqueta para envases para distribuidora de alimentos."

  proyectoImg6 = "/assets/port/etiquetas03.jpg"
  proyectoDesc6 = "Etiqueta para envases para distribuidora de alimentos."


  // Marca
  proyectoImg7 = "/assets/port/marca02.jpg"
  proyectoDesc7 = "Diseño de marca e identidad estudio de Arquitectura INDIGO"

  proyectoImg8 = "/assets/port/marca01.jpg"
  proyectoDesc8 = "Marca para programa de canal de YouTube."

  proyectoImg9 = "/assets/port/marca04.jpg"
  proyectoDesc9 = "Marca para programa de canal de YouTube."

  // Packs
  proyectoImg10 = "/assets/port/pack01.jpg"
  proyectoDesc10 = "Packaging para crema en base de cannabis. Green Relief"

  proyectoImg11 = "/assets/port/pack02.jpg"
  proyectoDesc11 = "Packaging para aceite de cannabis. Green Relief"

  proyectoImg12 = "/assets/port/pack03.jpg"
  proyectoDesc12 = "Diseño de bolsa plástica de Avena con maca"

}
