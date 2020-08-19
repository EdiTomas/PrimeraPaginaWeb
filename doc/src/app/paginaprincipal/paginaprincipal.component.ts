import { Component, OnInit, HostBinding } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service'
import { Calcular } from '../models/Calculador';
@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.component.html',
  styleUrls: ['./paginaprincipal.component.css']
})
export class PaginaprincipalComponent implements OnInit {
  jsonn:any[]=[];
  total:string="";
    calcular:Calcular={
       id1 :0,
       id2 :0
           
    };
 
  constructor(private calculadoraservice:CalculadoraService) { }
  ngOnInit(): void {
    
    }

    Ejecutar(){

         //   console.log(this.calcular);   
         //   console.log('Numero1 '+this.calcular.id1);
         //   console.log('Numero2 '+this.calcular.id2);
             
            this.calculadoraservice.AnalizarCodigo(this.calcular).subscribe(
              
              res=>{
                this.jsonn[0]=res; //obtener el resultado     
              //  this.total=JSON.stringify(this.jsonn[0].json).toString();                 
                  this.total= this.jsonn[0].respuesta ;  
              console.log(res);
           },
             err=> console.log(err)   
         )
         //  alert('Hola mundo');   
                 
    }



}
