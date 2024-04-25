import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo: string = 'Registro de Usuarios';
  mensaje: string = "";
  registrado: boolean = false;
  nombre: string = "";  
  apellido: string = "";
  cargo: string = "";
  entradas: Array<{titulo:string}>;

  constructor(){
    this.entradas=[
      {titulo:"Python cada día más presente"},
      {titulo:"Java presente hace más de 20 años"},
      {titulo:"Javascript Cada vez más funcional"},
      {titulo:"Kotlin Es Android Renovado"},
      {titulo:"¿Dónde quedó Pascas?"}
      
    ]
  }

  registrarUsuario(){
    this.registrado = true;
    this.mensaje = "Usuario registrado con éxito";
  }

}
