import { Component, OnInit } from '@angular/core';

import usuarios from 'src/assets/data/usuarios.json'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Usuarios: any = usuarios;
  
  constructor() { }

  ngOnInit(): void {
  }

}
