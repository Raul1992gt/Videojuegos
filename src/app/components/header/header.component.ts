import { Component, OnInit } from '@angular/core';

import videojuegos from 'src/assets/data/videojuegos.json'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  Videojuegos: any = videojuegos;
  
  constructor() { }

  ngOnInit(): void {
  }

}
