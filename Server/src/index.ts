import express,{Application} from  'express';
import indexRoutes from './routes/indexroutes';
import calcRouter from './routes/calculadoraroutes';
 //import { calculadoracontroller } from './Controller/CalculadoraController';   
import morgan from 'morgan';
import cors from 'cors'; 

class Server{
      public app:Application;
                constructor(){
                    this.app= express();
                    this.config();
                    this.routes();
              }
     
      config(): void {
      this.app.set('port', process.env.PORT || 3000);
      this.app.use(morgan('dev')); 
      this.app.use(cors());
      this.app.use(express.json());   
      this.app.use(express.urlencoded({extended:false})); 
    }

    
        routes(): void{
         this.app.use('/',indexRoutes);
       
         this.app.get('/', function(req, res){
          let json2 =  {
              name: "Edi Yonani",
              carne: "201503608"
          }
          console.log("JUAN LUIS ROBLES MOLINA 201503608");
         return res.json(json2);
          });          

          this.app.post('/calcular', async function(req,res){
          let digito1 = req.body.id1;  // esto es la respuesta de cliente o requerimiento del cliente
          let digito2 = req.body.id2;  // o del objecto del calcular de lado del cliente                   
          
      //  const calculado =calculadoracontroller.calcular(digito1,digito2);            
          const calculado = require('./Controller/CalculadoraController.js'); // le coloque js porque no traduce a ts
          const resultado  = calculado.sumar(digito1,digito2); 
              let json = {
              respuesta :resultado,
          };
           return res.json(json);
      }
  ); 






       } 
     start(): void{
             this.app.listen(this.app.get('port'), ()=>{
             console.log('Server on port', this.app.get('port'));
             }); 
     }

} 
const server = new Server();
server.start();
