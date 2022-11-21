import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lsitar-juegos',
  templateUrl: './lsitar-juegos.component.html',
  styleUrls: ['./lsitar-juegos.component.css']
})
export class LsitarJuegosComponent implements OnInit {

  /*Propiedades */
  id: number;
  title: string;
  company: string;
  cover: string;
  rating: number;
  
  
  constructor() {
    this.id = 1;
    this.title = "Call of Duty";
    this.company = "microsoft";
    this.cover = "imagen";
    this.rating = 7.8;
   }

  ngOnInit(): void {
  }

}
