import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { QuienComponent } from './pages/quien/quien.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { QueComponent } from './pages/que/que.component';
import { PortComponent } from './pages/port/port.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienComponent,
    NavComponent,
    FooterComponent,
    QueComponent,
    PortComponent,
    GaleriaComponent,
    ProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
