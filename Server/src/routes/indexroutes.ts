import { Router } from 'express'
import { indexcontroller } from '../Controller/indexController';
class Indexrouter{
    public router: Router = Router();  
     constructor(){
      this.config();
     }
      
     
     config():void{
       this.router.get('/',indexcontroller.index);
      }

    
}

const indexRouter =new Indexrouter(); 
export default indexRouter.router;