import 'dotenv/config'
import { connectDB } from './src/config/connect.js'
import fastify from 'fastify';
import { PORT } from './src/config/config.js';
import fastifySocketIO from 'fastify-socket.io';
import { registerRoutes } from './src/routes/index.js';


const start= async()=>{
    await connectDB(process.env.MONGO_URI);
    const app= fastify();

    app.register(fastifySocketIO,{
        cors:{
            origin:"*"
        },
        pingInterval:10000,
        pingTimeout:5000,
        transports:['websocket']

    })

    await registerRoutes(app)


    app.listen({port:PORT,host:'0.0.0.0'},(error,addr)=>{
        if(error){
            console.log("Erron in running server",error)
        }
        else{
            console.log(`Grocerry app is running in http://localhost:${PORT}`)
        } 
    }) 

    app.ready().then(()=>{
        app.io.on('connection',(socket)=>{
            console.log("A user connected")

                socket.on('joinRoom',(orderId)=>{
                    socket.join(orderId);
        
                    console.log(`user joined room ${orderId}`)
                })

    
                socket.on('disconnect',()=>{
                console.log("User is disconnected")
                })
            })
        })
        


} 
start();