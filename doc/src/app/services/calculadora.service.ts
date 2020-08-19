import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calcular } from '../models/Calculador';
@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  
  constructor(private http: HttpClient  ) { }
  PruebaCalculador(){
     return this.http.get('http://localhost:3000/');
   }

   AnalizarCodigo(numero:Calcular){
    return this.http.post('http://localhost:3000/calcular',numero);
  }
 





}
