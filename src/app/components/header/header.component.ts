import { Component, OnInit } from '@angular/core';

import videojuegos from 'src/assets/data/videojuegos.json'
import { Juego } from '../entidades/Juego';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  listaJuegos: Juego[] = videojuegos;
  
  constructor() { }

  ngOnInit(): void {
  }

}
