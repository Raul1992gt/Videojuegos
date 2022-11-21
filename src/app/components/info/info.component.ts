import { Component, OnInit } from '@angular/core';

import videojuegos from 'src/assets/data/videojuegos.json'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  Videojuegos: any = videojuegos;
  constructor() { }

  ngOnInit(): void {
  }

}
