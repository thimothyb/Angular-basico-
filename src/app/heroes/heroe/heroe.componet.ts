import { Component } from "@angular/core";





@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'


})
export class HeroeComponent{

    nombre: string = 'Iroman'
    edad  : number = 45

    get nombrecapitalizado():string{

        return this.nombre.toUpperCase();
    }
     
    Obtenernombre (): string{
            return `${this.nombre}-${this.edad} `;
    }

    cambiarnombre (): void {

        this.nombre = 'Spiderman';


    }

    cambiaredad ():void {

        this.edad = 30 ;
    }


}