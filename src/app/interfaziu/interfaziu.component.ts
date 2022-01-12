import { Component, OnInit } from '@angular/core';
import { FormulaComponent } from '../Funcionalidad/formula.component';


@Component({
  selector: 'app-interfaziu',
  templateUrl: './interfaziu.component.html',
  styleUrls: ['./interfaziu.component.css']
})
export class InterfaziuComponent implements OnInit {

  constructor() { }

     componente = new FormulaComponent();

  resultado = 0;
  a = 0;
  b = 0;
  hypotenuse=0;


  ngOnInit(): void {
  }

getResultado(){
    let myresult = 0;
    myresult = this.componente.teo(this.a, this.b);
    this.resultado = myresult;
  }


}
