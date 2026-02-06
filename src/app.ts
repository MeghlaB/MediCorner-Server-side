import express, { Application, Request, Response } from "express"
import cors from "cors"




const app: Application = express()

app.use(cors({
    origin: [
        'http://localhost:3000', 
       
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))




app.use(express.json())



app.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        success: true,
        message: 'MediCorner Server is running',
        path: req.path
    })
})



// app.use(errorHandler)



export default app; 