/*
class CalculadoraController{
     
        public calcular(x1:number,x2:number){
           
          
          var total=( x1+x2);
           return total;
           
        }  

}

export const   calculadoracontroller=new CalculadoraController();
export default calculadoracontroller.calcular;
*/

const matematica ={

}




function sumar(d1:number,d2:number){
    return (Number(d1)+ Number(d2));
 
 }
 
 function Restar(d1:number,d2:number){
     return d1-d2;
 
 }
 function Multiplicar(d1:number,d2:number){
     return d1*d2;
 
 }
 function Dividir(d1:number,d2:number){
 
     if(d2==0){
      return 'Error en la division no se acepta ceros el numerador';
     }
    return d1/d2; 
 }

 exports.sumar=sumar;
 exports.Restar=Restar;
 exports.Multiplicar=Multiplicar;
 exports.Dividir=Dividir;






