import { Component, OnInit, Input } from '@angular/core';

import videojuegos from 'src/assets/data/videojuegos.json'
@Component({
  selector: 'app-lsitar-juegos',
  templateUrl: './lsitar-juegos.component.html',
  styleUrls: ['./lsitar-juegos.component.css']
})
export class LsitarJuegosComponent implements OnInit {

  @Input() dataEntrante: any;

  Videojuegos: any = videojuegos;
  
  
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
