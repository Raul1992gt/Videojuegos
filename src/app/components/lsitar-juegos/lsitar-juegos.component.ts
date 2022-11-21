import { Component, OnInit } from '@angular/core';

import videojuegos from 'src/assets/data/videojuegos.json'
@Component({
  selector: 'app-lsitar-juegos',
  templateUrl: './lsitar-juegos.component.html',
  styleUrls: ['./lsitar-juegos.component.css']
})
export class LsitarJuegosComponent implements OnInit {


  Videojuegos: any = videojuegos;
  
  
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
