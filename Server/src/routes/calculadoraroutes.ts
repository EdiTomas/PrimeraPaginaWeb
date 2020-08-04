import { Router } from 'express'
//import { calculadoracontroller } from '../Controller/CalculadoraController';
class CalculadoraRouter{
    public router: Router = Router();  
     constructor(){
      this.config();
     }
      
     
     config():void{
//       this.router.get('/',calculadoracontroller.index);
      }

    
}

const calcRouter =new CalculadoraRouter(); 
export default calcRouter.router;

