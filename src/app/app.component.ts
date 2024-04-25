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

  registrarUsuario(){
    this.registrado = true;
    this.mensaje = `Usuario ${this.nombre} ${this.apellido} se registrado con éxito`;
  }

}
