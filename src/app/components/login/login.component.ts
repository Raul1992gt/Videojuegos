import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

/*
 public hayErroresEnFormulario():boolean{
    let error : boolean = false
    this.ocultarMensajesError()

    if(this.nombre.trim().length==0){
      this.nombreObligatorioOculto = false
      error = true
    }
    if(this.password.trim().length==0){
      this.universoObligatorioOculto = false
      error = true
    }
    return error
  }
*/


}

