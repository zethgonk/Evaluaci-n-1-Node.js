import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  imports: [],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css'
})
export class Cabecera {

  titulo: string = 'Conecta Estudiante';

  subtitulo: string =
    'Un sistema digital sencillo e intuitivo para la escuela';

}