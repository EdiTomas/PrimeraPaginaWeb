import { Request, Response} from 'express';

class indexController{
       public index (req:Request,res:Response)
       {
          // res.send('Hola mundo')
           res.json({message:"Hola mundo"})
        }

}

export const indexcontroller=new indexController();