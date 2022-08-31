import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paginaAngular';
  public edad:number = 0;
  public modoOriginal:string = "Normal";
  public modoOscuro:string = "Oscuro";
  public modo:string = this.modoOriginal;
  public mostrarClase:boolean = false;

  public aumentarEdad():void{
    this.edad = this.edad + 1;
  }

  public cambiarModo():void{
    if(this.modo === this.modoOriginal){
      this.modo = this.modoOscuro;
    } else {
      this.modo = this.modoOriginal;
    }
  }
}
