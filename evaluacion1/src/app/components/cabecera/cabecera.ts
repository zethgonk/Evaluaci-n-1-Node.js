import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  imports: [],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css'
})
export class Cabecera {

  titulo: string = 'CPH: Conecta Estudiante';

  subtitulo: string =
    'Un sistema digital sencillo e intuitivo para el Colegio Padre Hurtado';

}