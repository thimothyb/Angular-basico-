import { splitAtColon } from '@angular/compiler/src/util';
import { Component, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman','Iroman', 'Hulk' , 'Thor', 'Capitan America'];
  heroeborrado: string = '' 

  borrarHeroe () {
    this.heroeborrado =  this.heroes.shift () || '';  
  }

  
}  



