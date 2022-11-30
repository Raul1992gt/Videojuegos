import { Component, OnInit, Input } from '@angular/core';
import { Juego } from '../entidades/Juego';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {


  @Input() juego: Juego;


  constructor() { }

  ngOnInit(): void {
  }

}
