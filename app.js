import 'dotenv/config'
import { connectDB } from './src/config/connect.js'
import fastify from 'fastify';
import { PORT } from './src/config/config.js';

const start= async()=>{
    await connectDB(process.env.MONGO_URI);
    const app= fastify()
    app.listen({port:PORT,host:'0.0.0.0'},(error,addr)=>{
        if(error){
            console.log("Erron in running server",error)
        }
        else{
            console.log(`Grocerry app is running in http://localhost:${PORT}`)
        } 
    }) 

} 
start();