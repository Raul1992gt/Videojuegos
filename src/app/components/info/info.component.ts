import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import videojuegos from 'src/assets/data/videojuegos.json'
import { Juego } from '../entidades/Juego';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() dataEntrante: any;
  listaJuegos: Juego = videojuegos;
  id: number = 0;
  title: string = '';
  rating: number = 0;
  detail: string = '';

  constructor(route:ActivatedRoute) { 
    this.id = route.snapshot.params["id"];
    this.title = route.snapshot.params["title"];
    this.rating = route.snapshot.params["rating"];
    this.detail = route.snapshot.params["detail"];
  }

  ngOnInit(): void {
  }


}
