import { Component, OnInit } from '@angular/core';
import { Juego } from '../entidades/Juego';

@Component({
  selector: 'app-lsitar-juegos',
  templateUrl: './lsitar-juegos.component.html',
  styleUrls: ['./lsitar-juegos.component.css']
})
export class LsitarJuegosComponent implements OnInit {
  
  listaJuegos : Juego[] = [];
  juego : Juego | null = null;
  
  constructor() {
    this.cargarJuegos();
     }

  public cargarJuegos(){
    
    let juego : Juego = new Juego( "Call of Duty", "microsfot", "./assets/img/cod.png", 7.8, "Fue desarrollado por Infinity Ward, con la colaboración de Pi Studios, y publicado al mercado el 4 de noviembre de 2005 para PC, un mes más tarde lo hizo para Xbox 360 simultáneamente con la salida de esta videoconsola. Al igual que su predecesor está basado en la Segunda Guerra Mundial.");
    this.listaJuegos.push(juego);
    juego = new Juego("God of War", "SCE Santa Monica Studio", "./assets/img/GOW.png", 8, "En resumen, todo God of War 4 fue un viaje de Kratos y su hijo, Atreus, hasta la cima más alta del mundo para depositar las cenizas de su mujer, Faye. Ocultándose de los Dioses como mortales, Atreus se enteraba de que su padre era un Dios y él, por tanto, un Semidios.");
    this.listaJuegos.push(juego);
    juego = new Juego("Grand Theft Auto V","Rockstar ", "./assets/img/GTA.png", 7.8, "Grand Theft Auto cuenta la historia de distintos criminales y aunque sean varios, por una razón se van relacionando y envolviendo en problemas a más personajes conforme va pasando el tiempo. Generalmente los protagonistas son antihéroe");
    this.listaJuegos.push(juego);
    juego = new Juego("Zelda", "Nintendo EPD","./assets/img/zelda.png", 7.9,"Su trama por lo general describe las heroicas aventuras del joven guerrero Link, que debe enfrentarse a peligros y resolver acertijos para ayudar a la Princesa Zelda a derrotar a Ganondorf y salvar su hogar, el reino de Hyrule.");
    this.listaJuegos.push(juego);
    juego = new Juego("Skyrim","Bethesda Game Studios", "./assets/img/skrym.png", 7.8,"La historia de Skyrim se centra en los esfuerzos del personaje, Dovahkiin (sangre de dragón), para derrotar a Alduin, un dragón/dovah que, según la profecía, destruirá el mundo. La trama está fechada doscientos años después de los sucesos de Oblivion y tiene lugar en la provincia ficticia de Skyrim​.");
    this.listaJuegos.push(juego);
  }

  ngOnInit(): void {
  }

}
